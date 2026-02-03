import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';
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
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      {/* Name */}
      <div className="space-y-1.5">
        <Label htmlFor="name" className="text-xs uppercase tracking-wider text-foreground font-medium">
          Name *
        </Label>
        <Input
          id="name"
          {...register('name')}
          placeholder="Your full name"
          className="bg-background border-border focus:border-gold focus:ring-gold h-12 text-base"
        />
        {errors.name && (
          <p className="text-destructive text-xs">{errors.name.message}</p>
        )}
      </div>

      {/* Email */}
      <div className="space-y-1.5">
        <Label htmlFor="email" className="text-xs uppercase tracking-wider text-foreground font-medium">
          Email *
        </Label>
        <Input
          id="email"
          type="email"
          {...register('email')}
          placeholder="your.email@example.com"
          className="bg-background border-border focus:border-gold focus:ring-gold h-12 text-base"
        />
        {errors.email && (
          <p className="text-destructive text-xs">{errors.email.message}</p>
        )}
      </div>

      {/* Phone */}
      <div className="space-y-1.5">
        <Label htmlFor="phone" className="text-xs uppercase tracking-wider text-foreground font-medium">
          Phone <span className="text-muted-foreground font-normal normal-case">(optional)</span>
        </Label>
        <Input
          id="phone"
          type="tel"
          {...register('phone')}
          placeholder="+61 400 000 000"
          className="bg-background border-border focus:border-gold focus:ring-gold h-12 text-base"
        />
        {errors.phone && (
          <p className="text-destructive text-xs">{errors.phone.message}</p>
        )}
      </div>

      {/* Subject */}
      <div className="space-y-1.5">
        <Label htmlFor="subject" className="text-xs uppercase tracking-wider text-foreground font-medium">
          Subject *
        </Label>
        <Input
          id="subject"
          {...register('subject')}
          placeholder="How can we help you?"
          className="bg-background border-border focus:border-gold focus:ring-gold h-12 text-base"
        />
        {errors.subject && (
          <p className="text-destructive text-xs">{errors.subject.message}</p>
        )}
      </div>

      {/* Message */}
      <div className="space-y-1.5">
        <Label htmlFor="message" className="text-xs uppercase tracking-wider text-foreground font-medium">
          Message *
        </Label>
        <Textarea
          id="message"
          {...register('message')}
          placeholder="Tell us more about your enquiry..."
          rows={4}
          className="bg-background border-border focus:border-gold focus:ring-gold resize-none text-base"
        />
        {errors.message && (
          <p className="text-destructive text-xs">{errors.message.message}</p>
        )}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="btn-luxury w-full disabled:opacity-60 disabled:cursor-not-allowed"
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
      </button>
    </form>
  );
};

export default ContactForm;
