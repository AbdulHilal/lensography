import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const heroVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <motion.section 
      className="relative h-[80vh] md:h-screen flex items-center justify-center text-center text-white"
      initial="hidden"
      animate="visible"
      variants={heroVariants}
    >
      <div className="absolute inset-0 bg-black/40 z-10"></div>
      <img   
        className="absolute inset-0 w-full h-full object-cover" 
        alt="Stunning wedding photo of a couple in a scenic outdoor location"
       src="https://storage.googleapis.com/hostinger-horizons-assets-prod/ec1b7c35-5d4d-4eb2-b90b-449879123854/9e757400d40e0479ece36deca541fa78.jpg" />
      <div className="relative z-20 container mx-auto px-4 md:px-6">
        <motion.h1 
          className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        >
          Capturing Your Forever
        </motion.h1>
        <motion.p 
          className="mt-6 text-lg md:text-xl max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
        >
          Timeless photography that tells your unique story with passion and artistry.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
          className="mt-10"
        >
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg">
            <Link to="/contact">Contact Us</Link>
          </Button>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default HeroSection;