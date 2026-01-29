import Layout from '@/components/Layout';
import AnimatedSection from '@/components/AnimatedSection';
import { Link } from 'react-router-dom';
import craftsmanshipImage from '@/assets/about-craftsmanship.jpg';
import interiorImage from '@/assets/gallery-interior.jpg';

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-secondary">
        <div className="container-luxury">
          <AnimatedSection className="text-center max-w-3xl mx-auto">
            <span className="text-luxury-caps text-gold">Our Story</span>
            <div className="gold-line mt-4 mb-8" />
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
              About DOLCE BARI
            </h1>
            <p className="text-muted-foreground text-lg">
              Where Italian tradition meets Melbourne's vibrant café culture
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding bg-background">
        <div className="container-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <AnimatedSection>
              <div className="relative">
                <img
                  src={interiorImage}
                  alt="DOLCE BARI Interior"
                  className="w-full rounded-sm shadow-elegant"
                />
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gold/20 rounded-sm -z-10" />
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={100}>
              <span className="text-luxury-caps text-gold">The Beginning</span>
              <div className="gold-line-left mt-4 mb-6" />
              <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
                A Dream of <span className="italic">Dolce</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                DOLCE BARI was born from a passion for authentic Italian dessert 
                culture and a desire to bring something truly special to Melbourne's 
                south-eastern suburbs. Our founders envisioned a space where the 
                artistry of Italian pasticceria could flourish alongside Australia's 
                renowned café scene.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Every element of DOLCE BARI—from our carefully sourced ingredients 
                to our warm marble interiors—reflects our commitment to creating an 
                experience that transports you to the elegant dessert bars of Italy, 
                while remaining distinctly Melbourne.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Craftsmanship Section */}
      <section className="section-padding bg-cream-dark">
        <div className="container-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <AnimatedSection className="order-2 lg:order-1">
              <span className="text-luxury-caps text-gold">Our Craft</span>
              <div className="gold-line-left mt-4 mb-6" />
              <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
                Artisanal Excellence
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Each creation at DOLCE BARI is crafted with meticulous attention 
                to detail. Our pastry artisans honor time-tested Italian techniques 
                while embracing the finest local produce. From hand-rolled cannoli 
                shells to our signature tiramisu made fresh daily, every dessert 
                tells a story of dedication.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                We source our espresso from Melbourne's finest roasters, ensuring 
                every cup meets the exacting standards of Italian coffee culture. 
                Our gelato is churned in small batches, and our pastries are baked 
                throughout the day to guarantee freshness.
              </p>
              <Link to="/menu" className="btn-luxury">
                View Our Menu
              </Link>
            </AnimatedSection>

            <AnimatedSection delay={100} className="order-1 lg:order-2">
              <div className="relative">
                <img
                  src={craftsmanshipImage}
                  alt="Artisan crafting desserts"
                  className="w-full rounded-sm shadow-elegant"
                />
                <div className="absolute -top-6 -left-6 w-32 h-32 bg-rose/20 rounded-sm -z-10" />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-background">
        <div className="container-luxury">
          <AnimatedSection className="text-center mb-16">
            <span className="text-luxury-caps text-gold">Our Values</span>
            <div className="gold-line mt-4 mb-8" />
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground">
              What We Stand For
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            <AnimatedSection delay={0}>
              <div className="text-center p-8">
                <div className="w-16 h-16 mx-auto mb-6 border border-gold rounded-full flex items-center justify-center">
                  <span className="font-serif text-2xl text-gold italic">Q</span>
                </div>
                <h3 className="font-serif text-xl text-foreground mb-4">Quality</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Only the finest ingredients make it into our kitchen—from 
                  imported Italian mascarpone to locally sourced dairy and produce.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={100}>
              <div className="text-center p-8">
                <div className="w-16 h-16 mx-auto mb-6 border border-gold rounded-full flex items-center justify-center">
                  <span className="font-serif text-2xl text-gold italic">T</span>
                </div>
                <h3 className="font-serif text-xl text-foreground mb-4">Tradition</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  We honor the recipes and techniques passed down through 
                  generations of Italian pastry masters.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <div className="text-center p-8">
                <div className="w-16 h-16 mx-auto mb-6 border border-gold rounded-full flex items-center justify-center">
                  <span className="font-serif text-2xl text-gold italic">E</span>
                </div>
                <h3 className="font-serif text-xl text-foreground mb-4">Experience</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Every visit to DOLCE BARI is an invitation to slow down, 
                  savor, and appreciate life's sweetest moments.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-luxury text-center">
          <AnimatedSection>
            <h2 className="font-serif text-3xl md:text-4xl mb-6">
              Come Experience the Difference
            </h2>
            <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8">
              We invite you to visit DOLCE BARI and discover why our guests 
              return time and time again.
            </p>
            <Link to="/contact" className="btn-gold">
              Visit Us Today
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default About;
