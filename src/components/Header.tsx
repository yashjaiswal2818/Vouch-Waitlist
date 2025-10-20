import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@heroui/react';
import { ArrowUp } from 'lucide-react';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      setShowBackToTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
          ? 'bg-white/80 backdrop-blur-md shadow-lg'
          : 'bg-white shadow-sm'
          }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <motion.div
            className="font-bold text-lg sm:text-xl text-gray-900"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            Vouch
          </motion.div>

          <nav className="flex items-center gap-3 sm:gap-6">
            <motion.button
              onClick={() => scrollToSection('journey')}
              className="text-gray-600 hover:text-gray-900 transition-colors text-xs sm:text-sm font-medium relative group hidden sm:block"
              whileHover={{ y: -1 }}
            >
              Our Journey
              <motion.div
                className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"
                initial={{ width: 0 }}
                whileHover={{ width: "100%" }}
              />
            </motion.button>

            <Button
              onClick={() => scrollToSection('waitlist')}
              className="btn-primary hover-lift hover-glow text-xs sm:text-sm px-3 sm:px-4"
              size="sm"
            >
              <span className="hidden sm:inline">Request Access</span>
              <span className="sm:hidden">Join</span>
            </Button>
          </nav>
        </div>
      </motion.header>

      {/* Back to top button */}
      <motion.button
        onClick={scrollToTop}
        className={`fixed bottom-4 right-4 sm:bottom-8 sm:right-8 z-40 w-10 h-10 sm:w-12 sm:h-12 bg-blue-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-blue-700 ${showBackToTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
          }`}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <ArrowUp className="w-4 h-4 sm:w-5 sm:h-5 mx-auto" />
      </motion.button>
    </>
  );
};

export default Header;