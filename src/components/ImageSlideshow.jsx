import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ImageSlideshow = ({ images, autoPlay = true, interval = 5000, showDots = true, showArrows = false, className = "" }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Debug: Log images to console
  console.log('Slideshow images:', images);

  useEffect(() => {
    if (!autoPlay || !images || images.length === 0) return;

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, interval);

    return () => clearInterval(timer);
  }, [autoPlay, interval, images.length]);

  // If no images, return fallback
  if (!images || images.length === 0) {
    return <div className={`bg-hero-dark ${className}`}>No images available</div>;
  }

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
  };

  const goToPrev = () => {
    setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  };

  return (
    <div className={`relative w-full h-full overflow-hidden ${className}`}>
      {/* Main slideshow container */}
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2 }}
            className="absolute inset-0"
          >
            <img
              src={images[currentIndex]}
              alt={`Rotax Engineering Slideshow ${currentIndex + 1}`}
              className="w-full h-full object-cover"
              onError={(e) => {
                console.error('Image failed to load:', images[currentIndex]);
                e.target.style.display = 'none';
              }}
              onLoad={() => console.log('Image loaded:', images[currentIndex])}
            />
            {/* Overlay for better text readability */}
            <div className="absolute inset-0 bg-black opacity-50"></div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation arrows */}
      {showArrows && (
        <>
          <button
            onClick={goToPrev}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-navy-darker bg-opacity-70 hover:bg-opacity-90 text-white p-3 rounded-full transition-all duration-300 z-10"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-navy-darker bg-opacity-70 hover:bg-opacity-90 text-white p-3 rounded-full transition-all duration-300 z-10"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </>
      )}

      {/* Dot indicators */}
      {showDots && (
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3 z-10">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-orange-accent scale-125' 
                  : 'bg-white bg-opacity-50 hover:bg-opacity-80'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ImageSlideshow;
