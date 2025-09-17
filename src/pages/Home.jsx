import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import ServiceCard from '../components/ServiceCard';
import ImageSlideshow from '../components/ImageSlideshow';

const Home = () => {
  const services = [
    {
      title: 'Hydraulic and Pneumatic Repairs and Supply',
      description: 'We possess profound proficiency in the repair and supply of hydraulic and pneumatic systems, ensuring optimal performance and reliable operations.',
      icon: '🔧',
      image: '/images/hydraulic - services.jpg',
      features: ['Hydraulic System Repairs', 'Pneumatic System Maintenance', 'Component Supply', 'Performance Optimization']
    },
    {
      title: 'Laser Alignment',
      description: 'Utilizing advanced laser alignment technology, we ensure precise alignment of mechanical components, mitigating operational issues and extending equipment lifespan.',
      icon: '📐',
      image: '/images/laser alignment - services.jpg',
      features: ['Precision Laser Alignment', 'Equipment Calibration', 'Mechanical Component Alignment', 'Operational Issue Mitigation']
    },
    {
      title: 'Precision Machining, Drilling, Milling',
      description: 'With state-of-the-art machining equipment, we offer precise machining, drilling, and milling services tailored to specific client requirements with unrivalled accuracy.',
      icon: '⚙️',
      image: '/images/precise machining - service.jpg',
      features: ['Precision Machining', 'Custom Drilling Services', 'Milling Operations', 'State-of-the-art Equipment']
    }
  ];

  return (
    <div className="min-h-screen">
      <Hero />
      
      {/* Services Preview Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Background Slideshow */}
        <div className="absolute inset-0 z-0">
          <ImageSlideshow 
            images={[
              '/images/bg-1.jpg',
              '/images/bg-2.jpg',
              '/images/bg-3.jpg',
              '/images/bg-4.jpg',
              '/images/bg-5.webp'
            ]}
            autoPlay={true}
            interval={8000}
            showDots={false}
            className="w-full h-full"
          />
            <div className="absolute inset-0 bg-slate-900 opacity-40"></div>
        </div>
        <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6" style={{
              textShadow: '4px 4px 8px rgba(0,0,0,0.9), 2px 2px 4px rgba(0,0,0,0.8), 0px 0px 30px rgba(0,0,0,0.9), 0px 0px 50px rgba(0,0,0,0.7)',
              filter: 'contrast(1.2) brightness(1.1)'
            }}>
              Our Engineering Services
            </h2>
            <p className="text-xl text-white font-bold max-w-4xl mx-auto leading-relaxed" style={{
              textShadow: '3px 3px 6px rgba(0,0,0,0.9), 1px 1px 3px rgba(0,0,0,0.8), 0px 0px 20px rgba(0,0,0,0.8), 0px 0px 40px rgba(0,0,0,0.6)',
              filter: 'contrast(1.15) brightness(1.05)'
            }}>
              Navigate your industrial journey with confidence. Rotax Engineering offers 
              a comprehensive range of engineering solutions designed to optimize your 
              operations and ensure efficient and reliable performance.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <ServiceCard {...service} />
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center"
          >
            <Link
              to="/services"
                className="inline-block bg-gradient-to-r from-accent-orange to-accent-yellow hover:from-accent-orange-light hover:to-accent-yellow-light text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 shadow-corporate hover:shadow-corporate-lg transform hover:-translate-y-1"
            >
              View All Services
            </Link>
          </motion.div>
        </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Background Slideshow */}
        <div className="absolute inset-0 z-0">
          <ImageSlideshow 
            images={[
              '/images/bg-2.jpg',
              '/images/bg-3.jpg',
              '/images/bg-4.jpg',
              '/images/bg-5.webp',
              '/images/bg-1.jpg'
            ]}
            autoPlay={true}
            interval={9000}
            showDots={false}
            className="w-full h-full"
          />
            <div className="absolute inset-0 bg-slate-900 opacity-35"></div>
        </div>
        <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-8" style={{
                textShadow: '4px 4px 8px rgba(0,0,0,0.9), 2px 2px 4px rgba(0,0,0,0.8), 0px 0px 30px rgba(0,0,0,0.9), 0px 0px 50px rgba(0,0,0,0.7)',
                filter: 'contrast(1.2) brightness(1.1)'
              }}>
                Engineering Excellence in Walvis Bay
              </h2>
              <p className="text-lg text-white font-semibold mb-6 leading-relaxed" style={{
                textShadow: '3px 3px 6px rgba(0,0,0,0.9), 1px 1px 3px rgba(0,0,0,0.8), 0px 0px 20px rgba(0,0,0,0.8), 0px 0px 40px rgba(0,0,0,0.6)',
                filter: 'contrast(1.15) brightness(1.05)'
              }}>
                Based in the heart of Namibia's industrial hub, Rotax Engineering brings decades of 
                combined experience in mechanical, marine, and industrial engineering to serve the unique 
                needs of our clients.
              </p>
              <p className="text-lg text-white font-semibold mb-8 leading-relaxed" style={{
                textShadow: '3px 3px 6px rgba(0,0,0,0.9), 1px 1px 3px rgba(0,0,0,0.8), 0px 0px 20px rgba(0,0,0,0.8), 0px 0px 40px rgba(0,0,0,0.6)',
                filter: 'contrast(1.15) brightness(1.05)'
              }}>
                Our team of qualified engineers and technicians is committed to delivering innovative, 
                cost-effective solutions that meet the highest standards of quality and safety.
              </p>
              <Link
                to="/about"
                className="inline-block bg-gradient-to-r from-accent-yellow to-accent-orange hover:from-accent-yellow-light hover:to-accent-orange-light text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 shadow-corporate hover:shadow-corporate-lg transform hover:-translate-y-1"
              >
                Learn More About Us
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg p-8 text-gray-100"
            >
              <h3 className="text-2xl font-bold mb-6">Why Choose Rotax Engineering?</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-white rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <span>Local expertise with international standards</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-accent-yellow rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <span>Comprehensive engineering solutions under one roof</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-white rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <span>Committed to safety and environmental responsibility</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-accent-yellow rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <span>Proven track record in complex projects</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
