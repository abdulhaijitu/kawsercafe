import { Link } from 'react-router-dom';
import { MapPin, Phone, Clock } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer Content */}
      <div className="container-luxury section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block">
              <h3 className="font-serif text-3xl font-medium tracking-wide mb-2">
                DOLCE BARI
              </h3>
              <span className="text-luxury-caps text-primary-foreground/70 text-[10px]">
                Sweets & Café
              </span>
            </Link>
            <p className="mt-6 text-primary-foreground/80 text-sm leading-relaxed">
              A premium Italian dessert bar bringing the finest European 
              confections to Melbourne's discerning palate.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-luxury-caps text-gold-light mb-6">
              Quick Links
            </h4>
            <nav className="flex flex-col gap-3">
              {['Home', 'About', 'Menu', 'Gallery', 'Contact'].map((item) => (
                <Link
                  key={item}
                  to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                  className="text-primary-foreground/80 hover:text-gold-light transition-colors duration-200 text-sm"
                >
                  {item}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-luxury-caps text-gold-light mb-6">
              Contact
            </h4>
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-gold-light mt-0.5 flex-shrink-0" />
                <p className="text-primary-foreground/80 text-sm">
                  320–326 Huntingdale Road,<br />
                  Huntingdale, VIC 3166
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-gold-light flex-shrink-0" />
                <a 
                  href="tel:+61413669707" 
                  className="text-primary-foreground/80 hover:text-gold-light transition-colors text-sm"
                >
                  +61 413 669 707
                </a>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-luxury-caps text-gold-light mb-6">
              Hours
            </h4>
            <div className="flex items-start gap-3">
              <Clock size={18} className="text-gold-light mt-0.5 flex-shrink-0" />
              <div className="text-primary-foreground/80 text-sm space-y-1">
                <p>Mon – Fri: 7am – 6pm</p>
                <p>Sat – Sun: 8am – 5pm</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container-luxury py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/60 text-xs tracking-wide">
            © {currentYear} DOLCE BARI. All rights reserved.
          </p>
          <p className="text-primary-foreground/40 text-xs italic">
            *Placeholder images shown. Final imagery to be replaced.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
