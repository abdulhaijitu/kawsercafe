import { useState } from 'react';
import Layout from '@/components/Layout';
import AnimatedSection from '@/components/AnimatedSection';
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

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>('All');

  const categories = ['All', 'Desserts', 'Coffee', 'Ambiance', 'Craftsmanship'];
  
  const filteredImages = activeFilter === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeFilter);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-secondary">
        <div className="container-luxury">
          <AnimatedSection className="text-center max-w-3xl mx-auto">
            <span className="text-luxury-caps text-gold">Visual Stories</span>
            <div className="gold-line mt-4 mb-8" />
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
              Gallery
            </h1>
            <p className="text-muted-foreground text-lg">
              A glimpse into the world of DOLCE BARI—where every detail 
              tells a story of craftsmanship and indulgence
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 bg-background border-b border-border sticky top-[72px] z-30">
        <div className="container-luxury">
          <div className="flex flex-wrap justify-center gap-2 md:gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-4 py-2 text-xs tracking-widest uppercase transition-all duration-200 ${
                  activeFilter === category
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-transparent text-muted-foreground hover:text-foreground hover:bg-secondary'
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {filteredImages.map((image, index) => (
              <AnimatedSection key={image.alt} delay={(index % 3) * 100}>
                <button
                  onClick={() => setSelectedImage(image)}
                  className="relative w-full aspect-square overflow-hidden group cursor-pointer"
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <p className="text-white font-serif text-lg">{image.alt}</p>
                      <p className="text-white/70 text-xs uppercase tracking-wider">{image.category}</p>
                    </div>
                  </div>
                </button>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="mt-16 text-center">
            <p className="text-muted-foreground text-sm italic">
              *Images shown are placeholders and will be replaced with actual photography.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors"
            aria-label="Close"
          >
            <X size={32} />
          </button>
          <img
            src={selectedImage.src}
            alt={selectedImage.alt}
            className="max-w-full max-h-[85vh] object-contain animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          />
          <div className="absolute bottom-6 left-0 right-0 text-center">
            <p className="text-white font-serif text-xl">{selectedImage.alt}</p>
            <p className="text-white/60 text-xs uppercase tracking-wider mt-1">{selectedImage.category}</p>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default Gallery;
