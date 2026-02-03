import { useProductsByCategory } from '@/hooks/useProducts';
import ProductCard from './ProductCard';
import AnimatedSection from '@/components/AnimatedSection';
import { memo } from 'react';

const categoryLabels: Record<string, { en: string; bn: string }> = {
  coffee: { en: 'Coffee', bn: 'কফি' },
  desserts: { en: 'Desserts', bn: 'ডেজার্ট' },
};

const ProductCatalog = memo(() => {
  const { grouped, isLoading, error } = useProductsByCategory();

  if (isLoading) {
    return (
      <div className="space-y-12">
        {[1, 2].map(i => (
          <div key={i}>
            <div className="h-8 w-40 bg-muted rounded animate-pulse mb-6" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {[1, 2, 3].map(j => (
                <div key={j} className="bg-muted rounded-sm animate-pulse">
                  <div className="aspect-[4/3]" />
                  <div className="p-4 space-y-3">
                    <div className="h-5 w-3/4 bg-muted-foreground/10 rounded" />
                    <div className="h-4 w-full bg-muted-foreground/10 rounded" />
                    <div className="h-10 w-full bg-muted-foreground/10 rounded mt-4" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-12">
        <p className="text-destructive">প্রোডাক্ট লোড করতে সমস্যা হয়েছে</p>
        <p className="text-muted-foreground text-sm mt-2">Please try refreshing the page</p>
      </div>
    );
  }

  if (!grouped || Object.keys(grouped).length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground">কোনো প্রোডাক্ট পাওয়া যায়নি</p>
      </div>
    );
  }

  const categoryOrder = ['coffee', 'desserts'];
  const sortedCategories = Object.keys(grouped).sort(
    (a, b) => categoryOrder.indexOf(a) - categoryOrder.indexOf(b)
  );

  return (
    <div className="space-y-12 md:space-y-16">
      {sortedCategories.map(category => (
        <section key={category}>
          <AnimatedSection>
            <div className="mb-6 md:mb-8">
              <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl text-foreground mb-1">
                {categoryLabels[category]?.en || category}
              </h2>
              <p className="text-editorial text-muted-foreground">
                {categoryLabels[category]?.bn}
              </p>
              <div className="gold-line-left mt-4" />
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {grouped[category].map((product, index) => (
              <AnimatedSection key={product.id} delay={index * 50}>
                <ProductCard product={product} />
              </AnimatedSection>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
});

ProductCatalog.displayName = 'ProductCatalog';

export default ProductCatalog;
