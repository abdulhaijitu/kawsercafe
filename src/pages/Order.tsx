import Layout from '@/components/Layout';
import PageTransition from '@/components/PageTransition';
import AnimatedSection from '@/components/AnimatedSection';
import ProductCatalog from '@/components/order/ProductCatalog';
import CartDrawer from '@/components/order/CartDrawer';
import { useCart } from '@/contexts/CartContext';
import { ShoppingBag } from 'lucide-react';

const Order = () => {
  const { totalItems, totalAmount } = useCart();

  return (
    <Layout>
      <PageTransition>
        {/* Hero Section */}
        <section className="relative pt-32 pb-16 bg-secondary/30">
          <div className="container-luxury text-center">
            <AnimatedSection>
              <span className="text-luxury-caps text-gold mb-4 block">
                Online Order
              </span>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-4">
                অর্ডার করুন
              </h1>
              <p className="text-editorial text-muted-foreground text-lg max-w-xl mx-auto">
                আমাদের সুস্বাদু ইতালিয়ান ডেজার্ট ও কফি অর্ডার করুন এবং পিকআপ করুন
              </p>
              <div className="gold-line mt-6" />
            </AnimatedSection>
          </div>
        </section>

        {/* Product Catalog */}
        <section className="section-padding">
          <div className="container-luxury">
            <ProductCatalog />
          </div>
        </section>

        {/* Floating Cart Button - Mobile */}
        {totalItems > 0 && (
          <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 md:hidden">
            <CartDrawer>
              <button className="flex items-center gap-3 px-6 py-3 bg-primary text-primary-foreground rounded-full shadow-elegant">
                <ShoppingBag size={20} />
                <span className="font-medium">
                  {totalItems} আইটেম — ${totalAmount.toFixed(2)}
                </span>
              </button>
            </CartDrawer>
          </div>
        )}

        {/* Desktop Cart */}
        <div className="hidden md:block fixed bottom-8 right-8 z-40">
          <CartDrawer>
            <button className="relative p-4 bg-primary text-primary-foreground rounded-full shadow-elegant hover:scale-105 transition-transform">
              <ShoppingBag size={24} />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 w-6 h-6 bg-gold text-white text-sm rounded-full flex items-center justify-center font-medium">
                  {totalItems}
                </span>
              )}
            </button>
          </CartDrawer>
        </div>
      </PageTransition>
    </Layout>
  );
};

export default Order;
