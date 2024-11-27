import React from 'react';
import { ArrowRight } from 'lucide-react';
import AnimatedContent from './AnimatedContent';

const Hero = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <AnimatedContent />
      
      {/* Call to Action */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="flex flex-col sm:flex-row gap-4 justify-start">
          <a
            href="https://calendly.com/ranga-ratiocination/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-blue-700 bg-white hover:bg-blue-50 transition-all transform hover:scale-105 shadow-lg"
          >
            Schedule Consultation
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-3 border-2 border-white text-base font-medium rounded-lg text-white hover:bg-white/10 transition-all transform hover:scale-105"
          >
            Contact Us
          </a>
        </div>
      </div>

      {/* Wave Effect */}
      <div className="absolute bottom-0 w-full">
        <svg viewBox="0 0 1440 120" className="relative w-full h-[60px] text-white dark:text-dark-900">
          <path
            fill="currentColor"
            d="M0,32L60,42.7C120,53,240,75,360,74.7C480,75,600,53,720,48C840,43,960,53,1080,58.7C1200,64,1320,64,1380,64L1440,64L1440,120L1380,120C1320,120,1200,120,1080,120C960,120,840,120,720,120C600,120,480,120,360,120C240,120,120,120,60,120L0,120Z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Hero;