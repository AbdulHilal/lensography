
import React, { useState, useEffect } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, Instagram, Facebook, Twitter, Phone as PhoneIcon, Mail as MailIcon } from 'lucide-react';

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


const MainLayout = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const headerLogoUrl = "https://storage.googleapis.com/hostinger-horizons-assets-prod/ec1b7c35-5d4d-4eb2-b90b-449879123854/df13fa9fc18aef50a8d47bccc2ad95ac.png";
  const footerLogoUrl = "https://storage.googleapis.com/hostinger-horizons-assets-prod/ec1b7c35-5d4d-4eb2-b90b-449879123854/54e5f88d8952cec9ebb22e29bf88b288.jpg";


  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-primary shadow-sm py-4"
      >
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
          <Link to="/" className="text-2xl md:text-3xl font-semibold tracking-tight">
          <div className="h-12 md:h-14 flex items-center overflow-visible ml-4 md:ml-0">
  <img
    src={headerLogoUrl}
    alt="Lensography Logo"
    className="h-full scale-[2.5] md:scale-[2.8]"
    style={{ transformOrigin: 'center', objectFit: 'contain' }}
  />
</div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`nav-link text-sm font-medium transition-colors ${
                  location.pathname === link.path ? 'text-primary-foreground' : 'text-muted-foreground hover:text-primary-foreground'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-primary-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-primary"
          >
            <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-base font-medium py-2 ${
                    location.pathname === link.path ? 'text-primary-foreground' : 'text-muted-foreground'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </header>

      <main className="flex-grow pt-20"> {/* Adjusted pt-20 to account for fixed header height, py-4 header means roughly 16+16+logoheight, so pt-20 or pt-24 is fine */}
        <Outlet />
      </main>

      <footer className="bg-secondary text-secondary-foreground py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <Link to="/">
                <img src={footerLogoUrl} alt="Lensography Logo" className="h-10" />
              </Link>
              <p className="mt-4 text-secondary-foreground/80 max-w-xs">
                Capturing your most precious moments with artistry and emotion.
              </p>
            </div>
            
            <div>
              <span className="font-medium text-lg">Quick Links</span>
              <div className="mt-4 flex flex-col space-y-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
            
            <div>
              <span className="font-medium text-lg">Connect With Us</span>
              <div className="mt-4 flex space-x-4">
                <a href="https://www.instagram.com/lensography.in" target="_blank" rel="noopener noreferrer" className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors" aria-label="Instagram">
                  <Instagram size={20} />
                </a>
                 <a href="https://wa.me/917306963591" target="_blank" rel="noopener noreferrer" className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors" aria-label="WhatsApp">
                  <WhatsAppIcon size={20} />
                </a>
                <a href="#" className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors" aria-label="Facebook">
                  <Facebook size={20} />
                </a>
                <a href="#" className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors" aria-label="Twitter">
                  <Twitter size={20} />
                </a>
              </div>
              <p className="mt-4 text-secondary-foreground/80">
                <a href="mailto:mohammedsuhailstonny@gmail.com" className="hover:text-secondary-foreground transition-colors flex items-center">
                  <MailIcon size={16} className="mr-2" /> mohammedsuhailstonny@gmail.com
                </a>
                <a href="tel:+917306963591" className="hover:text-secondary-foreground transition-colors flex items-center mt-1">
                  <PhoneIcon size={16} className="mr-2" /> +91 7306963591
                </a>
              </p>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-secondary-foreground/10 text-center text-secondary-foreground/60 text-sm">
            <p>© {new Date().getFullYear()} Lensography. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MainLayout;
