import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const CallToAction = () => {
  return (
    <section className="container mx-auto px-4 md:px-6 py-20 text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-3xl md:text-4xl font-semibold mb-6">Ready to Tell Your Story?</h2>
        <p className="text-muted-foreground max-w-xl mx-auto mb-8">
          We'd be honored to be a part of your special day. Reach out to discuss your vision and let's create something beautiful together.
        </p>
        <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-10 py-3 text-lg">
          <Link to="/contact">Get In Touch</Link>
        </Button>
      </motion.div>
    </section>
  );
};

export default CallToAction;