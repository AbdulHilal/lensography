import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '@/components/ui/section-heading';
import { MessageCircle } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "Lensography captured our day perfectly. The photos are breathtaking, and they were a joy to work with!",
      name: "Sarah & Tom",
      avatar: "S",
    },
    {
      quote: "We couldn't be happier with our wedding album. Every photo tells a story. Highly recommend!",
      name: "Jessica & Michael",
      avatar: "J",
    },
    {
      quote: "Professional, creative, and so talented. They made us feel comfortable and the results are stunning.",
      name: "Emily & David",
      avatar: "E",
    },
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
    <section className="py-16" style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7))" }}>
      <div className="absolute inset-0 -z-10">
        <img  
          className="w-full h-full object-cover opacity-30" 
          alt="Elegant wedding reception details"
         src="https://images.unsplash.com/photo-1624067078399-be29c52a2b12" />
      </div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <SectionHeading 
          title="Words From Our Couples"
          subtitle="Hear what our clients have to say about their experience with Lensography."
          className="text-white drop-shadow-md"
        />
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="p-6 rounded-lg testimonial-card text-white"
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={featureVariants}
            >
              <MessageCircle size={28} className="mb-4 opacity-50" />
              <p className="italic mb-4">"{testimonial.quote}"</p>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-semibold mr-3">
                  {testimonial.avatar}
                </div>
                <span className="font-semibold">{testimonial.name}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;