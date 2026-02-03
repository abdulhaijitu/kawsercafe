import { useState, useEffect } from 'react';
import { ArrowUp, MessageCircle } from 'lucide-react';

const WHATSAPP_NUMBER = '61412345678'; // Replace with actual number
const WHATSAPP_MESSAGE = 'Hello! I would like to enquire about DOLCE BARI.';

const FloatingButtons = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const openWhatsApp = () => {
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed right-4 z-50 flex flex-col gap-3 bottom-20 md:bottom-6">
      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className={`w-12 h-12 rounded-full bg-primary text-primary-foreground shadow-elegant flex items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95 ${
          showBackToTop
            ? 'opacity-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
        aria-label="Back to top"
      >
        <ArrowUp size={20} />
      </button>

      {/* WhatsApp Button */}
      <button
        onClick={openWhatsApp}
        className="w-12 h-12 rounded-full bg-[#25D366] text-white shadow-elegant flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95"
        aria-label="Contact on WhatsApp"
      >
        <MessageCircle size={22} fill="currentColor" />
      </button>
    </div>
  );
};

export default FloatingButtons;
