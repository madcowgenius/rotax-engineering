import React from 'react';
import { motion } from 'framer-motion';

const ServiceCard = ({ title, description, icon, features = [], image }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className="bg-white rounded-xl shadow-corporate hover:shadow-corporate-lg transition-all duration-300 border border-gray-100 overflow-hidden group"
    >
      {/* Service Image */}
      {image && (
        <div className="h-48 w-full overflow-hidden">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}
      
      <div className="p-6">
        <div className="flex items-center mb-4">
               <div className="bg-gradient-to-r from-accent-orange/10 to-accent-yellow/10 p-3 rounded-xl mr-4 group-hover:bg-gradient-to-r group-hover:from-accent-orange group-hover:to-accent-yellow transition-all duration-300">
                 <div className="text-accent-orange group-hover:text-white text-2xl transition-colors duration-300">
                   {icon}
                 </div>
               </div>
               <h3 className="text-xl font-bold text-text-primary group-hover:text-accent-orange transition-colors duration-300">{title}</h3>
        </div>
        
             <p className="text-text-secondary mb-4 leading-relaxed">
               {description}
             </p>
        
        {features.length > 0 && (
          <ul className="space-y-2">
            {features.map((feature, index) => (
                   <li key={index} className="flex items-center text-sm text-text-secondary">
                     <div className={`w-2 h-2 rounded-full mr-3 ${
                       index % 2 === 0 ? 'bg-accent-orange' : 'bg-accent-yellow'
                     }`}></div>
                     {feature}
                   </li>
            ))}
          </ul>
        )}
      </div>
    </motion.div>
  );
};

export default ServiceCard;
