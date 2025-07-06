import React from 'react';
import HeroSection from '@/components/home/HeroSection';
import AboutSnippet from '@/components/home/AboutSnippet';
import MiniGallery from '@/components/home/MiniGallery';
import ServicesOverview from '@/components/home/ServicesOverview';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import CallToAction from '@/components/home/CallToAction';

const HomePage = () => {
  return (
    <div className="space-y-24 md:space-y-32">
      <HeroSection />
      <AboutSnippet />
      <MiniGallery />
      <ServicesOverview />
      <TestimonialsSection />
      <CallToAction />
    </div>
  );
};

export default HomePage;