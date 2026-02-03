import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useCart } from '@/contexts/CartContext';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';
import { Loader2, Clock, User, Phone, Mail, FileText } from 'lucide-react';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const formSchema = z.object({
  customerName: z.string().min(2, 'নাম দিতে হবে'),
  customerPhone: z.string().min(10, 'সঠিক ফোন নম্বর দিন'),
  customerEmail: z.string().email('সঠিক ইমেইল দিন').optional().or(z.literal('')),
  pickupTime: z.string().min(1, 'পিকআপ টাইম সিলেক্ট করুন'),
  specialInstructions: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

const generatePickupTimes = () => {
  const times: string[] = [];
  const now = new Date();
  const currentHour = now.getHours();
  const currentMinute = now.getMinutes();

  // Store hours: 8 AM - 6 PM
  for (let hour = 8; hour <= 18; hour++) {
    for (let minute = 0; minute < 60; minute += 30) {
      // Skip times that have already passed (with 30 min buffer)
      if (hour < currentHour || (hour === currentHour && minute <= currentMinute + 30)) {
        continue;
      }
      const time24 = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
      const period = hour >= 12 ? 'PM' : 'AM';
      const hour12 = hour > 12 ? hour - 12 : hour === 0 ? 12 : hour;
      const time12 = `${hour12}:${minute.toString().padStart(2, '0')} ${period}`;
      times.push(time12);
    }
  }

  return times.length > 0 ? times : ['দোকান বন্ধ'];
};

const CheckoutForm = () => {
  const { items, totalAmount, clearCart } = useCart();
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const pickupTimes = generatePickupTimes();

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      customerName: '',
      customerPhone: '',
      customerEmail: '',
      pickupTime: '',
      specialInstructions: '',
    },
  });

  const onSubmit = async (data: FormData) => {
    if (items.length === 0) {
      toast.error('আপনার কার্ট খালি');
      return;
    }

    setIsSubmitting(true);

    try {
      // Create order
      const { data: order, error: orderError } = await supabase
        .from('orders')
        .insert({
          customer_name: data.customerName,
          customer_phone: data.customerPhone,
          customer_email: data.customerEmail || null,
          pickup_time: data.pickupTime,
          special_instructions: data.specialInstructions || null,
          total_amount: totalAmount,
          status: 'pending',
        })
        .select()
        .single();

      if (orderError) throw orderError;

      // Create order items
      const orderItems = items.map(item => ({
        order_id: order.id,
        product_id: item.product.id,
        product_name: item.product.name,
        quantity: item.quantity,
        unit_price: Number(item.product.price),
      }));

      const { error: itemsError } = await supabase
        .from('order_items')
        .insert(orderItems);

      if (itemsError) throw itemsError;

      clearCart();
      toast.success('অর্ডার সফলভাবে প্লেস হয়েছে!');
      navigate('/order/confirmation', { state: { orderId: order.id, pickupTime: data.pickupTime } });
    } catch (error) {
      console.error('Order error:', error);
      toast.error('অর্ডার প্লেস করতে সমস্যা হয়েছে');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        {/* Customer Info */}
        <div className="space-y-4">
          <h3 className="font-serif text-xl text-foreground">আপনার তথ্য</h3>

          <FormField
            control={form.control}
            name="customerName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="flex items-center gap-2">
                  <User size={16} />
                  নাম *
                </FormLabel>
                <FormControl>
                  <Input placeholder="আপনার নাম" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="customerPhone"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="flex items-center gap-2">
                  <Phone size={16} />
                  ফোন নম্বর *
                </FormLabel>
                <FormControl>
                  <Input placeholder="04XX XXX XXX" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="customerEmail"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="flex items-center gap-2">
                  <Mail size={16} />
                  ইমেইল (ঐচ্ছিক)
                </FormLabel>
                <FormControl>
                  <Input placeholder="your@email.com" type="email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* Pickup Time */}
        <div className="space-y-4">
          <h3 className="font-serif text-xl text-foreground">পিকআপ সময়</h3>

          <FormField
            control={form.control}
            name="pickupTime"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="flex items-center gap-2">
                  <Clock size={16} />
                  সময় নির্বাচন করুন *
                </FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="পিকআপ টাইম সিলেক্ট করুন" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {pickupTimes.map(time => (
                      <SelectItem
                        key={time}
                        value={time}
                        disabled={time === 'দোকান বন্ধ'}
                      >
                        {time}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* Special Instructions */}
        <FormField
          control={form.control}
          name="specialInstructions"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="flex items-center gap-2">
                <FileText size={16} />
                বিশেষ নির্দেশনা (ঐচ্ছিক)
              </FormLabel>
              <FormControl>
                <Textarea
                  placeholder="কোনো বিশেষ অনুরোধ থাকলে লিখুন..."
                  rows={3}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Order Summary */}
        <div className="bg-secondary/50 p-4 rounded-sm space-y-3">
          <h3 className="font-serif text-lg text-foreground">অর্ডার সারাংশ</h3>
          {items.map(({ product, quantity }) => (
            <div key={product.id} className="flex justify-between text-sm">
              <span>
                {product.name} x {quantity}
              </span>
              <span>${(Number(product.price) * quantity).toFixed(2)}</span>
            </div>
          ))}
          <div className="border-t border-border pt-3 flex justify-between font-medium">
            <span>সর্বমোট</span>
            <span className="text-gold text-lg">${totalAmount.toFixed(2)}</span>
          </div>
          <p className="text-xs text-muted-foreground">
            💵 পেমেন্ট: পিকআপের সময় ক্যাশ
          </p>
        </div>

        <button
          type="submit"
          disabled={isSubmitting || items.length === 0}
          className="btn-luxury w-full disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              প্রসেসিং...
            </>
          ) : (
            'অর্ডার কনফার্ম করুন'
          )}
        </button>
      </form>
    </Form>
  );
};

export default CheckoutForm;
