import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label'; 
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Phone } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmitToWhatsApp = (e) => {
    e.preventDefault();
    const { name, email, phone, date, message } = formData;
    const whatsappNumber = "917306963591"; 

    let inquiryMessage = `New Inquiry from Lensography Website:\n\n`;
    inquiryMessage += `Name: ${name || 'Not provided'}\n`;
    inquiryMessage += `Email: ${email || 'Not provided'}\n`;
    inquiryMessage += `Phone: ${phone || 'Not provided'}\n`;
    inquiryMessage += `Preferred Date: ${date || 'Not specified'}\n`;
    inquiryMessage += `Message: ${message || 'No specific message.'}\n\n`;
    inquiryMessage += `Please get in touch with them.`;

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(inquiryMessage)}`;
    
    window.open(whatsappUrl, '_blank');
    
    setFormData({
      name: '',
      email: '',
      phone: '',
      date: '',
      message: '',
    });
  };

  return (
    <motion.form 
      onSubmit={handleSubmitToWhatsApp}
      className="space-y-6"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="name">Your Name</Label>
          <Input
            id="name"
            name="name"
            type="text"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="John Doe"
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="email">Email Address</Label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="john@example.com"
          />
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="phone">Phone Number</Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+1 (555) 123-4567"
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="date">Event Date (if known)</Label>
          <Input
            id="date"
            name="date"
            type="date"
            value={formData.date}
            onChange={handleChange}
          />
        </div>
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="message">Your Message</Label>
        <Textarea
          id="message"
          name="message"
          required
          value={formData.message}
          onChange={handleChange}
          rows={5}
          placeholder="Tell us about your event or any questions you have..."
        />
      </div>
      
      <div>
        <Button type="submit" className="w-full bg-green-500 hover:bg-green-600 text-white">
          <Phone size={18} className="mr-2"/> Send Inquiry via WhatsApp
        </Button>
      </div>
    </motion.form>
  );
};

export default ContactForm;