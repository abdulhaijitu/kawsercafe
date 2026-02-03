import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import AnimatedSection from '@/components/AnimatedSection';
import OptimizedImage from '@/components/OptimizedImage';
import heroImage from '@/assets/hero-desserts.jpg';
import tiramisuImage from '@/assets/dessert-tiramisu.jpg';
import cannoliImage from '@/assets/dessert-cannoli.jpg';
import latteImage from '@/assets/coffee-latte.jpg';

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="DOLCE BARI luxury desserts and café"
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container-luxury text-center px-6 py-20">
          <AnimatedSection>
            <span className="text-luxury-caps text-gold-light tracking-[0.25em] text-xs">
              Welcome to
            </span>
          </AnimatedSection>
          
          <AnimatedSection delay={100}>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-medium text-white mt-4 mb-2 tracking-wide">
              DOLCE BARI
            </h1>
          </AnimatedSection>
          
          <AnimatedSection delay={150}>
            <p className="font-serif text-lg sm:text-xl md:text-2xl text-white/90 italic mb-6 md:mb-8">
              Sweets & Café
            </p>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <p className="text-white/80 text-base md:text-lg max-w-md mx-auto leading-relaxed mb-8 md:mb-10">
              Experience the art of Italian confections in the heart of Melbourne.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={250}>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center max-w-sm sm:max-w-none mx-auto">
              <Link to="/menu" className="btn-gold">
                View Menu
              </Link>
              <Link to="/contact" className="btn-luxury-outline border-white/80 text-white hover:bg-white hover:text-primary">
                Visit Us
              </Link>
            </div>
          </AnimatedSection>
        </div>

        {/* Scroll Indicator - Hidden on mobile */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block">
          <div className="w-px h-12 bg-gradient-to-b from-gold to-transparent animate-pulse" />
        </div>
      </section>

      {/* Brand Story Section */}
      <section className="section-padding bg-background">
        <div className="container-luxury">
          <AnimatedSection className="text-center max-w-2xl mx-auto">
            <span className="text-luxury-caps text-gold">Our Philosophy</span>
            <div className="gold-line mt-4 mb-6 md:mb-8" />
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
              The Art of <span className="italic">Dolce Vita</span>
            </h2>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-4">
              Nestled in Huntingdale, DOLCE BARI brings the timeless elegance of 
              Italian pasticceria to Melbourne.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Every creation is a tribute to generations of artisanal 
              craftsmanship—delicate pastries, velvety gelato, and espresso 
              that speaks of Italian heritage.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Featured Offerings */}
      <section className="section-padding bg-secondary">
        <div className="container-luxury">
          <AnimatedSection className="text-center mb-10 md:mb-16">
            <span className="text-luxury-caps text-gold">Curated Selection</span>
            <div className="gold-line mt-4 mb-6 md:mb-8" />
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-foreground">
              Our Signature Offerings
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {/* Tiramisu */}
            <AnimatedSection delay={0}>
              <div className="card-luxury group">
                <OptimizedImage
                  src={tiramisuImage}
                  alt="Classic Tiramisu"
                  aspectRatio="aspect-[4/5]"
                  className="transition-transform duration-300 group-hover:scale-[1.02]"
                />
                <div className="p-5 md:p-6 text-center">
                  <h3 className="font-serif text-xl md:text-2xl text-foreground mb-2">Tiramisu Classico</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Layers of espresso-soaked savoiardi, mascarpone cream, and a whisper of cocoa
                  </p>
                </div>
              </div>
            </AnimatedSection>

            {/* Cannoli */}
            <AnimatedSection delay={100}>
              <div className="card-luxury group">
                <OptimizedImage
                  src={cannoliImage}
                  alt="Sicilian Cannoli"
                  aspectRatio="aspect-[4/5]"
                  className="transition-transform duration-300 group-hover:scale-[1.02]"
                />
                <div className="p-5 md:p-6 text-center">
                  <h3 className="font-serif text-xl md:text-2xl text-foreground mb-2">Sicilian Cannoli</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Crisp shells filled with sweet ricotta, pistachio, and candied citrus
                  </p>
                </div>
              </div>
            </AnimatedSection>

            {/* Latte Art */}
            <AnimatedSection delay={150}>
              <div className="card-luxury group sm:col-span-2 lg:col-span-1">
                <OptimizedImage
                  src={latteImage}
                  alt="Artisan Coffee"
                  aspectRatio="aspect-[4/5]"
                  className="transition-transform duration-300 group-hover:scale-[1.02]"
                />
                <div className="p-5 md:p-6 text-center">
                  <h3 className="font-serif text-xl md:text-2xl text-foreground mb-2">Artisan Caffè</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Single-origin espresso crafted with precision and Melbourne's finest beans
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>

          <AnimatedSection className="text-center mt-10 md:mt-12">
            <Link to="/menu" className="btn-luxury sm:!w-auto">
              Explore Full Menu
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-luxury text-center">
          <AnimatedSection>
            <span className="text-luxury-caps text-gold-light">Experience</span>
            <div className="w-16 h-px bg-gold-light mx-auto mt-4 mb-6 md:mb-8" />
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4 md:mb-6">
              Visit DOLCE BARI
            </h2>
            <p className="text-primary-foreground/80 max-w-lg mx-auto mb-8 md:mb-10 text-base md:text-lg leading-relaxed">
              Step into our world of refined indulgence. Located in Huntingdale, 
              we invite you to experience Italian hospitality at its finest.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center max-w-sm sm:max-w-none mx-auto">
              <Link to="/contact" className="btn-gold">
                Get Directions
              </Link>
              <Link 
                to="/order"
                className="btn-luxury-outline border-gold-light/70 text-gold-light hover:bg-gold-light hover:text-primary"
              >
                Order Online
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
