import { useProductsByCategory } from '@/hooks/useProducts';
import ProductCard from './ProductCard';
import { Skeleton } from '@/components/ui/skeleton';

const categoryLabels: Record<string, { en: string; bn: string }> = {
  coffee: { en: 'Coffee', bn: 'কফি' },
  desserts: { en: 'Desserts', bn: 'ডেজার্ট' },
};

const ProductCatalog = () => {
  const { grouped, isLoading, error } = useProductsByCategory();

  if (isLoading) {
    return (
      <div className="space-y-12">
        {[1, 2].map(i => (
          <div key={i}>
            <Skeleton className="h-8 w-48 mb-6" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3].map(j => (
                <Skeleton key={j} className="h-80 rounded-sm" />
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
    <div className="space-y-16">
      {sortedCategories.map(category => (
        <section key={category}>
          <div className="mb-8">
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-2">
              {categoryLabels[category]?.en || category}
            </h2>
            <p className="text-editorial text-muted-foreground">
              {categoryLabels[category]?.bn}
            </p>
            <div className="gold-line-left mt-4" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {grouped[category].map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
};

export default ProductCatalog;
