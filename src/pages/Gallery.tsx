import { useState, useCallback, memo } from 'react';
import Layout from '@/components/Layout';
import AnimatedSection from '@/components/AnimatedSection';
import OptimizedImage from '@/components/OptimizedImage';
import { X } from 'lucide-react';

import heroImage from '@/assets/hero-desserts.jpg';
import tiramisuImage from '@/assets/dessert-tiramisu.jpg';
import cannoliImage from '@/assets/dessert-cannoli.jpg';
import pannacottaImage from '@/assets/dessert-pannacotta.jpg';
import torteImage from '@/assets/dessert-torte.jpg';
import sfogliatellaImage from '@/assets/dessert-sfogliatella.jpg';
import latteImage from '@/assets/coffee-latte.jpg';
import affogatoImage from '@/assets/coffee-affogato.jpg';
import espressoImage from '@/assets/gallery-espresso.jpg';
import interiorImage from '@/assets/gallery-interior.jpg';
import craftsmanshipImage from '@/assets/about-craftsmanship.jpg';

interface GalleryImage {
  src: string;
  alt: string;
  category: string;
}

const galleryImages: GalleryImage[] = [
  { src: heroImage, alt: 'DOLCE BARI signature desserts', category: 'Ambiance' },
  { src: interiorImage, alt: 'Elegant café interior', category: 'Ambiance' },
  { src: tiramisuImage, alt: 'Tiramisu Classico', category: 'Desserts' },
  { src: cannoliImage, alt: 'Sicilian Cannoli', category: 'Desserts' },
  { src: latteImage, alt: 'Artisan Latte', category: 'Coffee' },
  { src: pannacottaImage, alt: 'Panna Cotta', category: 'Desserts' },
  { src: torteImage, alt: 'Chocolate Torte', category: 'Desserts' },
  { src: espressoImage, alt: 'Premium Espresso', category: 'Coffee' },
  { src: craftsmanshipImage, alt: 'Artisan at work', category: 'Craftsmanship' },
  { src: sfogliatellaImage, alt: 'Sfogliatella', category: 'Desserts' },
  { src: affogatoImage, alt: 'Affogato', category: 'Coffee' },
];

const categories = ['All', 'Desserts', 'Coffee', 'Ambiance', 'Craftsmanship'];

const GalleryItem = memo(({ 
  image, 
  index, 
  onClick 
}: { 
  image: GalleryImage; 
  index: number; 
  onClick: () => void;
}) => (
  <AnimatedSection delay={(index % 6) * 50}>
    <button
      onClick={onClick}
      className="relative w-full aspect-square overflow-hidden group cursor-pointer focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2"
      aria-label={`View ${image.alt}`}
    >
      <OptimizedImage
        src={image.src}
        alt={image.alt}
        aspectRatio="aspect-square"
        className="transition-transform duration-300 group-hover:scale-105 group-active:scale-100"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-250">
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <p className="text-white font-serif text-base md:text-lg">{image.alt}</p>
          <p className="text-white/70 text-xs uppercase tracking-wider">{image.category}</p>
        </div>
      </div>
    </button>
  </AnimatedSection>
));

GalleryItem.displayName = 'GalleryItem';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>('All');

  const filteredImages = activeFilter === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeFilter);

  const handleImageClick = useCallback((image: GalleryImage) => {
    setSelectedImage(image);
  }, []);

  const handleClose = useCallback(() => {
    setSelectedImage(null);
  }, []);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-28 pb-12 md:pt-36 md:pb-20 bg-secondary">
        <div className="container-luxury">
          <AnimatedSection className="text-center max-w-2xl mx-auto">
            <span className="text-luxury-caps text-gold">Visual Stories</span>
            <div className="gold-line mt-4 mb-6" />
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-foreground mb-4">
              Gallery
            </h1>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
              A glimpse into the world of DOLCE BARI—where every detail 
              tells a story of craftsmanship
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-4 md:py-6 bg-background border-b border-border sticky top-[60px] md:top-[72px] z-30">
        <div className="container-luxury">
          <div className="flex overflow-x-auto scrollbar-hide gap-2 md:gap-3 justify-start md:justify-center pb-2 md:pb-0 -mx-5 px-5 md:mx-0 md:px-0">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`flex-shrink-0 px-4 py-2.5 text-xs tracking-widest uppercase transition-all duration-200 touch-target ${
                  activeFilter === category
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-secondary text-muted-foreground hover:text-foreground active:bg-muted'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section-padding bg-background">
        <div className="container-luxury">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-5">
            {filteredImages.map((image, index) => (
              <GalleryItem
                key={image.alt}
                image={image}
                index={index}
                onClick={() => handleImageClick(image)}
              />
            ))}
          </div>

          <AnimatedSection className="mt-12 text-center">
            <p className="text-muted-foreground text-xs md:text-sm italic">
              *Images shown are placeholders and will be replaced with actual photography.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 animate-fade-in"
          onClick={handleClose}
          role="dialog"
          aria-modal="true"
        >
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 md:top-6 md:right-6 text-white/70 hover:text-white transition-colors p-2 touch-target"
            aria-label="Close"
          >
            <X size={28} />
          </button>
          <img
            src={selectedImage.src}
            alt={selectedImage.alt}
            className="max-w-full max-h-[80vh] object-contain animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          />
          <div className="absolute bottom-4 md:bottom-6 left-0 right-0 text-center px-4">
            <p className="text-white font-serif text-lg md:text-xl">{selectedImage.alt}</p>
            <p className="text-white/60 text-xs uppercase tracking-wider mt-1">{selectedImage.category}</p>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default Gallery;
