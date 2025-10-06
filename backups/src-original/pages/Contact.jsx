import React from 'react';
import { motion } from 'framer-motion';
import ContactForm from '../components/ContactForm';
import ImageSlideshow from '../components/ImageSlideshow';

const Contact = () => {
  const contactInfo = [
    {
      title: 'Office Location',
      details: ['Walvis Bay', 'Langer Heinrich Crescent Road', 'Saphire Complex Unit 8'],
      icon: '📍'
    },
    {
      title: 'Manager',
      details: ['M. Ihulu', 'Business Hours: 8:00 - 17:00'],
      icon: '👤'
    },
    {
      title: 'Phone',
      details: ['+264814884499', '+264816028923'],
      icon: '📞'
    },
    {
      title: 'Email',
      details: ['sales.rotaxengineering@gmail.com'],
      icon: '✉️'
    }
  ];

  const officeHours = [
    { day: 'Monday - Friday', hours: '8:00 AM - 5:00 PM' },
    { day: 'Saturday', hours: '9:00 AM - 1:00 PM' },
    { day: 'Sunday', hours: 'Emergency Only' },
    { day: 'Public Holidays', hours: 'Emergency Only' }
  ];

  return (
    <div className="min-h-screen py-16 relative overflow-hidden">
      {/* Background Slideshow */}
      <div className="fixed inset-0 z-0">
        <ImageSlideshow 
          images={[
            '/images/bg-2.jpg',
            '/images/bg-3.jpg',
            '/images/bg-4.jpg',
            '/images/bg-5.webp',
            '/images/bg-1.jpg'
          ]}
          autoPlay={true}
          interval={6500}
          showDots={false}
          className="w-full h-full"
        />
        <div className="absolute inset-0 bg-slate-900 opacity-40"></div>
      </div>
      <div className="relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-black text-gray-100 mb-6" style={{textShadow: '4px 4px 15px rgba(0,0,0,0.8), 0px 0px 25px rgba(0,0,0,0.7)'}}>
            Contact Rotax Engineering
          </h1>
          <p className="text-xl text-gray-200 font-semibold max-w-3xl mx-auto leading-relaxed mb-4" style={{textShadow: '2px 2px 8px rgba(0,0,0,0.8), 0px 0px 18px rgba(0,0,0,0.6)'}}>
            Ready to discuss your engineering project? Get in touch with our team of experts. 
            We're here to help bring your vision to life.
          </p>
          <p className="text-lg bg-gradient-to-r from-accent-orange to-accent-yellow bg-clip-text text-transparent font-semibold max-w-3xl mx-auto drop-shadow-md">
            Dedicated to driving progress and prosperity, one project at a time.
          </p>
        </motion.div>

        {/* Contact Info Grid */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg p-6 text-center border border-gray-100"
              >
                <div className="text-4xl mb-4">{info.icon}</div>
                <h3 className="text-xl font-semibold text-navy mb-3">{info.title}</h3>
                {info.details.map((detail, idx) => (
                  <p key={idx} className="text-gray-600 mb-1">{detail}</p>
                ))}
              </motion.div>
            ))}
          </div>
        </section>

        {/* Main Contact Section */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <ContactForm />
            </motion.div>

            {/* Additional Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              {/* Office Hours */}
              <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-100">
                <h3 className="text-2xl font-bold text-navy mb-6">Office Hours</h3>
                <div className="space-y-4">
                  {officeHours.map((schedule, index) => (
                    <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
                      <span className="font-medium text-gray-700">{schedule.day}</span>
                      <span className="text-gray-600">{schedule.hours}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Service Areas */}
              <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg p-6 text-gray-100">
                <h3 className="text-2xl font-bold mb-6">Service Areas</h3>
                <p className="mb-4 leading-relaxed">
                  While based in Walvis Bay, we serve clients throughout Namibia and the broader SADC region.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-accent-orange rounded-full mr-3"></div>
                    <span>Walvis Bay & Erongo Region</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-accent-yellow rounded-full mr-3"></div>
                    <span>Windhoek & Central Namibia</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-accent-orange rounded-full mr-3"></div>
                    <span>Northern Mining Regions</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-accent-yellow rounded-full mr-3"></div>
                    <span>Southern Namibia</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-accent-orange rounded-full mr-3"></div>
                    <span>Regional SADC Projects</span>
                  </li>
                </ul>
              </div>

              {/* Emergency Services */}
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
                <h3 className="text-2xl font-bold text-orange-accent mb-4">Emergency Services</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  We provide 24/7 emergency engineering support for critical infrastructure and industrial operations.
                </p>
                <div className="bg-white rounded-lg p-4 border border-orange-200">
                  <p className="font-semibold text-gray-800">Emergency Hotline:</p>
                  <p className="text-xl font-bold text-orange-accent">+264814884499</p>
                  <p className="text-sm text-gray-600 mt-2">Available 24/7 for urgent engineering support</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Interactive Map Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="bg-slate-900 text-gray-100 p-6">
                     <h3 className="text-3xl md:text-4xl font-bold mb-2">Find Us in Walvis Bay</h3>
              <p className="text-gray-200">
                Langer Heinrich Crescent Road, Saphire Complex Unit 8, Walvis Bay, Namibia
              </p>
            </div>
            
            {/* Google Maps Embed */}
            <div className="relative h-96 w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3653.2847856789012!2d14.5238189697266!3d-22.9543380737305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1c760b5e8f9a1b2c%3A0x3d4e5f6a7b8c9d0e!2sRotax%20Engineering%20CC!5e0!3m2!1sen!2sna!4v1699123456789!5m2!1sen!2sna&q=-22.9543380737305,14.5238189697266"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Rotax Engineering CC - Exact Location at Saphire Complex Unit 8"
                className="w-full h-full"
              />
            </div>
            
            {/* Map Footer with Directions */}
            <div className="bg-gray-50 p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-orange-accent text-2xl mb-2">📍</div>
                  <h4 className="font-semibold text-gray-900">Address</h4>
                  <p className="text-sm text-gray-600">Langer Heinrich Crescent Road</p>
                  <p className="text-sm text-gray-600">Saphire Complex Unit 8</p>
                  <p className="text-sm text-gray-600">Walvis Bay, Namibia</p>
                </div>
                
                <div className="text-center">
                  <div className="text-orange-accent text-2xl mb-2">🚗</div>
                  <h4 className="font-semibold text-gray-900">Directions</h4>
                  <a 
                    href="https://www.google.com/maps?q=-22.9543380737305,14.5238189697266"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-2 bg-orange-accent hover:bg-orange-light text-white px-4 py-2 rounded-lg text-sm transition-colors duration-300"
                  >
                    Get Directions
                  </a>
                </div>
                
                <div className="text-center">
                  <div className="text-orange-accent text-2xl mb-2">🕒</div>
                  <h4 className="font-semibold text-gray-900">Business Hours</h4>
                  <p className="text-sm text-gray-600">Monday - Friday: 8:00 - 17:00</p>
                  <p className="text-sm text-gray-600">Saturday: 9:00 - 13:00</p>
                  <p className="text-sm text-gray-600">Sunday: Emergency Only</p>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Project Gallery */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="text-center mb-8">
                   <h3 className="text-3xl md:text-4xl font-bold text-gray-100 mb-4" style={{textShadow: '2px 2px 6px rgba(0,0,0,0.8)'}}>See Our Work</h3>
            <p className="text-gray-300">
              Take a look at some of our recent engineering projects and solutions
            </p>
          </div>
          <div className="h-64 rounded-lg overflow-hidden shadow-xl">
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
              interval={4500}
              showDots={true}
              className="h-full"
            />
          </div>
        </motion.section>

        {/* Additional Contact Options */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="bg-navy-light rounded-lg p-8">
                   <h3 className="text-3xl md:text-4xl font-bold text-gray-100 mb-4" style={{textShadow: '2px 2px 6px rgba(0,0,0,0.8)'}}>Ready to Start Your Project?</h3>
            <p className="text-gray-300 mb-6">
              Contact us today to discuss your engineering needs and get a personalized solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-accent-orange to-accent-yellow hover:from-accent-orange-light hover:to-accent-yellow-light text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300">
                Request a Quote
              </button>
              <button className="border-2 border-accent-yellow hover:bg-gradient-to-r hover:from-accent-orange hover:to-accent-yellow hover:text-white text-accent-orange font-semibold py-3 px-6 rounded-lg transition-all duration-300">
                Schedule a Consultation
              </button>
            </div>
          </div>
        </motion.section>
      </div>
      </div>
    </div>
  );
};

export default Contact;
