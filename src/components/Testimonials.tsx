import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    position: 'CFO',
    company: 'Global Manufacturing Corp',
    content: 'The implementation exceeded our expectations. 99% satisfaction with the services delivered.'
  },
  {
    position: 'CTO',
    company: 'Tech Solutions Ltd',
    content: 'Outstanding support and technical expertise. Truly a 99% satisfaction rate with their service.'
  },
  {
    position: 'Production Manager',
    company: 'Steel Manufacturing Plant',
    content: 'Their industry knowledge and support have been invaluable. 99% satisfied with the results.'
  },
  {
    position: 'Director',
    company: 'Wholesale Trading Co',
    content: 'Exceptional service and attention to detail. We are 99% satisfied with their delivery.'
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-white dark:bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            Client Testimonials
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-400">
            Hear from our satisfied clients
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white dark:bg-dark-700 rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{testimonial.content}</p>
              <div className="border-t dark:border-dark-600 pt-4">
                <p className="font-medium text-gray-900 dark:text-white">{testimonial.position}</p>
                <p className="text-sm text-gray-400 dark:text-gray-500">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;