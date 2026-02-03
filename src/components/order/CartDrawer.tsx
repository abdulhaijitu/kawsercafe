import { X, Minus, Plus, ShoppingBag, Trash2 } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { useNavigate } from 'react-router-dom';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

interface CartDrawerProps {
  children?: React.ReactNode;
}

const CartDrawer = ({ children }: CartDrawerProps) => {
  const { items, updateQuantity, removeFromCart, totalItems, totalAmount } = useCart();
  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate('/order/checkout');
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        {children || (
          <button className="relative p-2 text-foreground hover:text-gold transition-colors">
            <ShoppingBag size={24} />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-gold text-white text-xs rounded-full flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </button>
        )}
      </SheetTrigger>
      <SheetContent className="w-full sm:max-w-md flex flex-col">
        <SheetHeader>
          <SheetTitle className="font-serif text-2xl">আপনার কার্ট</SheetTitle>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center text-center py-12">
            <ShoppingBag size={64} className="text-muted-foreground/30 mb-4" />
            <p className="text-muted-foreground">আপনার কার্ট খালি</p>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto py-4 space-y-4">
              {items.map(({ product, quantity }) => (
                <div
                  key={product.id}
                  className="flex gap-4 p-4 bg-secondary/50 rounded-sm"
                >
                  {/* Image */}
                  <div className="w-20 h-20 bg-muted rounded-sm overflow-hidden flex-shrink-0">
                    {product.image_url ? (
                      <img
                        src={product.image_url}
                        alt={product.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <span className="text-2xl">☕</span>
                      </div>
                    )}
                  </div>

                  {/* Details */}
                  <div className="flex-1 min-w-0">
                    <h4 className="font-serif text-lg text-foreground truncate">
                      {product.name}
                    </h4>
                    <p className="text-gold font-medium">
                      ${Number(product.price).toFixed(2)}
                    </p>

                    {/* Quantity Controls */}
                    <div className="flex items-center gap-2 mt-2">
                      <button
                        onClick={() => updateQuantity(product.id, quantity - 1)}
                        className="w-7 h-7 flex items-center justify-center border border-border hover:bg-muted transition-colors"
                      >
                        <Minus size={14} />
                      </button>
                      <span className="w-8 text-center font-medium">{quantity}</span>
                      <button
                        onClick={() => updateQuantity(product.id, quantity + 1)}
                        className="w-7 h-7 flex items-center justify-center border border-border hover:bg-muted transition-colors"
                      >
                        <Plus size={14} />
                      </button>
                      <button
                        onClick={() => removeFromCart(product.id)}
                        className="ml-auto text-muted-foreground hover:text-destructive transition-colors"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="border-t border-border pt-4 space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">সর্বমোট</span>
                <span className="font-serif text-2xl text-gold">
                  ${totalAmount.toFixed(2)}
                </span>
              </div>
              <button
                onClick={handleCheckout}
                className="btn-luxury w-full"
              >
                চেকআউট করুন
              </button>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default CartDrawer;
