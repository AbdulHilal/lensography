import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import SectionHeading from '@/components/ui/section-heading';

const AboutSnippet = () => {
  return (
    <section className="container mx-auto px-4 md:px-6 py-16">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <img  
            className="rounded-lg shadow-xl w-full h-auto object-cover aspect-[4/3]" 
            alt="Photographer capturing a special moment"
           src="https://storage.googleapis.com/hostinger-horizons-assets-prod/ec1b7c35-5d4d-4eb2-b90b-449879123854/c2178d1b6829da53bd527747c08a98cb.png" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <SectionHeading 
            title="Crafting Memories, One Click at a Time" 
            subtitle="We are passionate storytellers dedicated to preserving the magic of your special day. With an eye for detail and a heart for romance, we create images that you'll cherish for a lifetime."
            align="left"
            className="mb-6"
          />
          <Button asChild variant="outline" className="mt-6 border-primary text-primary hover:bg-primary/10">
            <Link to="/about">Learn More About Us</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSnippet;