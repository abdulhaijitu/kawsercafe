import Layout from '@/components/Layout';
import AnimatedSection from '@/components/AnimatedSection';
import { MapPin, Phone, Clock, Mail } from 'lucide-react';

const Contact = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-secondary">
        <div className="container-luxury">
          <AnimatedSection className="text-center max-w-3xl mx-auto">
            <span className="text-luxury-caps text-gold">Get in Touch</span>
            <div className="gold-line mt-4 mb-8" />
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
              Contact Us
            </h1>
            <p className="text-muted-foreground text-lg">
              We'd love to hear from you. Visit us, call us, or drop us a line.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Info + Map */}
      <section className="section-padding bg-background">
        <div className="container-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Contact Information */}
            <AnimatedSection>
              <div className="space-y-10">
                {/* Address */}
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 border border-gold rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-gold" size={20} />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl text-foreground mb-2">Visit Us</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      320–326 Huntingdale Road<br />
                      Huntingdale, VIC 3166<br />
                      Australia
                    </p>
                    <a 
                      href="https://maps.google.com/?q=320+Huntingdale+Road+Huntingdale+VIC+3166"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-3 text-gold hover:text-gold-dark transition-colors text-sm uppercase tracking-wider"
                    >
                      Get Directions →
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 border border-gold rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="text-gold" size={20} />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl text-foreground mb-2">Call Us</h3>
                    <a 
                      href="tel:+61413669707"
                      className="text-muted-foreground hover:text-gold transition-colors text-lg"
                    >
                      +61 413 669 707
                    </a>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 border border-gold rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="text-gold" size={20} />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl text-foreground mb-2">Opening Hours</h3>
                    <div className="text-muted-foreground space-y-1">
                      <p>Monday – Friday: 7:00am – 6:00pm</p>
                      <p>Saturday – Sunday: 8:00am – 5:00pm</p>
                    </div>
                  </div>
                </div>

                {/* Email (placeholder) */}
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 border border-gold rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="text-gold" size={20} />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl text-foreground mb-2">Email</h3>
                    <p className="text-muted-foreground">
                      hello@dolcebari.com.au
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Map */}
            <AnimatedSection delay={100}>
              <div className="h-full min-h-[400px] lg:min-h-[500px] rounded-sm overflow-hidden shadow-elegant">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3147.8775387234813!2d145.10269931531855!3d-37.91009994357968!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad66b5c2a4f0e8d%3A0x5045675218ce6e0!2s320%20Huntingdale%20Rd%2C%20Huntingdale%20VIC%203166%2C%20Australia!5e0!3m2!1sen!2sus!4v1651234567890!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: '400px' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="DOLCE BARI Location"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-16 bg-cream-dark">
        <div className="container-luxury">
          <AnimatedSection className="text-center">
            <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-4">
              Private Events & Catering
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-6">
              DOLCE BARI offers bespoke catering for private events, corporate functions, 
              and special celebrations. Contact us to discuss your requirements.
            </p>
            <a 
              href="tel:+61413669707"
              className="btn-luxury"
            >
              Enquire Now
            </a>
          </AnimatedSection>
        </div>
      </section>

      {/* Coming Soon CTA */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-luxury text-center">
          <AnimatedSection>
            <span className="text-luxury-caps text-gold-light">Coming Soon</span>
            <div className="w-16 h-px bg-gold-light mx-auto mt-4 mb-8" />
            <h2 className="font-serif text-3xl md:text-4xl mb-6">
              Online Ordering
            </h2>
            <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8">
              Soon you'll be able to order your favourite DOLCE BARI treats 
              online for pickup or delivery.
            </p>
            <button 
              disabled
              className="btn-gold opacity-60 cursor-not-allowed"
              title="Coming Soon"
            >
              Order Online — Coming Soon
            </button>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
