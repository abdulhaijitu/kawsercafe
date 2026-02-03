import { Plus } from 'lucide-react';
import { Tables } from '@/integrations/supabase/types';
import { useCart } from '@/contexts/CartContext';
import { toast } from 'sonner';
import { memo, useCallback } from 'react';

type Product = Tables<'products'>;

interface ProductCardProps {
  product: Product;
}

const ProductCard = memo(({ product }: ProductCardProps) => {
  const { addToCart } = useCart();

  const handleAdd = useCallback(() => {
    addToCart(product);
    toast.success(`${product.name} কার্টে যোগ হয়েছে`);
  }, [addToCart, product]);

  return (
    <div className="card-luxury group flex flex-col h-full">
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden bg-muted">
        {product.image_url ? (
          <img
            src={product.image_url}
            alt={product.name}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-secondary">
            <span className="text-4xl">☕</span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-4 md:p-5">
        <div className="flex-1">
          <h3 className="font-serif text-lg md:text-xl text-foreground mb-1">
            {product.name}
          </h3>
          {product.name_italian && (
            <p className="text-editorial text-muted-foreground text-sm mb-2">
              {product.name_italian}
            </p>
          )}
          {product.description && (
            <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">
              {product.description}
            </p>
          )}
        </div>

        {/* Price & Add Button */}
        <div className="flex items-center justify-between mt-4 pt-4 border-t border-border gap-3">
          <span className="font-serif text-lg md:text-xl text-gold">
            ${Number(product.price).toFixed(2)}
          </span>
          <button
            onClick={handleAdd}
            className="flex items-center gap-2 px-4 py-2.5 bg-primary text-primary-foreground text-xs uppercase tracking-wider transition-all hover:bg-gold active:scale-[0.97] touch-target"
          >
            <Plus size={16} />
            <span className="hidden sm:inline">যোগ করুন</span>
            <span className="sm:hidden">Add</span>
          </button>
        </div>
      </div>
    </div>
  );
});

ProductCard.displayName = 'ProductCard';

export default ProductCard;
