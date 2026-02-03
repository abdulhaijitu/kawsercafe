import Layout from '@/components/Layout';
import AnimatedSection from '@/components/AnimatedSection';
import ContactForm from '@/components/ContactForm';
import { MapPin, Phone, Clock, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-28 pb-12 md:pt-36 md:pb-20 bg-secondary">
        <div className="container-luxury">
          <AnimatedSection className="text-center max-w-2xl mx-auto">
            <span className="text-luxury-caps text-gold">Get in Touch</span>
            <div className="gold-line mt-4 mb-6" />
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-foreground mb-4">
              Contact Us
            </h1>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
              We'd love to hear from you. Visit us, call us, or send us an enquiry.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Form + Info Section */}
      <section className="section-padding bg-background">
        <div className="container-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            {/* Contact Form */}
            <AnimatedSection>
              <div className="bg-card p-6 md:p-8 rounded-sm shadow-elegant">
                <h2 className="font-serif text-xl md:text-2xl text-foreground mb-2">
                  Send Us a Message
                </h2>
                <p className="text-muted-foreground text-sm mb-6">
                  Have a question or special request? We'd love to hear from you.
                </p>
                <ContactForm />
              </div>
            </AnimatedSection>

            {/* Contact Information */}
            <AnimatedSection delay={100}>
              <div className="space-y-8">
                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 border border-gold rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-gold" size={18} />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg text-foreground mb-1.5">Visit Us</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      320–326 Huntingdale Road<br />
                      Huntingdale, VIC 3166
                    </p>
                    <a 
                      href="https://maps.google.com/?q=320+Huntingdale+Road+Huntingdale+VIC+3166"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-2 text-gold hover:text-gold-dark transition-colors text-xs uppercase tracking-wider"
                    >
                      Get Directions →
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 border border-gold rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="text-gold" size={18} />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg text-foreground mb-1.5">Call Us</h3>
                    <a 
                      href="tel:+61413669707"
                      className="text-muted-foreground hover:text-gold transition-colors text-base md:text-lg"
                    >
                      +61 413 669 707
                    </a>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 border border-gold rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="text-gold" size={18} />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg text-foreground mb-1.5">Opening Hours</h3>
                    <div className="text-muted-foreground text-sm space-y-0.5">
                      <p>Mon – Fri: 7:00am – 6:00pm</p>
                      <p>Sat – Sun: 8:00am – 5:00pm</p>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 border border-gold rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="text-gold" size={18} />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg text-foreground mb-1.5">Email</h3>
                    <a 
                      href="mailto:hello@dolcebari.com.au"
                      className="text-muted-foreground hover:text-gold transition-colors text-sm"
                    >
                      hello@dolcebari.com.au
                    </a>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-cream-dark">
        <div className="container-luxury py-10 md:py-16">
          <AnimatedSection>
            <div className="rounded-sm overflow-hidden shadow-elegant">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3147.8775387234813!2d145.10269931531855!3d-37.91009994357968!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad66b5c2a4f0e8d%3A0x5045675218ce6e0!2s320%20Huntingdale%20Rd%2C%20Huntingdale%20VIC%203166%2C%20Australia!5e0!3m2!1sen!2sus!4v1651234567890!5m2!1sen!2sus"
                width="100%"
                height="350"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="DOLCE BARI Location"
                className="w-full"
              />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Private Events */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container-luxury">
          <AnimatedSection className="text-center">
            <h2 className="font-serif text-xl md:text-2xl text-foreground mb-3">
              Private Events & Catering
            </h2>
            <p className="text-muted-foreground text-sm max-w-lg mx-auto mb-5 leading-relaxed">
              DOLCE BARI offers bespoke catering for private events and special celebrations.
            </p>
            <a 
              href="tel:+61413669707"
              className="btn-luxury sm:!w-auto"
            >
              Call to Enquire
            </a>
          </AnimatedSection>
        </div>
      </section>

      {/* Order Online CTA */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-luxury text-center">
          <AnimatedSection>
            <span className="text-luxury-caps text-gold-light">Order Now</span>
            <div className="w-16 h-px bg-gold-light mx-auto mt-4 mb-6" />
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl mb-4">
              Online Ordering
            </h2>
            <p className="text-primary-foreground/80 max-w-md mx-auto mb-6 md:mb-8 leading-relaxed">
              Order your favourite DOLCE BARI treats online for convenient pickup.
            </p>
            <Link to="/order" className="btn-gold sm:!w-auto">
              Order Online
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
