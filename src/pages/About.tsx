import Layout from '@/components/Layout';
import AnimatedSection from '@/components/AnimatedSection';
import OptimizedImage from '@/components/OptimizedImage';
import { Link } from 'react-router-dom';
import craftsmanshipImage from '@/assets/about-craftsmanship.jpg';
import interiorImage from '@/assets/gallery-interior.jpg';

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-28 pb-12 md:pt-36 md:pb-20 bg-secondary">
        <div className="container-luxury">
          <AnimatedSection className="text-center max-w-2xl mx-auto">
            <span className="text-luxury-caps text-gold">Our Story</span>
            <div className="gold-line mt-4 mb-6" />
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-foreground mb-4">
              About DOLCE BARI
            </h1>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
              Where Italian tradition meets Melbourne's vibrant café culture
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding bg-background">
        <div className="container-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <AnimatedSection>
              <div className="relative">
                <OptimizedImage
                  src={interiorImage}
                  alt="DOLCE BARI Interior"
                  aspectRatio="aspect-[4/3]"
                  className="rounded-sm shadow-elegant"
                />
                <div className="absolute -bottom-4 -right-4 w-24 h-24 md:w-32 md:h-32 bg-gold/20 rounded-sm -z-10 hidden md:block" />
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={100}>
              <span className="text-luxury-caps text-gold">The Beginning</span>
              <div className="gold-line-left mt-4 mb-5" />
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-foreground mb-5">
                A Dream of <span className="italic">Dolce</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                DOLCE BARI was born from a passion for authentic Italian dessert 
                culture and a desire to bring something truly special to Melbourne's 
                south-eastern suburbs.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Every element of DOLCE BARI—from our carefully sourced ingredients 
                to our warm interiors—reflects our commitment to creating an 
                experience that transports you to the elegant dessert bars of Italy.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Craftsmanship Section */}
      <section className="section-padding bg-cream-dark">
        <div className="container-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <AnimatedSection className="order-2 lg:order-1">
              <span className="text-luxury-caps text-gold">Our Craft</span>
              <div className="gold-line-left mt-4 mb-5" />
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-foreground mb-5">
                Artisanal Excellence
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Each creation at DOLCE BARI is crafted with meticulous attention 
                to detail. Our pastry artisans honor time-tested Italian techniques 
                while embracing the finest local produce.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                From hand-rolled cannoli shells to our signature tiramisu made 
                fresh daily, every dessert tells a story of dedication.
              </p>
              <Link to="/menu" className="btn-luxury sm:!w-auto">
                View Our Menu
              </Link>
            </AnimatedSection>

            <AnimatedSection delay={100} className="order-1 lg:order-2">
              <div className="relative">
                <OptimizedImage
                  src={craftsmanshipImage}
                  alt="Artisan crafting desserts"
                  aspectRatio="aspect-[4/3]"
                  className="rounded-sm shadow-elegant"
                />
                <div className="absolute -top-4 -left-4 w-24 h-24 md:w-32 md:h-32 bg-rose/20 rounded-sm -z-10 hidden md:block" />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-background">
        <div className="container-luxury">
          <AnimatedSection className="text-center mb-10 md:mb-14">
            <span className="text-luxury-caps text-gold">Our Values</span>
            <div className="gold-line mt-4 mb-6" />
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-foreground">
              What We Stand For
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8">
            {[
              { letter: 'Q', title: 'Quality', desc: 'Only the finest ingredients—from imported Italian mascarpone to locally sourced dairy and produce.' },
              { letter: 'T', title: 'Tradition', desc: 'We honor the recipes and techniques passed down through generations of Italian pastry masters.' },
              { letter: 'E', title: 'Experience', desc: 'Every visit is an invitation to slow down, savor, and appreciate life\'s sweetest moments.' },
            ].map((value, index) => (
              <AnimatedSection key={value.letter} delay={index * 100}>
                <div className="text-center p-6 md:p-8">
                  <div className="w-14 h-14 md:w-16 md:h-16 mx-auto mb-5 border border-gold rounded-full flex items-center justify-center">
                    <span className="font-serif text-xl md:text-2xl text-gold italic">{value.letter}</span>
                  </div>
                  <h3 className="font-serif text-lg md:text-xl text-foreground mb-3">{value.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {value.desc}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-luxury text-center">
          <AnimatedSection>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl mb-4">
              Come Experience the Difference
            </h2>
            <p className="text-primary-foreground/80 max-w-md mx-auto mb-6 md:mb-8 leading-relaxed">
              We invite you to visit DOLCE BARI and discover why our guests 
              return time and time again.
            </p>
            <Link to="/contact" className="btn-gold sm:!w-auto">
              Visit Us Today
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default About;
