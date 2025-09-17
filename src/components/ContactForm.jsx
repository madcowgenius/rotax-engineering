import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm, ValidationError } from '@formspree/react';

const ContactForm = () => {
  // Replace 'YOUR_FORM_ID' with the actual Formspree form ID
  const [state, handleSubmit] = useForm("YOUR_FORM_ID");
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    
    // Submit to Formspree
    await handleSubmit(e);
    
    // Reset form on successful submission
    if (state.succeeded) {
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: ''
      });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white rounded-lg shadow-lg p-8"
    >
      <h3 className="text-2xl font-bold text-navy mb-6">Get In Touch</h3>
      
      <form onSubmit={onSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-yellow focus:border-transparent transition-colors duration-200"
              placeholder="Your full name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-yellow focus:border-transparent transition-colors duration-200"
              placeholder="your.email@example.com"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-yellow focus:border-transparent transition-colors duration-200"
              placeholder="+264 XX XXX XXXX"
            />
          </div>

          <div>
            <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
              Company
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-yellow focus:border-transparent transition-colors duration-200"
              placeholder="Your company name"
            />
          </div>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={6}
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-yellow focus:border-transparent transition-colors duration-200 resize-vertical"
            placeholder="Tell us about your project requirements..."
          />
        </div>

        <div>
          <button
            type="submit"
            disabled={state.submitting}
            className={`w-full py-3 px-6 rounded-lg font-semibold text-white transition-all duration-300 ${
              state.submitting
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-gradient-to-r from-accent-orange to-accent-yellow hover:from-accent-orange-light hover:to-accent-yellow-light hover:shadow-lg'
            }`}
          >
            {state.submitting ? 'Sending...' : 'Send Message'}
          </button>
        </div>

        {state.succeeded && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-green-50 border border-green-200 rounded-lg p-4 text-green-800"
          >
            Thank you! Your message has been sent successfully to sales.rotaxengineering@gmail.com. We'll get back to you soon.
          </motion.div>
        )}

        {state.errors.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-800"
          >
            Sorry, there was an error sending your message. Please try again or contact us directly at sales.rotaxengineering@gmail.com
          </motion.div>
        )}
      </form>
    </motion.div>
  );
};

export default ContactForm;
