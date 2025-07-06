import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '@/components/ui/section-heading';
import ContactForm from '@/components/ui/contact-form';
import { Mail, Phone, MapPin, Instagram } from 'lucide-react';

const WhatsAppIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    <path d="M19.07 4.93A10 10 0 1 1 4.93 19.07" transform="scale(0.8) translate(3,3)" />
  </svg>
);

const ContactPage = () => {
  const contactDetails = [
    { icon: <Mail size={24} className="text-primary" />, title: "Email Us", content: "mohammedsuhailstonny@gmail.com", href: "mailto:mohammedsuhailstonny@gmail.com" },
    { icon: <Phone size={24} className="text-primary" />, title: "Call Us", content: "+91 73069 63591", href: "tel:+917306963591" },
    { icon: <WhatsAppIcon size={24} className="text-primary" />, title: "WhatsApp", content: "+91 73069 63591", href: "https://wa.me/917306963591" },
    { icon: <Instagram size={24} className="text-primary" />, title: "Instagram", content: "@lensography.in", href: "https://www.instagram.com/lensography.in" },
    { icon: <MapPin size={24} className="text-primary" />, title: "Our Studio", content: "Based in Kerala, India (Available for travel)" },
  ];

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.2, duration: 0.5, ease: "easeOut" },
    }),
  };

  return (
    <motion.div 
      className="container mx-auto px-4 md:px-6 py-16"
      initial="hidden"
      animate="visible"
      variants={sectionVariants}
    >
      <SectionHeading 
        title="Get In Touch With Us"
        subtitle="We're excited to hear about your wedding plans! Fill out the form below or use our contact details to reach out. Let's create something beautiful together."
      />

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <motion.div 
          className="bg-card p-8 md:p-10 rounded-xl shadow-xl"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-2xl font-semibold mb-6">Send Us a Message</h2>
          <ContactForm />
        </motion.div>

        {/* Contact Details */}
        <motion.div 
          className="space-y-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div>
            <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
            <div className="space-y-6">
              {contactDetails.map((detail, index) => (
                <motion.div 
                  key={detail.title} 
                  className="flex items-start"
                  custom={index}
                  initial="hidden"
                  animate="visible"
                  variants={itemVariants}
                >
                  <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                    {detail.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">{detail.title}</h3>
                    {detail.href ? (
                      <a href={detail.href} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                        {detail.content}
                      </a>
                    ) : (
                      <p className="text-muted-foreground">{detail.content}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4 mt-10">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium">How far in advance should we book?</h3>
                <p className="text-muted-foreground text-sm">We recommend booking 6-12 months in advance, especially for popular dates. However, don't hesitate to reach out for last-minute availability!</p>
              </div>
              <div>
                <h3 className="font-medium">Do you travel for weddings?</h3>
                <p className="text-muted-foreground text-sm">Absolutely! We love destination weddings and are available for travel worldwide. Travel fees may apply depending on the location.</p>
              </div>
              <div>
                <h3 className="font-medium">When will we receive our photos?</h3>
                <p className="text-muted-foreground text-sm">You'll receive a sneak peek gallery within a week, and your full edited gallery within 6-8 weeks after your wedding day.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Map Section - Placeholder */}
      <motion.div 
        className="mt-16"
        initial={{ opacity: 0, y:30 }}
        animate={{ opacity: 1, y:0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <h2 className="text-2xl font-semibold mb-6 text-center">Our Location</h2>
        <div className="bg-muted rounded-lg h-80 flex items-center justify-center text-muted-foreground shadow-md">
          <p>We are based in Kerala, India, and available for weddings globally. Map integration coming soon.</p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ContactPage;