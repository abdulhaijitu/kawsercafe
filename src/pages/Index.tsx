import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import AnimatedSection from '@/components/AnimatedSection';
import heroImage from '@/assets/hero-desserts.jpg';
import tiramisuImage from '@/assets/dessert-tiramisu.jpg';
import cannoliImage from '@/assets/dessert-cannoli.jpg';
import latteImage from '@/assets/coffee-latte.jpg';

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="DOLCE BARI luxury desserts and café"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/30" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container-luxury text-center md:text-left md:max-w-3xl lg:max-w-4xl">
          <AnimatedSection>
            <span className="text-luxury-caps text-gold-light tracking-[0.3em] text-xs md:text-sm">
              Welcome to
            </span>
          </AnimatedSection>
          
          <AnimatedSection delay={100}>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-medium text-white mt-4 mb-2 tracking-wide">
              DOLCE BARI
            </h1>
          </AnimatedSection>
          
          <AnimatedSection delay={200}>
            <p className="font-serif text-xl md:text-2xl text-white/90 italic mb-8">
              Sweets & Café
            </p>
          </AnimatedSection>

          <AnimatedSection delay={300}>
            <p className="text-white/80 text-base md:text-lg max-w-xl leading-relaxed mb-10">
              Experience the art of Italian confections in the heart of Melbourne. 
              Where European tradition meets Australian café culture.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={400}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link to="/menu" className="btn-gold">
                View Menu
              </Link>
              <Link to="/contact" className="btn-luxury-outline border-white/80 text-white hover:bg-white hover:text-primary">
                Visit Us
              </Link>
            </div>
          </AnimatedSection>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-px h-12 bg-gradient-to-b from-gold to-transparent" />
        </div>
      </section>

      {/* Brand Story Section */}
      <section className="section-padding bg-background">
        <div className="container-luxury">
          <AnimatedSection className="text-center max-w-3xl mx-auto">
            <span className="text-luxury-caps text-gold">Our Philosophy</span>
            <div className="gold-line mt-4 mb-8" />
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-8">
              The Art of <span className="italic">Dolce Vita</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Nestled in Huntingdale, DOLCE BARI brings the timeless elegance of 
              Italian pasticceria to Melbourne. Every creation is a tribute to 
              generations of artisanal craftsmanship—delicate pastries, velvety 
              gelato, and espresso that speaks of Italian heritage.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We believe in the simple pleasure of a perfectly layered tiramisu, 
              the warmth of freshly baked cannoli, and the ritual of coffee shared 
              with loved ones. This is not just a café—it's a destination for those 
              who appreciate life's sweeter moments.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Featured Offerings */}
      <section className="section-padding bg-secondary">
        <div className="container-luxury">
          <AnimatedSection className="text-center mb-16">
            <span className="text-luxury-caps text-gold">Curated Selection</span>
            <div className="gold-line mt-4 mb-8" />
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground">
              Our Signature Offerings
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Tiramisu */}
            <AnimatedSection delay={0}>
              <div className="card-luxury group">
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={tiramisuImage}
                    alt="Classic Tiramisu"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="font-serif text-2xl text-foreground mb-2">Tiramisu Classico</h3>
                  <p className="text-muted-foreground text-sm">
                    Layers of espresso-soaked savoiardi, mascarpone cream, and a whisper of cocoa
                  </p>
                </div>
              </div>
            </AnimatedSection>

            {/* Cannoli */}
            <AnimatedSection delay={100}>
              <div className="card-luxury group">
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={cannoliImage}
                    alt="Sicilian Cannoli"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="font-serif text-2xl text-foreground mb-2">Sicilian Cannoli</h3>
                  <p className="text-muted-foreground text-sm">
                    Crisp shells filled with sweet ricotta, pistachio, and candied citrus
                  </p>
                </div>
              </div>
            </AnimatedSection>

            {/* Latte Art */}
            <AnimatedSection delay={200}>
              <div className="card-luxury group">
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={latteImage}
                    alt="Artisan Coffee"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="font-serif text-2xl text-foreground mb-2">Artisan Caffè</h3>
                  <p className="text-muted-foreground text-sm">
                    Single-origin espresso crafted with precision and Melbourne's finest beans
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>

          <AnimatedSection className="text-center mt-12">
            <Link to="/menu" className="btn-luxury">
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
            <div className="w-16 h-px bg-gold-light mx-auto mt-4 mb-8" />
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl mb-6">
              Visit DOLCE BARI
            </h2>
            <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-10 text-lg">
              Step into our world of refined indulgence. Located in Huntingdale, 
              we invite you to experience Italian hospitality at its finest.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-gold">
                Get Directions
              </Link>
              <button 
                disabled
                className="btn-luxury-outline border-gold-light/50 text-gold-light opacity-60 cursor-not-allowed"
                title="Coming Soon"
              >
                Order Online — Coming Soon
              </button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
