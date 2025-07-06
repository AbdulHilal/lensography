import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import SectionHeading from '@/components/ui/section-heading';

const MiniGallery = () => {
  const galleryImages = [
    { id: 1, src: "https://storage.googleapis.com/hostinger-horizons-assets-prod/ec1b7c35-5d4d-4eb2-b90b-449879123854/a8390177f2b10b3262cd5fcf8240369b.png", alt: "Joyful couple at their wedding ceremony", description: "Joyful couple at their wedding ceremony", size: "large" },
    { id: 2, src: "https://storage.googleapis.com/hostinger-horizons-assets-prod/ec1b7c35-5d4d-4eb2-b90b-449879123854/c2178d1b6829da53bd527747c08a98cb.png", alt: "Bride holding a beautiful bouquet", description: "Bride holding a beautiful bouquet" },
    { id: 3, src: "https://images.unsplash.com/photo-1614725077723-139ccd57f7f8", alt: "Groom looking lovingly at the bride", description: "Groom looking lovingly at the bride" },
    { id: 4, src: "https://images.unsplash.com/photo-1587028186631-2ba8039375f6", alt: "Detailed shot of wedding rings", description: "Detailed shot of wedding rings", size: "wide" },
    { id: 5, src: "https://images.unsplash.com/photo-1511285560929-80442637e5d6", alt: "Wedding reception dance floor", description: "Wedding reception dance floor" },
  ];

  const featureVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: { delay: i * 0.2, duration: 0.5, ease: "easeOut" },
    }),
  };

  return (
    <section className="py-16 bg-muted/50">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading 
          title="A Glimpse of Our Artistry"
          subtitle="Explore a selection of moments we've had the honor to capture."
        />
        <div className="gallery-grid">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              className={`gallery-item rounded-lg shadow-lg ${image.size || ''}`}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={featureVariants}
            >
              <img   
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" 
                alt={image.alt}
               src={image.src} />
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button asChild size="lg" className="bg-primary border border-primary-foreground/50 text-black hover:bg-gray-800 hover:text-primary transition-colors duration-200">
            <Link to="/portfolio">Discover Full Portfolio</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MiniGallery;