import React from 'react';

const clients = [
  { name: 'JSW', logo: 'https://sureng-profile.s3.ap-south-1.amazonaws.com/1.jpeg' },
  { name: 'Standard Chartered', logo: 'https://sureng-profile.s3.ap-south-1.amazonaws.com/2.jpeg' },
  { name: 'Stovekraft', logo: 'https://sureng-profile.s3.ap-south-1.amazonaws.com/3.jpeg' },
  { name: 'WalPlast', logo: 'https://sureng-profile.s3.ap-south-1.amazonaws.com/4.jpeg' },
  { name: 'Vijaya Milk', logo: 'https://sureng-profile.s3.ap-south-1.amazonaws.com/5.jpeg' },
  { name: 'UTP Pipe', logo: 'https://sureng-profile.s3.ap-south-1.amazonaws.com/6.jpeg' },
  { name: 'Nia Global', logo: 'https://sureng-profile.s3.ap-south-1.amazonaws.com/7.jpeg' },
  { name: 'THL Pipe', logo: 'https://sureng-profile.s3.ap-south-1.amazonaws.com/8.jpeg' },
  { name: 'Euro Telecom', logo: 'https://sureng-profile.s3.ap-south-1.amazonaws.com/9.jpeg' },
  { name: 'Pasupati Feeds', logo: 'https://sureng-profile.s3.ap-south-1.amazonaws.com/10.jpeg' },
  { name: 'Pragati Milk', logo: 'https://sureng-profile.s3.ap-south-1.amazonaws.com/11.jpeg' },
  { name: 'Krishna Mines', logo: 'https://sureng-profile.s3.ap-south-1.amazonaws.com/12.jpeg' }
];

const ClientLogos = () => {
  return (
    <section className="py-12 bg-gray-50 dark:bg-dark-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Trusted by Industry Leaders</h2>
        </div>
        <div className="relative">
          <div className="overflow-x-auto pb-4 scrollbar-hide">
            <div className="inline-flex space-x-8 animate-scroll">
              {[...clients, ...clients].map((client, index) => (
                <div
                  key={index}
                  className="flex-none w-48 h-24 bg-white dark:bg-dark-700 rounded-lg shadow-sm flex items-center justify-center p-4 hover:shadow-lg transition-shadow duration-300"
                >
                  <img
                    src={client.logo}
                    alt={`${client.name} logo`}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-gray-50 dark:from-dark-800 to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-gray-50 dark:from-dark-800 to-transparent pointer-events-none" />
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;