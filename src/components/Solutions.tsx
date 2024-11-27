import React from 'react';
import { Cloud, Server, Database } from 'lucide-react';
import LearnMore from './LearnMore';

const solutions = [
  {
    title: 'S/4 HANA Public Cloud',
    description: "Experience the power of SAP's next-generation ERP system in a flexible, scalable cloud environment.",
    icon: Cloud,
    features: ['Intelligent automation', 'Real-time analytics', 'Global compliance']
  },
  {
    title: 'S/4 HANA Private Cloud',
    description: "Deploy SAP's intelligent ERP in a dedicated cloud environment with enhanced control and security.",
    icon: Server,
    features: ['Custom deployment', 'Enhanced security', 'Full control']
  },
  {
    title: 'SAP Business One',
    description: 'Streamline your small to midsize business operations with an integrated ERP solution.',
    icon: Database,
    features: ['Integrated modules', 'Easy customization', 'Rapid deployment']
  }
];

const Solutions = () => {
  const [showLearnMore, setShowLearnMore] = React.useState(false);
  const [selectedSolution, setSelectedSolution] = React.useState(null);

  const handleLearnMore = (solution) => {
    setSelectedSolution(solution);
    setShowLearnMore(true);
  };

  return (
    <section id="solutions" className="py-20 bg-white dark:bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl flex items-center justify-center gap-2">
            SAP<sup className="text-sm">®</sup> ERP Solutions
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-400">
            Choose the right SAP solution for your business needs
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="relative group bg-white dark:bg-dark-800 p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-blue-400 rounded-xl opacity-0 group-hover:opacity-100 transition duration-300 blur"></div>
              <div className="relative bg-white dark:bg-dark-800 p-6 rounded-xl">
                <solution.icon className="h-12 w-12 text-blue-600 mb-8" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{solution.title}</h3>
                <p className="text-gray-500 dark:text-gray-400 mb-6">{solution.description}</p>
                <ul className="space-y-3">
                  {solution.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-600 dark:text-gray-300">
                      <svg className="h-5 w-5 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => handleLearnMore(solution)}
                  className="mt-8 w-full bg-gray-50 dark:bg-dark-700 text-blue-600 dark:text-blue-400 py-2 px-4 rounded-lg hover:bg-blue-50 dark:hover:bg-dark-600 transition-colors duration-300"
                >
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      {showLearnMore && (
        <LearnMore 
          solution={selectedSolution} 
          onClose={() => setShowLearnMore(false)} 
        />
      )}
    </section>
  );
};

export default Solutions;