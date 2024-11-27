import React, { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const locations = [
  {
    name: 'UAE Office',
    address: [
      'Ratiocination FZE',
      'Creative Towers',
      'PO Box : 4422',
      'Fujairah',
      'U A E'
    ]
  },
  {
    name: 'UK Office',
    address: [
      'Ratiocination Limited',
      'Studio F23, Waterfront Studios Business Centre,',
      '1 Dock Road,',
      'London - E16 1AG, U.K'
    ]
  },
  {
    name: 'India Office',
    address: [
      'Ratiocination Consultancy Services',
      '554,Road No 27,',
      'Jublie Hills',
      'Hyderabad - 500033'
    ]
  }
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-white dark:bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            Get in Touch
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-400">
            Ready to start your digital transformation journey? Contact our global team today.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-50 dark:bg-dark-800 rounded-xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 dark:border-dark-600 dark:bg-dark-700 dark:text-white shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 dark:border-dark-600 dark:bg-dark-700 dark:text-white shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 dark:border-dark-600 dark:bg-dark-700 dark:text-white shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Send Message
              </button>
            </form>
          </div>

          <div className="bg-gray-50 dark:bg-dark-800 rounded-xl p-8">
            <div className="space-y-8">
              <div className="flex items-start">
                <Mail className="h-6 w-6 text-blue-600 mt-1" />
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white">Email</h3>
                  <p className="mt-1 text-gray-500 dark:text-gray-400">info@ratiocination.co.uk</p>
                </div>
              </div>
              <div className="flex items-start">
                <Phone className="h-6 w-6 text-blue-600 mt-1" />
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white">Phone</h3>
                  <p className="mt-1 text-gray-500 dark:text-gray-400">+971 04 578 2511</p>
                </div>
              </div>
              
              {locations.map((location, index) => (
                <div key={index} className="flex items-start">
                  <MapPin className="h-6 w-6 text-blue-600 mt-1" />
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white">{location.name}</h3>
                    {location.address.map((line, lineIndex) => (
                      <p key={lineIndex} className="mt-1 text-gray-500 dark:text-gray-400">{line}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;