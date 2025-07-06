import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '@/components/ui/section-heading';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Package, Camera, Film, Users, CalendarDays, MapPin } from 'lucide-react';

const ServicesPage = () => {
  const services = [
    {
      icon: <Package size={40} className="text-primary" />,
      title: "The Essential Collection",
      price: "$2,500",
      features: [
        "6 Hours of Coverage",
        "Lead Photographer",
        "Online Gallery of Edited Images",
        "Print Release",
      ],
      description: "Perfect for intimate weddings and elopements, capturing the core moments of your special day."
    },
    {
      icon: <Camera size={40} className="text-primary" />,
      title: "The Romance Collection",
      price: "$4,000",
      features: [
        "8 Hours of Coverage",
        "Lead Photographer + Assistant",
        "Engagement Session",
        "Online Gallery & USB Drive",
        "Small Wedding Album (20 pages)",
      ],
      description: "Our most popular package, offering comprehensive coverage and beautiful keepsakes."
    },
    {
      icon: <Film size={40} className="text-primary" />,
      title: "The Fairytale Collection",
      price: "$6,000",
      features: [
        "10 Hours of Coverage",
        "Lead Photographer + Second Shooter",
        "Luxury Engagement Session",
        "Online Gallery, USB & Custom Box",
        "Large Luxury Wedding Album (40 pages)",
        "Two Parent Albums",
      ],
      description: "The ultimate experience, ensuring every detail is captured with an artistic touch and premium products."
    },
  ];

  const addOns = [
    { icon: <Users size={24} className="text-primary" />, name: "Second Photographer", price: "$500" },
    { icon: <CalendarDays size={24} className="text-primary" />, name: "Additional Hour of Coverage", price: "$300/hr" },
    { icon: <MapPin size={24} className="text-primary" />, name: "Destination Wedding Coverage", price: "Custom Quote" },
    { icon: <Film size={24} className="text-primary" />, name: "Videography Services", price: "Starting at $1,500" },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
    }),
  };

  return (
    <div className="container mx-auto px-4 md:px-6 py-16">
      <SectionHeading 
        title="Our Wedding Photography Services"
        subtitle="We offer a range of packages designed to capture your love story beautifully. Each collection can be customized to fit your unique needs and vision."
      />

      <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            className="bg-card rounded-xl shadow-xl p-8 flex flex-col service-card"
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={cardVariants}
          >
            <div className="flex justify-center mb-6">{service.icon}</div>
            <h3 className="text-2xl font-semibold text-center mb-2">{service.title}</h3>
            <p className="text-3xl font-bold text-primary text-center mb-4">{service.price}</p>
            <p className="text-muted-foreground text-center mb-6 flex-grow">{service.description}</p>
            <ul className="space-y-2 mb-8">
              {service.features.map((feature) => (
                <li key={feature} className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
            <Button asChild className="w-full mt-auto bg-primary hover:bg-gray-800 hover:text-primary transition-colors duration-200">
              <Link to="/contact">Inquire Now</Link>
            </Button>
          </motion.div>
        ))}
      </div>

      <SectionHeading 
        title="Customize Your Experience"
        subtitle="Enhance your chosen package with our à la carte options."
        className="mt-24"
      />
      <div className="grid md:grid-cols-2 gap-6">
        {addOns.map((addOn, index) => (
          <motion.div
            key={addOn.name}
            className="bg-card rounded-lg shadow-lg p-6 flex items-center justify-between"
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={cardVariants}
          >
            <div className="flex items-center">
              <div className="mr-4">{addOn.icon}</div>
              <div>
                <h4 className="text-lg font-semibold">{addOn.name}</h4>
                <p className="text-muted-foreground">{addOn.price}</p>
              </div>
            </div>
            <Button variant="outline" size="sm" asChild className="border-primary text-black hover:bg-gray-700 hover:text-primary transition-all duration-200">
              <Link to="/contact">Learn More</Link>
            </Button>
          </motion.div>
        ))}
      </div>

      <motion.div 
        className="mt-20 text-center bg-secondary text-secondary-foreground p-10 rounded-lg"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <h3 className="text-2xl font-semibold mb-4">Ready to Plan Your Perfect Day?</h3>
        <p className="mb-6 max-w-lg mx-auto">
          We believe every wedding is unique. Contact us for a personalized consultation, and let's create a photography experience that's as special as your love story.
        </p>
        <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
          <Link to="/contact">Schedule a Consultation</Link>
        </Button>
      </motion.div>
    </div>
  );
};

export default ServicesPage;