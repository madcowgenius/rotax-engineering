import React from 'react';
import { motion } from 'framer-motion';
import ImageSlideshow from '../components/ImageSlideshow';

const About = () => {
  const values = [
    {
      title: 'Decades of Experience',
      description: 'Over five decades of proven excellence in hydraulic, pneumatic, and precision engineering services.',
      icon: (
        <svg className="w-16 h-16 text-navy" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
        </svg>
      )
    },
    {
      title: 'Comprehensive Services',
      description: 'Full-spectrum engineering solutions from hydraulic repairs to precision machining and laser alignment.',
      icon: (
        <svg className="w-16 h-16 text-navy" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      )
    },
    {
      title: 'Quality You Can Trust',
      description: 'Unwavering commitment to excellence with certified processes and reliable service delivery.',
      icon: (
        <svg className="w-16 h-16 text-navy" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"/>
        </svg>
      )
    },
    {
      title: 'Client-Centric Approach',
      description: 'Personalized solutions tailored to meet specific industrial challenges and operational requirements.',
      icon: (
        <svg className="w-16 h-16 text-navy" fill="currentColor" viewBox="0 0 24 24">
          <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63A1.5 1.5 0 0 0 18.54 8H16c-.8 0-1.54.37-2 1l-3 4v7h2v7h3v-7h2v7h2z"/>
        </svg>
      )
    }
  ];

  const expertise = [
    {
      title: 'Unwavering Expertise',
      description: 'Our certified engineers, technicians, and welders bring deep industrial expertise and a commitment to exceptional quality.',
      icon: '🔧'
    },
    {
      title: 'Swift and Reliable Service',
      description: 'Minimize downtime, maximize efficiency. Clear communication keeps you informed throughout every project.',
      icon: '⚡'
    }
  ];

  return (
    <div className="min-h-screen">

      {/* Hero Section with Background */}
      <section className="relative text-gray-100 py-24 min-h-[70vh] flex items-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/bg-0.jpg"
            alt="Engineering Background"
            className="w-full h-full object-cover scale-105 hover:scale-100 transition-transform duration-[10s]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/70 to-slate-900/80"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-accent-orange/5 via-transparent to-accent-yellow/5"></div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-r from-accent-orange/10 to-accent-yellow/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-r from-accent-yellow/8 to-accent-orange/8 rounded-full blur-2xl"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-block"
            >
              <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-white/95 tracking-wide" 
                  style={{textShadow: '2px 2px 8px rgba(0,0,0,0.8)'}}>
                What We Are About
              </h2>
              <div className="relative mx-auto mb-10">
                <div className="w-40 h-1 bg-gradient-to-r from-accent-orange via-accent-yellow to-accent-orange mx-auto rounded-full"></div>
                <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-3 bg-gradient-to-b from-accent-yellow to-accent-orange rounded-full"></div>
              </div>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="text-2xl md:text-4xl lg:text-5xl font-semibold mb-10 leading-relaxed max-w-4xl mx-auto text-white"
              style={{textShadow: '2px 2px 6px rgba(0,0,0,0.8)'}}
            >
              Dedicated to driving progress and prosperity, one project at a time.
            </motion.h1>
          </motion.div>
        </div>
      </section>

      {/* Main Content Section */}
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
            interval={10000}
            showDots={false}
            className="w-full h-full"
          />
            <div className="absolute inset-0 bg-slate-900 opacity-35"></div>
        </div>
        <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left Column - About Us Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="bg-gradient-to-r from-accent-orange to-accent-yellow bg-clip-text text-transparent text-lg font-semibold mb-4">About Us</h2>
              <h3 className="text-5xl md:text-6xl font-black text-gray-100 mb-8 leading-tight" style={{textShadow: '3px 3px 10px rgba(0,0,0,0.8), 0px 0px 20px rgba(0,0,0,0.7)'}}>
                Experience and Expertise:<br />
                The Hallmarks of Rotax<br />
                Engineering
              </h3>
              <div className="w-16 h-1 bg-gradient-to-r from-accent-orange to-accent-yellow mb-8"></div>
              
              <p className="text-lg text-gray-200 font-medium mb-6 leading-relaxed" style={{textShadow: '2px 2px 6px rgba(0,0,0,0.8), 0px 0px 15px rgba(0,0,0,0.6)'}}>
                Established in 2018 by Mr. Matheus Ihulu, Rotax Engineering CC stands as a cornerstone of Namibia's 
                engineering landscape, founded by a team of proficient Namibian engineering professionals in adherence to the 
                laws of the Republic of Namibia. As a legally incorporated close corporation, Rotax Engineering CC is dedicated to 
                the pursuit of engineering excellence.
              </p>
              
              <p className="text-lg text-gray-200 font-medium mb-6 leading-relaxed" style={{textShadow: '2px 2px 6px rgba(0,0,0,0.8), 0px 0px 15px rgba(0,0,0,0.6)'}}>
                Rotax Engineering CC was conceived with the vision of fostering organized and collective participation in formal 
                business ventures among its founders, associates, and employees. Through active engagement in the nation's 
                primary economic sectors, the company is committed to driving forward Namibia's overall development.
              </p>
              
              <p className="text-lg text-gray-200 font-medium mb-12 leading-relaxed" style={{textShadow: '2px 2px 6px rgba(0,0,0,0.8), 0px 0px 15px rgba(0,0,0,0.6)'}}>
                Operating at the intersection of innovation and precision, Rotax Engineering CC embodies a spirit of ingenuity and 
                craftsmanship in every endeavor. With a diverse portfolio spanning various engineering disciplines, the company 
                has earned a reputation for delivering solutions of the highest quality, tailored to meet the unique needs of 
                clients across Namibia and beyond.
              </p>

              {/* Expertise Cards */}
              <div className="space-y-8">
                {expertise.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.2 }}
                    className="border border-gray-200 rounded-lg p-6"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="text-3xl">{item.icon}</div>
                      <div>
                               <h4 className="text-xl font-bold text-gray-100 mb-3" style={{textShadow: '2px 2px 6px rgba(0,0,0,0.9)'}}>{item.title}</h4>
                               <p className="text-gray-200 font-medium leading-relaxed" style={{textShadow: '2px 2px 6px rgba(0,0,0,0.8)'}}>{item.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right Column - Project Gallery */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
                       <div className="bg-slate-800/80 backdrop-blur-sm rounded-lg overflow-hidden shadow-2xl border border-gray-600">
                <div className="h-80 w-full">
                  <ImageSlideshow 
                    images={[
                     '/images/bg-0.jpg',
                     '/images/bg-1.jpg',
                     '/images/bg-2.jpg',
                     '/images/bg-3.jpg',
                     '/images/bg-4.jpg',
                     '/images/bg-5.webp'
                    ]}
                    autoPlay={true}
                    interval={4000}
                    showDots={true}
                    className="h-full"
                  />
                </div>
                <div className="bg-slate-900 text-gray-100 font-bold p-6 text-center">
                  <h4 className="text-2xl font-bold mb-2">OUR PROJECTS IN ACTION</h4>
                  <p className="text-gray-200 font-medium">Real Engineering Solutions</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        </div>
      </section>

      {/* Conclusion Section */}
      <section className="relative bg-gray-50 py-20 overflow-hidden">
        {/* Background Slideshow */}
        <div className="absolute inset-0 z-0">
          <ImageSlideshow 
            images={[
              '/images/bg-3.jpg',
              '/images/bg-4.jpg',
              '/images/bg-5.webp',
              '/images/bg-1.jpg',
              '/images/bg-2.jpg'
            ]}
            autoPlay={true}
            interval={12000}
            showDots={false}
            className="w-full h-full"
          />
            <div className="absolute inset-0 bg-slate-900 opacity-30"></div>
        </div>
        <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
                   <h2 className="text-5xl md:text-6xl font-black text-gray-100 mb-8" style={{textShadow: '3px 3px 10px rgba(0,0,0,0.8), 0px 0px 20px rgba(0,0,0,0.7)'}}>CONCLUSION</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-accent-orange to-accent-yellow mx-auto mb-12"></div>
          </motion.div>
          
          <div className="max-w-4xl mx-auto text-lg text-gray-200 font-medium leading-relaxed space-y-6" style={{textShadow: '2px 2px 6px rgba(0,0,0,0.8), 0px 0px 15px rgba(0,0,0,0.6)'}}>
            <p>
              Rotax Engineering Close Corporation is the perfect blend of technical expertise and extensive experience in 
              engineering project management. Our team of dedicated professionals is steadfast and committed to achieving 
              excellence while maintaining strong customer relations with all stakeholders.
            </p>
            
            <p>
              By harnessing the skills of Namibia's most talented young professionals, we ensure the delivery of quality services in a 
              timely manner, contributing to both national development and youth empowerment.
            </p>
            
            <p>
              We are firmly convinced that our envisioned business activities nationwide promises in terms of commercial 
              viability, but we also make substantial contributions to the overall development of our country. Through the creation 
              of employment opportunities, improvement of social welfare, and enhancement of the GDP, we aim to leave a 
              lasting and positive impact on Namibia's socioeconomic landscape.
            </p>
            
            <p>
              With confidence, we present our profile as an empowerment firm to any prospective client. We invite 
              you to consider leveraging our services, confident in our ability to exceed your expectations and contribute 
              meaningfully to your projects' success.
            </p>
            
            <p className="text-xl font-semibold bg-gradient-to-r from-accent-orange to-accent-yellow bg-clip-text text-transparent" style={{textShadow: '2px 2px 6px rgba(0,0,0,0.8)'}}>
              At Rotax Engineering Close Corporations, we are dedicated to driving progress and prosperity, one project at a time.
            </p>
          </div>
        </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="relative bg-gray-100 py-16 overflow-hidden">
        {/* Background Slideshow */}
        <div className="absolute inset-0 z-0">
          <ImageSlideshow 
            images={[
              '/images/bg-4.jpg',
              '/images/bg-5.webp',
              '/images/bg-1.jpg',
              '/images/bg-2.jpg',
              '/images/bg-3.jpg'
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
            <h2 className="text-3xl font-semibold text-white mb-6" style={{textShadow: '2px 2px 6px rgba(0,0,0,0.8)'}}>Located in Walvis Bay, Namibia</h2>
                   <p className="text-lg text-gray-200 font-medium max-w-3xl mx-auto leading-relaxed mb-8" style={{textShadow: '2px 2px 6px rgba(0,0,0,0.8), 0px 0px 15px rgba(0,0,0,0.6)'}}>
              Strategically positioned in Namibia's premier port city at Langer Heinrich Crescent Road, 
              Saphire Complex Unit 8. We serve clients across the region with easy access to both local 
              industries and international shipping routes.
            </p>
          </motion.div>
          
          {/* Mini Map */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-64 w-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3653.2847856789012!2d14.5238189697266!3d-22.9543380737305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1c760b5e8f9a1b2c%3A0x3d4e5f6a7b8c9d0e!2sRotax%20Engineering%20CC!5e0!3m2!1sen!2sna!4v1699123456789!5m2!1sen!2sna&q=-22.9543380737305,14.5238189697266"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Rotax Engineering CC - Exact Location Overview"
                  className="w-full h-full"
                />
              </div>
              <div className="p-4 bg-slate-900 text-gray-100 font-bold text-center">
                <p className="font-semibold">Langer Heinrich Crescent Road, Saphire Complex Unit 8</p>
                <p className="text-gray-200 font-medium text-sm">Walvis Bay, Erongo Region, Namibia</p>
              </div>
            </div>
          </motion.div>
        </div>
        </div>
      </section>
    </div>
  );
};

export default About;
