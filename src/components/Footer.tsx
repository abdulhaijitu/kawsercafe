import { Link } from 'react-router-dom';
import { MapPin, Phone, Clock } from 'lucide-react';
import logoWhite from '@/assets/logo-white.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer Content */}
      <div className="container-luxury py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand Column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link to="/" className="inline-block">
              <img 
                src={logoWhite} 
                alt="DOLCE BARI" 
                className="h-14 w-auto brightness-0 invert"
              />
            </Link>
            <p className="mt-5 text-primary-foreground/80 text-sm leading-relaxed max-w-xs">
              A premium Italian dessert bar bringing the finest European 
              confections to Melbourne.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-luxury-caps text-gold-light mb-5">
              Quick Links
            </h4>
            <nav className="flex flex-col gap-2.5">
              {[
                { name: 'Home', path: '/' },
                { name: 'About', path: '/about' },
                { name: 'Menu', path: '/menu' },
                { name: 'Gallery', path: '/gallery' },
                { name: 'Contact', path: '/contact' },
                { name: 'Order Online', path: '/order' },
              ].map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="text-primary-foreground/80 hover:text-gold-light transition-colors duration-200 text-sm"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-luxury-caps text-gold-light mb-5">
              Contact
            </h4>
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-gold-light mt-0.5 flex-shrink-0" />
                <p className="text-primary-foreground/80 text-sm leading-relaxed">
                  320–326 Huntingdale Road,<br />
                  Huntingdale, VIC 3166
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-gold-light flex-shrink-0" />
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
            <h4 className="text-luxury-caps text-gold-light mb-5">
              Hours
            </h4>
            <div className="flex items-start gap-3">
              <Clock size={16} className="text-gold-light mt-0.5 flex-shrink-0" />
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
        <div className="container-luxury py-4 flex flex-col sm:flex-row justify-between items-center gap-2 text-center sm:text-left">
          <p className="text-primary-foreground/60 text-xs tracking-wide">
            © {currentYear} DOLCE BARI. All rights reserved.
          </p>
          <p className="text-primary-foreground/40 text-xs">
            Design & Developed by{' '}
            <a 
              href="http://creationtechbd.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gold-light hover:text-gold transition-colors duration-200"
            >
              Creation Tech
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
