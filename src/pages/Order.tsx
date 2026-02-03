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
        <section className="relative pt-28 pb-10 md:pt-36 md:pb-16 bg-secondary/30">
          <div className="container-luxury text-center">
            <AnimatedSection>
              <span className="text-luxury-caps text-gold mb-3 block">
                Online Order
              </span>
              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-foreground mb-3">
                অর্ডার করুন
              </h1>
              <p className="text-editorial text-muted-foreground text-base md:text-lg max-w-md mx-auto">
                আমাদের সুস্বাদু ইতালিয়ান ডেজার্ট ও কফি অর্ডার করুন
              </p>
              <div className="gold-line mt-5" />
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
          <div className="fixed bottom-5 left-4 right-4 z-40 md:hidden">
            <CartDrawer>
              <button className="flex items-center justify-center gap-3 w-full px-5 py-4 bg-primary text-primary-foreground rounded-full shadow-elegant active:scale-[0.98] transition-transform">
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
            <button className="relative p-4 bg-primary text-primary-foreground rounded-full shadow-elegant hover:scale-105 active:scale-100 transition-transform">
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
