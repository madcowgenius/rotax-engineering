import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ImageSlideshow from './ImageSlideshow';

const Hero = () => {
  const slideshowImages = [
    '/images/bg-0.jpg',
    '/images/bg-1.jpg',
    '/images/bg-2.jpg',
    '/images/bg-3.jpg',
    '/images/bg-4.jpg',
    '/images/bg-5.webp'
  ];

  return (
      <section className="relative text-white min-h-screen flex items-center overflow-hidden py-20">
      {/* Static Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/bg-0.jpg"
          alt="Rotax Engineering Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      
      {/* Content Overlay */}
      <div className="relative z-10 w-full max-w-6xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
                 <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                   Engineering Excellence in
                   <span className="bg-gradient-to-r from-accent-orange to-accent-yellow bg-clip-text text-transparent block mt-2">Walvis Bay</span>
                 </h1>
          
                 <motion.p
                   initial={{ opacity: 0, y: 30 }}
                   animate={{ opacity: 1, y: 0 }}
                   transition={{ duration: 0.8, delay: 0.2 }}
                   className="text-lg md:text-xl mb-6 text-white/90 max-w-3xl mx-auto leading-relaxed"
                 >
                   Specialized hydraulic, pneumatic, laser alignment, and precision machining services for Namibian industry
                 </motion.p>

                 <motion.p
                   initial={{ opacity: 0, y: 30 }}
                   animate={{ opacity: 1, y: 0 }}
                   transition={{ duration: 0.8, delay: 0.3 }}
                   className="text-base md:text-lg mb-8 bg-gradient-to-r from-accent-orange to-accent-yellow bg-clip-text text-transparent font-semibold max-w-3xl mx-auto"
                 >
                   Dedicated to driving progress and prosperity, one project at a time.
                 </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
                   <Link
                     to="/services"
                     className="bg-gradient-to-r from-accent-orange to-accent-yellow hover:from-accent-orange-light hover:to-accent-yellow-light text-white font-semibold py-4 px-10 rounded-lg transition-all duration-300 shadow-corporate-lg hover:shadow-xl transform hover:-translate-y-1"
                   >
                     Our Services
                   </Link>
                   <Link
                     to="/contact"
                     className="border-2 border-white hover:bg-white hover:text-accent-orange text-white bg-white/10 backdrop-blur-sm font-semibold py-4 px-10 rounded-lg transition-all duration-300 shadow-corporate-lg hover:shadow-xl transform hover:-translate-y-1"
                   >
                     Get In Touch
                   </Link>
          </motion.div>
        </motion.div>

        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-orange-accent to-accent-yellow opacity-20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-accent-yellow to-orange-light opacity-15 rounded-full blur-2xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-orange-accent via-accent-yellow to-orange-light opacity-5 rounded-full blur-3xl"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
