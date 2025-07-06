import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import SectionHeading from '@/components/ui/section-heading';
import { Camera, Heart, Users } from 'lucide-react';

const ServicesOverview = () => {
  const featureVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: { delay: i * 0.2, duration: 0.5, ease: "easeOut" },
    }),
  };

  const services = [
    { icon: <Camera size={36} className="text-primary" />, title: "Full Day Coverage", description: "From preparations to the final dance, we capture every moment." },
    { icon: <Heart size={36} className="text-primary" />, title: "Engagement Shoots", description: "Celebrate your love story before the big day with a beautiful session." },
    { icon: <Users size={36} className="text-primary" />, title: "Custom Albums", description: "Preserve your memories in exquisitely designed, high-quality albums." },
  ];

  return (
    <section className="container mx-auto px-4 md:px-6 py-16">
      <SectionHeading 
        title="Our Signature Services"
        subtitle="Tailored packages to perfectly suit your wedding day vision and needs."
      />
      <div className="grid md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            className="p-8 bg-card rounded-xl shadow-lg text-center service-card"
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={featureVariants}
          >
            <div className="flex justify-center mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-muted-foreground">{service.description}</p>
          </motion.div>
        ))}
      </div>
      <div className="text-center mt-12">
        <Button asChild variant="outline" className="bg-primary border border-primary-foreground/50 text-black hover:bg-gray-800 hover:text-primary transition-colors duration-200">
          <Link to="/services">Explore All Services</Link>
        </Button>
      </div>
    </section>
  );
};

export default ServicesOverview;