import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center">
          {/* Logo and Company Name */}
          <div className="flex items-center justify-center mb-4">
            <img
              src="/images/Rotax_logo.png"
              alt="Rotax Engineering Logo"
              className="h-10 w-auto mr-3"
            />
            <span className="text-xl font-bold text-white">Rotax Engineering CC</span>
          </div>

          {/* Company Description */}
          <p className="text-base text-gray-300 mb-4 leading-relaxed max-w-3xl mx-auto">
            Professional engineering solutions specializing in hydraulic, pneumatic, laser alignment,
            and precision machining services for Namibian industry.
          </p>

          {/* Company Tagline */}
          <p className="text-lg font-semibold bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent mb-6">
            Dedicated to driving progress and prosperity, one project at a time.
          </p>

          {/* Copyright */}
          <div className="pt-4 border-t border-gradient-to-r from-slate-600 to-yellow-600/20">
            <p className="text-gray-400 text-sm mb-2">
              © 2025 Rotax Engineering CC – All Rights Reserved
            </p>
            <p className="text-gray-500 text-xs">
              Designed & Hosted by <span className="text-accent-yellow font-medium">Spybitech Namibia</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
