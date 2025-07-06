import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '@/components/ui/section-heading';

const PortfolioPage = () => {
  const galleryImages = [
    { id: 1, src: "https://storage.googleapis.com/hostinger-horizons-assets-prod/ec1b7c35-5d4d-4eb2-b90b-449879123854/a8390177f2b10b3262cd5fcf8240369b.png", alt: "Bride and groom sharing a laugh", description: "Bride and groom sharing a laugh during their wedding reception", size: "large" },
    { id: 2, src: "https://storage.googleapis.com/hostinger-horizons-assets-prod/ec1b7c35-5d4d-4eb2-b90b-449879123854/c2178d1b6829da53bd527747c08a98cb.png", alt: "Close-up of bride's intricate dress details", description: "Close-up of bride's intricate wedding dress details" },
    { id: 3, src: "https://images.unsplash.com/photo-1587028186631-2ba8039375f6", alt: "Groom waiting at the altar", description: "Groom waiting anxiously and happily at the altar" },
    { id: 4, src: "https://images.unsplash.com/photo-1511285560929-80442637e5d6", alt: "Candid shot of wedding guests enjoying the celebration", description: "Candid shot of wedding guests enjoying the celebration", size: "wide" },
    { id: 5, src: "https://images.unsplash.com/photo-1541569613-972900751571", alt: "Romantic sunset portrait of the couple", description: "Romantic sunset portrait of the newlywed couple" },
    { id: 6, src: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d", alt: "Artistic shot of wedding rings on a textured surface", description: "Artistic shot of wedding rings on a textured surface" },
    { id: 7, src: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8", alt: "Bride walking down the aisle", description: "Bride walking down the aisle with her father", size: "tall" },
    { id: 8, src: "https://images.unsplash.com/photo-1500047163793-282593906f78", alt: "Joyful first dance of the couple", description: "Joyful first dance of the couple under soft lighting" },
    { id: 9, src: "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47", alt: "Beautifully decorated wedding cake", description: "Beautifully decorated multi-tiered wedding cake" },
    { id: 10, src: "https://images.unsplash.com/photo-1519225254285-6271f695059c", alt: "Couple's grand exit with sparklers", description: "Couple's grand exit with guests holding sparklers", size: "wide" },
    { id: 11, src: "https://images.unsplash.com/photo-1509610708039-6373d0924978", alt: "Emotional moment during vows", description: "Emotional moment as couple exchanges vows" },
    { id: 12, src: "https://images.unsplash.com/photo-1565879373264-c10750a0a4ab", alt: "Aerial view of the wedding venue", description: "Aerial view of the stunning wedding venue", size: "large" },
  ];

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" },
    }),
  };

  return (
    <div className="container mx-auto px-4 md:px-6 py-16">
      <SectionHeading 
        title="Our Wedding Portfolio"
        subtitle="Explore a curated collection of moments that showcase our style, creativity, and passion for wedding photography. Each image tells a unique story of love and celebration."
      />
      
      <div className="gallery-grid">
        {galleryImages.map((image, index) => (
          <motion.div
            key={image.id}
            className={`gallery-item rounded-lg shadow-lg overflow-hidden group ${image.size || ''}`}
            custom={index}
            initial="hidden"
            animate="visible"
            variants={itemVariants}
          >
            <img   
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
              alt={image.alt}
              src={image.src} />
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
              <p className="text-white text-center text-sm">{image.alt}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default PortfolioPage;