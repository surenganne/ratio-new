import React from 'react';
import { Users, Globe, Clock } from 'lucide-react';

const GlobalTeam = () => {
  return (
    <section className="py-20 bg-white dark:bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            Our Global Team
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-400">
            500+ years of combined experience working around the clock
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="flex justify-center">
              <Users className="h-12 w-12 text-blue-600" />
            </div>
            <h3 className="mt-6 text-lg font-medium text-gray-900 dark:text-white">Expert Team</h3>
            <p className="mt-2 text-base text-gray-500 dark:text-gray-400">
              Seasoned professionals with deep industry knowledge
            </p>
          </div>

          <div className="text-center">
            <div className="flex justify-center">
              <Globe className="h-12 w-12 text-blue-600" />
            </div>
            <h3 className="mt-6 text-lg font-medium text-gray-900 dark:text-white">Global Presence</h3>
            <p className="mt-2 text-base text-gray-500 dark:text-gray-400">
              Operating across multiple continents and time zones
            </p>
          </div>

          <div className="text-center">
            <div className="flex justify-center">
              <Clock className="h-12 w-12 text-blue-600" />
            </div>
            <h3 className="mt-6 text-lg font-medium text-gray-900 dark:text-white">24/7 Support</h3>
            <p className="mt-2 text-base text-gray-500 dark:text-gray-400">
              Round-the-clock assistance for all your needs
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalTeam;