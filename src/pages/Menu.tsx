import Layout from '@/components/Layout';
import AnimatedSection from '@/components/AnimatedSection';
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
  <div className="card-luxury group">
    <div className="aspect-[4/5] overflow-hidden">
      <img
        src={image}
        alt={name}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
    </div>
    <div className="p-6">
      <h3 className="font-serif text-xl text-foreground mb-2">{name}</h3>
      <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
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
      description: 'Velvety steamed milk meets our signature espresso blend, finished with artisan latte art',
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
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-secondary">
        <div className="container-luxury">
          <AnimatedSection className="text-center max-w-3xl mx-auto">
            <span className="text-luxury-caps text-gold">Our Offerings</span>
            <div className="gold-line mt-4 mb-8" />
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
              The Menu
            </h1>
            <p className="text-muted-foreground text-lg">
              A curated selection of Italian desserts and artisan coffee, 
              crafted with passion and precision
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Desserts Section */}
      <section className="section-padding bg-background">
        <div className="container-luxury">
          <AnimatedSection className="text-center mb-16">
            <span className="text-luxury-caps text-gold">Dolci</span>
            <div className="gold-line mt-4 mb-8" />
            <h2 className="font-serif text-3xl md:text-4xl text-foreground">
              Desserts & Sweets
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {desserts.map((item, index) => (
              <AnimatedSection key={item.name} delay={index * 100}>
                <MenuItem {...item} />
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="mt-16 text-center">
            <p className="text-muted-foreground text-sm italic">
              *Please enquire about daily specials and seasonal offerings
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Drinks Section */}
      <section className="section-padding bg-cream-dark">
        <div className="container-luxury">
          <AnimatedSection className="text-center mb-16">
            <span className="text-luxury-caps text-gold">Bevande</span>
            <div className="gold-line mt-4 mb-8" />
            <h2 className="font-serif text-3xl md:text-4xl text-foreground">
              Café Drinks
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {drinks.map((item, index) => (
              <AnimatedSection key={item.name} delay={index * 100}>
                <MenuItem {...item} />
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="mt-16 text-center">
            <p className="text-muted-foreground text-sm">
              All coffee available with regular, oat, almond, or soy milk
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Coming Soon / Online Ordering */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-luxury text-center">
          <AnimatedSection>
            <span className="text-luxury-caps text-gold-light">Coming Soon</span>
            <div className="w-16 h-px bg-gold-light mx-auto mt-4 mb-8" />
            <h2 className="font-serif text-3xl md:text-4xl mb-6">
              Online Ordering
            </h2>
            <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8">
              We're working on bringing DOLCE BARI's exquisite offerings 
              directly to your door. Stay tuned for our online ordering launch.
            </p>
            <button 
              disabled
              className="btn-gold opacity-60 cursor-not-allowed"
              title="Coming Soon"
            >
              Order Online — Coming Soon
            </button>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default Menu;
