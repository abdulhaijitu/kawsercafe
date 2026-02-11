import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '@/assets/logo.png';
import logoWhite from '@/assets/logo-white.png';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Menu', path: '/menu' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Contact', path: '/contact' },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-250 ${
        isScrolled
          ? 'bg-background/95 backdrop-blur-md shadow-soft py-3'
          : 'bg-transparent py-4 md:py-6'
      }`}
    >
      <div className="container-luxury flex items-center justify-between">
        {/* Mobile: Hamburger Left */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className={`md:hidden p-2 -ml-2 transition-colors touch-target ${
            isScrolled ? 'text-foreground hover:text-gold' : 'text-white hover:text-gold-light'
          }`}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Logo - Centered on mobile */}
        <Link 
          to="/" 
          className="flex items-center md:flex-none absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0"
        >
          <img 
            src={logo} 
            alt="DOLCE BARI" 
            className={`h-10 md:h-12 w-auto transition-all duration-200 ${
              isScrolled ? '' : 'brightness-0 invert'
            }`}
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm tracking-widest uppercase transition-colors duration-200 ${
                isScrolled
                  ? location.pathname === link.path
                    ? 'text-gold'
                    : 'text-foreground hover:text-gold'
                  : location.pathname === link.path
                    ? 'text-gold-light'
                    : 'text-white hover:text-gold-light'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Order Button - Desktop */}
        <div className="hidden md:block">
          <Link
            to="/order"
            className={`inline-flex items-center justify-center text-xs px-5 py-2.5 tracking-wider uppercase font-medium transition-all duration-200 border ${
              isScrolled
                ? 'border-primary text-primary hover:bg-primary hover:text-primary-foreground'
                : 'border-white text-white hover:bg-white hover:text-primary'
            }`}
            style={{ fontFamily: "'Montserrat', sans-serif", letterSpacing: '0.15em', minHeight: '48px' }}
          >
            Order Online
          </Link>
        </div>

        {/* Spacer for mobile to balance the hamburger */}
        <div className="w-10 md:hidden" />
      </div>

      {/* Mobile Navigation Overlay */}
      <div
        className={`md:hidden fixed inset-0 top-0 bg-background z-40 transition-all duration-300 ${
          isMenuOpen 
            ? 'opacity-100 pointer-events-auto' 
            : 'opacity-0 pointer-events-none'
        }`}
        style={{ paddingTop: '72px' }}
      >
        {/* Close button at top */}
        <button
          onClick={() => setIsMenuOpen(false)}
          className="absolute top-4 left-3 p-2 text-foreground hover:text-gold transition-colors touch-target"
          aria-label="Close menu"
        >
          <X size={24} />
        </button>

        <nav className="flex flex-col items-center justify-center h-full gap-8 px-6">
          {navLinks.map((link, index) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-2xl tracking-widest uppercase transition-all duration-200 ${
                location.pathname === link.path
                  ? 'text-gold'
                  : 'text-foreground hover:text-gold'
              }`}
              style={{ 
                animationDelay: `${index * 50}ms`,
                animation: isMenuOpen ? 'fadeUp 0.3s ease-out forwards' : 'none'
              }}
            >
              {link.name}
            </Link>
          ))}
          
          <div className="pt-6 w-full max-w-xs">
            <Link
              to="/order"
              className="btn-gold w-full text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Order Online
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
