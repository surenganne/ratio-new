import React from 'react';
import { Settings, Shield, Headphones } from 'lucide-react';

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gray-50 dark:bg-dark-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            Comprehensive SAP Services
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-400">
            End-to-end support for your SAP implementation journey
          </p>
        </div>

        <div className="mt-16">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="bg-white dark:bg-dark-700 rounded-xl shadow-md p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white mb-6">
                <Settings className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Implementation</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Expert implementation services ensuring smooth deployment and integration of SAP solutions.
              </p>
              <ul className="mt-6 space-y-3 text-gray-600 dark:text-gray-300">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-blue-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Project planning and management
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-blue-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  System configuration
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-blue-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Data migration
                </li>
              </ul>
            </div>

            <div className="bg-white dark:bg-dark-700 rounded-xl shadow-md p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white mb-6">
                <Shield className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Customization</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Tailored solutions to meet your specific business requirements and processes.
              </p>
              <ul className="mt-6 space-y-3 text-gray-600 dark:text-gray-300">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-blue-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Custom development
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-blue-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Process optimization
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-blue-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Integration services
                </li>
              </ul>
            </div>

            <div className="bg-white dark:bg-dark-700 rounded-xl shadow-md p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white mb-6">
                <Headphones className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Support</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Comprehensive support services to ensure optimal system performance and user satisfaction.
              </p>
              <ul className="mt-6 space-y-3 text-gray-600 dark:text-gray-300">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-blue-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  24/7 technical support
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-blue-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  System maintenance
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-blue-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  User training
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;