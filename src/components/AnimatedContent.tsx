import React, { useEffect, useState } from 'react';

const content = [
  {
    headline: "Ratiocination as your trusted partner",
    description: "Transform your business processes with our expert SAP solutions and services. Get precise implementation, rapid development, and validated results.",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=2400",
    features: ['Expert Implementation', 'Rapid Development', 'Validated Results']
  },
  {
    headline: "Digitalize your journey with Ratiocination",
    description: "Make every process more efficient, every decision more data-driven, and every employee more capable with our digital transformation solutions.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2400",
    features: ['Process Efficiency', 'Data-Driven Decisions', 'Employee Enablement']
  },
  {
    headline: "You tell us your problem statement and we are here to help",
    description: "Our interactive approach helps you validate your requirements and implement solutions that drive real business value.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=2400",
    features: ['Problem Analysis', 'Solution Design', 'Value Delivery']
  }
];

const AnimatedContent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % content.length);
        setIsAnimating(false);
      }, 500);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-[100vh] bg-gradient-to-br from-blue-100 via-blue-50 to-indigo-100 dark:from-dark-900 dark:via-dark-800 dark:to-dark-900 overflow-hidden">
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-grid-white opacity-20 bg-[length:160px_160px]"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-indigo-500/10"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="max-w-2xl mx-auto lg:mx-0">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100/80 dark:bg-blue-900/30 backdrop-blur-sm mb-8">
              <span className="text-blue-600 dark:text-blue-400 text-sm font-medium">
                Transform your business with SAP
              </span>
            </div>
            
            <h1 
              className={`text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white leading-tight transition-all duration-500 ${
                isAnimating ? 'opacity-0 transform translate-y-4' : 'opacity-100 transform translate-y-0'
              }`}
            >
              {content[currentIndex].headline.split(' ').map((word, i) => (
                <span 
                  key={i}
                  className={`inline-block mr-2 mb-2 ${
                    i % 3 === 1 ? 'text-blue-600 dark:text-blue-400' : ''
                  }`}
                >
                  {word}
                </span>
              ))}
            </h1>
            
            <p 
              className={`mt-6 text-lg sm:text-xl text-gray-600 dark:text-gray-300 transition-all duration-500 delay-100 ${
                isAnimating ? 'opacity-0 transform translate-y-4' : 'opacity-100 transform translate-y-0'
              }`}
            >
              {content[currentIndex].description}
            </p>

            {/* Feature List */}
            <div 
              className={`mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 transition-all duration-500 delay-200 ${
                isAnimating ? 'opacity-0 transform translate-y-4' : 'opacity-100 transform translate-y-0'
              }`}
            >
              {content[currentIndex].features.map((feature, index) => (
                <div 
                  key={index}
                  className="bg-white/80 dark:bg-dark-800/80 backdrop-blur-sm rounded-lg p-4 border border-gray-200/50 dark:border-dark-700/50 hover:border-blue-200 dark:hover:border-blue-800 transition-colors"
                >
                  <p className="text-sm font-medium text-gray-900 dark:text-white">{feature}</p>
                </div>
              ))}
            </div>

            {/* Indicators */}
            <div className="mt-8 flex space-x-2">
              {content.map((_, index) => (
                <button
                  key={index}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    currentIndex === index 
                      ? 'w-8 bg-blue-600 dark:bg-blue-400' 
                      : 'w-2 bg-gray-300 dark:bg-gray-600'
                  }`}
                  onClick={() => {
                    setIsAnimating(true);
                    setTimeout(() => {
                      setCurrentIndex(index);
                      setIsAnimating(false);
                    }, 500);
                  }}
                />
              ))}
            </div>
          </div>

          {/* Image Section */}
          <div className="relative aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl mx-auto lg:mx-0 max-w-2xl lg:max-w-none">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-transparent"></div>
            {content.map((item, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-1000 transform ${
                  currentIndex === index 
                    ? 'opacity-100 translate-x-0' 
                    : index > currentIndex 
                      ? 'opacity-0 translate-x-full'
                      : 'opacity-0 -translate-x-full'
                }`}
              >
                <img
                  src={item.image}
                  alt="Hero"
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/30 to-transparent"></div>
              </div>
            ))}
          </div>
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

export default AnimatedContent;