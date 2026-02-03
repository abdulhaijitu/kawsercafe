import Layout from '@/components/Layout';
import AnimatedSection from '@/components/AnimatedSection';
import OptimizedImage from '@/components/OptimizedImage';
import { Link } from 'react-router-dom';
import tiramisuImage from '@/assets/dessert-tiramisu.jpg';
import cannoliImage from '@/assets/dessert-cannoli.jpg';
import pannacottaImage from '@/assets/dessert-pannacotta.jpg';
import torteImage from '@/assets/dessert-torte.jpg';
import sfogliatellaImage from '@/assets/dessert-sfogliatella.jpg';
import latteImage from '@/assets/coffee-latte.jpg';
import affogatoImage from '@/assets/coffee-affogato.jpg';
import espressoImage from '@/assets/gallery-espresso.jpg';

interface MenuItemProps {
  image: string;
  name: string;
  description: string;
  note?: string;
}

const MenuItem = ({ image, name, description, note }: MenuItemProps) => (
  <div className="card-luxury group h-full flex flex-col">
    <OptimizedImage
      src={image}
      alt={name}
      aspectRatio="aspect-[4/5]"
      className="transition-transform duration-300 group-hover:scale-[1.02]"
    />
    <div className="p-5 md:p-6 flex-1 flex flex-col">
      <h3 className="font-serif text-lg md:text-xl text-foreground mb-2">{name}</h3>
      <p className="text-muted-foreground text-sm leading-relaxed flex-1">{description}</p>
      {note && (
        <p className="text-gold text-xs mt-3 italic">{note}</p>
      )}
    </div>
  </div>
);

const Menu = () => {
  const desserts = [
    {
      image: tiramisuImage,
      name: 'Tiramisu Classico',
      description: 'Espresso-soaked savoiardi layered with silky mascarpone cream, dusted with Valrhona cocoa',
      note: 'House Favourite',
    },
    {
      image: cannoliImage,
      name: 'Sicilian Cannoli',
      description: 'Hand-rolled crisp shells filled with fresh ricotta, pistachio, and candied orange peel',
    },
    {
      image: pannacottaImage,
      name: 'Panna Cotta',
      description: 'Silken vanilla bean cream set to perfection, adorned with seasonal berry coulis',
    },
    {
      image: torteImage,
      name: 'Torta al Cioccolato',
      description: 'Rich dark chocolate torte with hazelnut praline and gold leaf',
      note: 'Signature Creation',
    },
    {
      image: sfogliatellaImage,
      name: 'Sfogliatella',
      description: 'Flaky Neapolitan pastry filled with semolina cream and candied citrus',
    },
  ];

  const drinks = [
    {
      image: espressoImage,
      name: 'Espresso',
      description: 'Single-origin beans expertly extracted for a rich, aromatic shot with perfect crema',
    },
    {
      image: latteImage,
      name: 'Caffè Latte',
      description: 'Velvety steamed milk meets our signature espresso blend, finished with latte art',
    },
    {
      image: affogatoImage,
      name: 'Affogato',
      description: 'Vanilla bean gelato "drowned" in hot espresso—the perfect marriage of hot and cold',
      note: 'Must Try',
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-28 pb-12 md:pt-36 md:pb-20 bg-secondary">
        <div className="container-luxury">
          <AnimatedSection className="text-center max-w-2xl mx-auto">
            <span className="text-luxury-caps text-gold">Our Offerings</span>
            <div className="gold-line mt-4 mb-6" />
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-foreground mb-4">
              The Menu
            </h1>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
              A curated selection of Italian desserts and artisan coffee, 
              crafted with passion
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Desserts Section */}
      <section className="section-padding bg-background">
        <div className="container-luxury">
          <AnimatedSection className="text-center mb-10 md:mb-14">
            <span className="text-luxury-caps text-gold">Dolci</span>
            <div className="gold-line mt-4 mb-6" />
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-foreground">
              Desserts & Sweets
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {desserts.map((item, index) => (
              <AnimatedSection key={item.name} delay={index * 75}>
                <MenuItem {...item} />
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="mt-10 text-center">
            <p className="text-muted-foreground text-xs md:text-sm italic">
              *Please enquire about daily specials and seasonal offerings
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Drinks Section */}
      <section className="section-padding bg-cream-dark">
        <div className="container-luxury">
          <AnimatedSection className="text-center mb-10 md:mb-14">
            <span className="text-luxury-caps text-gold">Bevande</span>
            <div className="gold-line mt-4 mb-6" />
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-foreground">
              Café Drinks
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 max-w-4xl mx-auto">
            {drinks.map((item, index) => (
              <AnimatedSection key={item.name} delay={index * 75}>
                <MenuItem {...item} />
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="mt-10 text-center">
            <p className="text-muted-foreground text-sm">
              All coffee available with regular, oat, almond, or soy milk
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Order Online CTA */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-luxury text-center">
          <AnimatedSection>
            <span className="text-luxury-caps text-gold-light">Order Now</span>
            <div className="w-16 h-px bg-gold-light mx-auto mt-4 mb-6" />
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl mb-4">
              Online Ordering
            </h2>
            <p className="text-primary-foreground/80 max-w-md mx-auto mb-6 md:mb-8 leading-relaxed">
              Order your favourite DOLCE BARI treats online for convenient pickup.
            </p>
            <Link to="/order" className="btn-gold sm:!w-auto">
              Order Online
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default Menu;
