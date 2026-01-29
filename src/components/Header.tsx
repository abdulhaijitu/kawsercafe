import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

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

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/95 backdrop-blur-md shadow-soft py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container-luxury flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex flex-col items-start">
          <span className="font-serif text-2xl md:text-3xl font-medium tracking-wide text-foreground">
            DOLCE BARI
          </span>
          <span className="text-luxury-caps text-muted-foreground text-[10px] mt-0.5">
            Sweets & Café
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm tracking-widest uppercase transition-colors duration-200 ${
                location.pathname === link.path
                  ? 'text-gold'
                  : 'text-foreground hover:text-gold'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Order Button - Desktop */}
        <div className="hidden md:block">
          <button
            disabled
            className="btn-luxury-outline opacity-60 cursor-not-allowed text-xs px-6 py-2.5"
            title="Coming Soon"
          >
            Order Online
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 text-foreground hover:text-gold transition-colors"
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-background/98 backdrop-blur-md border-b border-border transition-all duration-300 overflow-hidden ${
          isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="container-luxury py-8 flex flex-col gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-lg tracking-widest uppercase transition-colors duration-200 ${
                location.pathname === link.path
                  ? 'text-gold'
                  : 'text-foreground hover:text-gold'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-4 border-t border-border">
            <button
              disabled
              className="btn-luxury-outline opacity-60 cursor-not-allowed text-xs w-full"
              title="Coming Soon"
            >
              Order Online — Coming Soon
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
