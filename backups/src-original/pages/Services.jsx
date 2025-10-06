import React from 'react';
import { motion } from 'framer-motion';
import ServiceCard from '../components/ServiceCard';
import ImageSlideshow from '../components/ImageSlideshow';

const Services = () => {
  const services = [
    {
      title: 'Hydraulic and Pneumatic Repairs and Supply',
      description: 'We possess profound proficiency in the repair and supply of hydraulic and pneumatic systems, ensuring optimal performance and reliable operation.',
      icon: '🔧',
      image: '/images/hydraulic - services.jpg',
      features: [
        'Hydraulic System Diagnostics & Repair',
        'Pneumatic System Maintenance',
        'Component Supply & Replacement',
        'System Performance Optimization',
        'Pressure Testing & Calibration',
        'Emergency Repair Services'
      ]
    },
    {
      title: 'Laser Alignment',
      description: 'Utilizing advanced laser alignment technology, we ensure precise alignment of mechanical components, mitigating operational issues and extending equipment lifespan.',
      icon: '📐',
      image: '/images/laser alignment - services.jpg',
      features: [
        'Precision Laser Alignment',
        'Shaft Alignment Services',
        'Belt & Pulley Alignment',
        'Equipment Calibration',
        'Vibration Analysis',
        'Operational Issue Mitigation'
      ]
    },
    {
      title: 'Precision Machining, Drilling, Milling',
      description: 'With state-of-the-art machining equipment, we offer precise machining, drilling, and milling services tailored to specific client requirements with unrivalled accuracy.',
      icon: '⚙️',
      image: '/images/precise machining - service.jpg',
      features: [
        'CNC Precision Machining',
        'Custom Drilling Operations',
        'Precision Milling Services',
        'Component Manufacturing',
        'Prototype Development',
        'Quality Control & Inspection'
      ]
    },
    {
      title: 'Supply of Pipes and Fittings',
      description: 'We provide a comprehensive selection of top-quality pipes and fittings, ensuring seamless integration within industrial systems for reliable fluid transportation.',
      icon: '🔗',
      image: '/images/supply of pipes and fittings - services.webp',
      features: [
        'Industrial Pipe Supply',
        'Quality Fittings Selection',
        'System Integration Support',
        'Custom Piping Solutions',
        'Material Specification',
        'Installation Guidance'
      ]
    },
    {
      title: 'Rehabilitation and Maintenance of Processing Plant',
      description: 'Our expertise extends to the rehabilitation and maintenance of conveyor, pumps guaranteeing optimal functionality and sustainability for efficient, resourceful mining.',
      icon: '🏭',
      image: '/images/rehabilitation and maintenance of processing plant - services.jpg',
      features: [
        'Conveyor System Rehabilitation',
        'Pump Maintenance & Repair',
        'Processing Plant Optimization',
        'Equipment Upgrades',
        'Preventive Maintenance Programs',
        'Sustainability Solutions'
      ]
    },
    {
      title: 'Welding and Fabrication',
      description: 'We excel in delivering welding and fabrication services, providing tailor-made solutions for diverse industrial applications while strictly adhering to rigorous quality standards.',
      icon: '🔥',
      image: '/images/welding and fabrication - services.jpg',
      features: [
        'Custom Metal Fabrication',
        'Certified Welding Services',
        'Structural Steel Work',
        'Pressure Vessel Fabrication',
        'Quality Assurance Testing',
        'Code Compliance'
      ]
    },
    {
      title: 'Plant Maintenance, Mechanical Repairs, and Service',
      description: 'Our team of experts is proficient in comprehensive plant maintenance, mechanical repairs, and servicing, ensuring uninterrupted operations and minimized downtime.',
      icon: '🛠️',
      image: '/images/plant maintenance, mechanical repairs, and service - services.png',
      features: [
        'Comprehensive Plant Maintenance',
        'Mechanical Repairs',
        'Equipment Servicing',
        'Uninterrupted Operations',
        'Downtime Minimization',
        'Expert Technical Support'
      ]
    },
    {
      title: 'Supply of Mechanical Materials and Related Materials',
      description: 'We offer a wide range of mechanical materials and other related products sourced from reputable suppliers, catering to the specific needs of our clients.',
      icon: '📦',
      image: '/images/supply of mechanical materials and related materials - services.jpg',
      features: [
        'Quality Material Supply',
        'Reputable Supplier Network',
        'Custom Material Sourcing',
        'Inventory Management',
        'Technical Specifications',
        'Client-Specific Solutions'
      ]
    }
  ];

  const industries = [
    {
      name: 'Mining & Minerals',
      description: 'Supporting Namibias mining sector with specialized equipment and process solutions',
      icon: '⛏️'
    },
    {
      name: 'Marine & Fishing',
      description: 'Engineering solutions for the fishing industry and marine operations',
      icon: '🐟'
    },
    {
      name: 'Port Operations',
      description: 'Infrastructure and systems for efficient port and cargo handling operations',
      icon: '🚢'
    },
    {
      name: 'Manufacturing',
      description: 'Process optimization and automation for manufacturing facilities',
      icon: '🏗️'
    },
    {
      name: 'Energy & Utilities',
      description: 'Power generation, distribution, and renewable energy solutions',
      icon: '⚡'
    },
    {
      name: 'Infrastructure',
      description: 'Civil and structural engineering for public and private infrastructure',
      icon: '🏢'
    }
  ];

  return (
    <div className="min-h-screen py-16 relative overflow-hidden">
      {/* Background Slideshow */}
      <div className="fixed inset-0 z-0">
        <ImageSlideshow 
          images={[
            '/images/bg-1.jpg',
            '/images/bg-2.jpg',
            '/images/bg-3.jpg',
            '/images/bg-4.jpg',
            '/images/bg-5.webp'
          ]}
          autoPlay={true}
          interval={7000}
          showDots={false}
          className="w-full h-full"
        />
        <div className="absolute inset-0 bg-slate-900 opacity-45"></div>
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
            Our Engineering Services
          </h1>
          <p className="text-xl text-gray-200 font-semibold max-w-3xl mx-auto leading-relaxed mb-4" style={{textShadow: '2px 2px 8px rgba(0,0,0,0.8), 0px 0px 18px rgba(0,0,0,0.6)'}}>
            Comprehensive engineering solutions designed to meet the diverse needs of 
            Namibian industry and international clients operating in the region.
          </p>
          <p className="text-lg bg-gradient-to-r from-accent-orange to-accent-yellow bg-clip-text text-transparent font-semibold max-w-3xl mx-auto drop-shadow-md">
            Dedicated to driving progress and prosperity, one project at a time.
          </p>
        </motion.div>

        {/* Services Grid */}
        <section className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
        </section>

        {/* Industries We Serve */}
        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-semibold text-white mb-4" style={{textShadow: '2px 2px 6px rgba(0,0,0,0.8)'}}>Industries We Serve</h2>
            <p className="text-xl text-white max-w-3xl mx-auto" style={{textShadow: '2px 2px 6px rgba(0,0,0,0.8)'}}>
              Our expertise spans across key sectors driving Namibias economic growth
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 text-center"
              >
                <div className="text-4xl mb-4">{industry.icon}</div>
                <h3 className="text-xl font-semibold text-navy mb-3">{industry.name}</h3>
                <p className="text-gray-600 leading-relaxed">{industry.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Process Section */}
        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-semibold text-white mb-4" style={{textShadow: '2px 2px 6px rgba(0,0,0,0.8)'}}>Our Process</h2>
            <p className="text-xl text-white max-w-3xl mx-auto" style={{textShadow: '2px 2px 6px rgba(0,0,0,0.8)'}}>
              A structured approach ensuring successful project delivery
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Discovery', description: 'Understanding your requirements and project scope' },
              { step: '02', title: 'Planning', description: 'Detailed project planning and resource allocation' },
              { step: '03', title: 'Execution', description: 'Implementation with regular monitoring and updates' },
              { step: '04', title: 'Delivery', description: 'Final delivery, testing, and ongoing support' }
            ].map((phase, index) => (
              <motion.div
                key={phase.step}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className={`w-16 h-16 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4 ${
                  index % 2 === 0 ? 'bg-gradient-to-r from-accent-orange to-accent-yellow' : 'bg-gradient-to-r from-accent-yellow to-accent-orange'
                }`}>
                  {phase.step}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3" style={{textShadow: '2px 2px 6px rgba(0,0,0,0.8)'}}>{phase.title}</h3>
                <p className="text-white" style={{textShadow: '2px 2px 6px rgba(0,0,0,0.8)'}}>{phase.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Project Showcase Section */}
        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
                   <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Work in Action</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See our engineering expertise come to life through real projects and solutions
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-96 rounded-lg overflow-hidden shadow-2xl"
          >
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
              interval={5000}
              showDots={true}
              className="h-full"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-navy-darker to-transparent p-6">
              <h3 className="text-white text-xl font-bold mb-2">Professional Engineering Solutions</h3>
              <p className="text-gray-300">Delivering excellence across all our service areas</p>
            </div>
          </motion.div>
        </section>

        {/* CTA Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
                 className="bg-slate-900/90 backdrop-blur-sm rounded-lg p-8 md:p-12 text-center text-white shadow-2xl border border-gray-600"
        >
                 <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{textShadow: '2px 2px 8px rgba(0,0,0,0.8)'}}>Ready to Start Your Project?</h2>
                   <p className="text-xl mb-8 text-white max-w-2xl mx-auto" style={{textShadow: '2px 2px 6px rgba(0,0,0,0.8)'}}>
            Contact our team today to discuss how we can help bring your engineering vision to life.
          </p>
          <a
            href="/contact"
            className="inline-block bg-gradient-to-r from-accent-orange to-accent-yellow hover:from-accent-orange-light hover:to-accent-yellow-light text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Get Started
          </a>
        </motion.section>
      </div>
      </div>
    </div>
  );
};

export default Services;
