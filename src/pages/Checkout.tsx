import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '@/components/Layout';
import PageTransition from '@/components/PageTransition';
import AnimatedSection from '@/components/AnimatedSection';
import CheckoutForm from '@/components/order/CheckoutForm';
import { useCart } from '@/contexts/CartContext';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const Checkout = () => {
  const { items } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    if (items.length === 0) {
      navigate('/order');
    }
  }, [items, navigate]);

  if (items.length === 0) {
    return null;
  }

  return (
    <Layout>
      <PageTransition>
        <section className="relative pt-32 pb-20">
          <div className="container-luxury max-w-2xl">
            <AnimatedSection>
              {/* Back Link */}
              <Link
                to="/order"
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-gold transition-colors mb-8"
              >
                <ArrowLeft size={18} />
                মেনুতে ফিরে যান
              </Link>

              {/* Header */}
              <div className="text-center mb-10">
                <span className="text-luxury-caps text-gold mb-4 block">
                  Checkout
                </span>
                <h1 className="font-serif text-3xl md:text-4xl text-foreground mb-2">
                  চেকআউট
                </h1>
                <div className="gold-line mt-4" />
              </div>

              {/* Form */}
              <div className="bg-card p-6 md:p-8 rounded-sm shadow-soft">
                <CheckoutForm />
              </div>
            </AnimatedSection>
          </div>
        </section>
      </PageTransition>
    </Layout>
  );
};

export default Checkout;
