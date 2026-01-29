import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Send, Loader2 } from 'lucide-react';

const enquirySchema = z.object({
  name: z.string().trim().min(1, 'Name is required').max(100, 'Name must be less than 100 characters'),
  email: z.string().trim().email('Please enter a valid email address').max(255, 'Email must be less than 255 characters'),
  phone: z.string().trim().max(20, 'Phone number must be less than 20 characters').optional().or(z.literal('')),
  subject: z.string().trim().min(1, 'Subject is required').max(200, 'Subject must be less than 200 characters'),
  message: z.string().trim().min(10, 'Message must be at least 10 characters').max(2000, 'Message must be less than 2000 characters'),
});

type EnquiryFormData = z.infer<typeof enquirySchema>;

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<EnquiryFormData>({
    resolver: zodResolver(enquirySchema),
  });

  const onSubmit = async (data: EnquiryFormData) => {
    setIsSubmitting(true);

    try {
      const { data: response, error } = await supabase.functions.invoke('send-enquiry', {
        body: {
          name: data.name,
          email: data.email,
          phone: data.phone || undefined,
          subject: data.subject,
          message: data.message,
        },
      });

      if (error) {
        throw error;
      }

      if (response?.success) {
        toast.success('Thank you for your enquiry!', {
          description: 'We will get back to you as soon as possible.',
        });
        reset();
      } else {
        throw new Error(response?.error || 'Failed to submit enquiry');
      }
    } catch (error) {
      console.error('Error submitting enquiry:', error);
      toast.error('Failed to submit enquiry', {
        description: 'Please try again or contact us directly by phone.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Name */}
      <div className="space-y-2">
        <Label htmlFor="name" className="text-luxury-caps text-foreground">
          Name *
        </Label>
        <Input
          id="name"
          {...register('name')}
          placeholder="Your full name"
          className="bg-background border-border focus:border-gold focus:ring-gold"
        />
        {errors.name && (
          <p className="text-destructive text-sm">{errors.name.message}</p>
        )}
      </div>

      {/* Email */}
      <div className="space-y-2">
        <Label htmlFor="email" className="text-luxury-caps text-foreground">
          Email *
        </Label>
        <Input
          id="email"
          type="email"
          {...register('email')}
          placeholder="your.email@example.com"
          className="bg-background border-border focus:border-gold focus:ring-gold"
        />
        {errors.email && (
          <p className="text-destructive text-sm">{errors.email.message}</p>
        )}
      </div>

      {/* Phone */}
      <div className="space-y-2">
        <Label htmlFor="phone" className="text-luxury-caps text-foreground">
          Phone <span className="text-muted-foreground font-normal normal-case">(optional)</span>
        </Label>
        <Input
          id="phone"
          type="tel"
          {...register('phone')}
          placeholder="+61 400 000 000"
          className="bg-background border-border focus:border-gold focus:ring-gold"
        />
        {errors.phone && (
          <p className="text-destructive text-sm">{errors.phone.message}</p>
        )}
      </div>

      {/* Subject */}
      <div className="space-y-2">
        <Label htmlFor="subject" className="text-luxury-caps text-foreground">
          Subject *
        </Label>
        <Input
          id="subject"
          {...register('subject')}
          placeholder="How can we help you?"
          className="bg-background border-border focus:border-gold focus:ring-gold"
        />
        {errors.subject && (
          <p className="text-destructive text-sm">{errors.subject.message}</p>
        )}
      </div>

      {/* Message */}
      <div className="space-y-2">
        <Label htmlFor="message" className="text-luxury-caps text-foreground">
          Message *
        </Label>
        <Textarea
          id="message"
          {...register('message')}
          placeholder="Tell us more about your enquiry..."
          rows={5}
          className="bg-background border-border focus:border-gold focus:ring-gold resize-none"
        />
        {errors.message && (
          <p className="text-destructive text-sm">{errors.message.message}</p>
        )}
      </div>

      {/* Submit Button */}
      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full btn-luxury"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Send className="mr-2 h-4 w-4" />
            Send Enquiry
          </>
        )}
      </Button>
    </form>
  );
};

export default ContactForm;
