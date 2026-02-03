import { useLocation, Navigate, Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import PageTransition from '@/components/PageTransition';
import AnimatedSection from '@/components/AnimatedSection';
import { CheckCircle, MapPin, Clock, Phone } from 'lucide-react';

const OrderConfirmation = () => {
  const location = useLocation();
  const { orderId, pickupTime } = location.state || {};

  if (!orderId) {
    return <Navigate to="/order" replace />;
  }

  return (
    <Layout>
      <PageTransition>
        <section className="relative pt-32 pb-20 min-h-screen">
          <div className="container-luxury max-w-2xl">
            <AnimatedSection>
              <div className="text-center">
                {/* Success Icon */}
                <div className="inline-flex items-center justify-center w-20 h-20 bg-accent rounded-full mb-6">
                  <CheckCircle size={48} className="text-gold" />
                </div>

                <h1 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
                  অর্ডার সফল হয়েছে!
                </h1>
                <p className="text-muted-foreground mb-2">
                  আপনার অর্ডার আমরা পেয়েছি। ধন্যবাদ!
                </p>
                <p className="text-sm text-muted-foreground mb-8">
                  Order ID: <span className="font-mono text-foreground">{orderId.slice(0, 8).toUpperCase()}</span>
                </p>

                <div className="gold-line mb-10" />

                {/* Pickup Info Card */}
                <div className="bg-secondary/50 p-6 md:p-8 rounded-sm text-left space-y-6">
                  <h2 className="font-serif text-xl text-foreground text-center">
                    পিকআপ তথ্য
                  </h2>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-gold/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Clock className="text-gold" size={20} />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">পিকআপ সময়</p>
                      <p className="text-muted-foreground">{pickupTime}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-gold/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="text-gold" size={20} />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">ঠিকানা</p>
                      <p className="text-muted-foreground">
                        123 Main Street, Huntingdale<br />
                        VIC 3166, Melbourne
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-gold/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="text-gold" size={20} />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">যোগাযোগ</p>
                      <p className="text-muted-foreground">(03) 1234 5678</p>
                    </div>
                  </div>

                  <div className="bg-gold/10 p-4 rounded-sm text-center">
                    <p className="text-sm text-foreground">
                      💵 পিকআপের সময় ক্যাশে পেমেন্ট করুন
                    </p>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/order" className="btn-luxury-outline">
                    আরো অর্ডার করুন
                  </Link>
                  <Link to="/" className="btn-luxury">
                    হোমে ফিরে যান
                  </Link>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </PageTransition>
    </Layout>
  );
};

export default OrderConfirmation;
