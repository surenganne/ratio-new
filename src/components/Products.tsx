import React, { useState } from 'react';
import { Box, Cpu, Database, Factory } from 'lucide-react';
import ProductDialog from './ProductDialog';

const products = [
  {
    title: 'Dairy One',
    description: 'Comprehensive SAP Business One addon for dairy industry management',
    icon: Box,
    features: ['Production Planning', 'Quality Control', 'Batch Management']
  },
  {
    title: 'Poultry One',
    description: 'Specialized addon for poultry business operations and management',
    icon: Factory,
    features: ['Flock Management', 'Feed Control', 'Production Tracking']
  },
  {
    title: 'Steel One',
    description: 'Tailored solution for steel manufacturing and distribution',
    icon: Database,
    features: ['Inventory Management', 'Production Planning', 'Quality Control']
  },
  {
    title: 'Inter Company Addon',
    description: 'Streamline inter-company transactions and consolidation',
    icon: Cpu,
    features: ['Automated Transactions', 'Consolidated Reporting', 'Cross-company Analytics']
  }
];

const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <section id="products" className="py-20 bg-gray-50 dark:bg-dark-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            Ratio Products
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-400">
            Specialized SAP Business One Addons by Ratiocination
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {products.map((product, index) => (
            <div
              key={index}
              className="relative group bg-white dark:bg-dark-700 p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-blue-400 rounded-xl opacity-0 group-hover:opacity-100 transition duration-300 blur"></div>
              <div className="relative bg-white dark:bg-dark-700 p-6 rounded-xl">
                <product.icon className="h-12 w-12 text-blue-600 mb-8" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{product.title}</h3>
                <p className="text-gray-500 dark:text-gray-400 mb-6">{product.description}</p>
                <ul className="space-y-3">
                  {product.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-600 dark:text-gray-300">
                      <svg className="h-5 w-5 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => setSelectedProduct(product)}
                  className="mt-8 w-full bg-gray-50 dark:bg-dark-600 text-blue-600 dark:text-blue-400 py-2 px-4 rounded-lg hover:bg-blue-50 dark:hover:bg-dark-500 transition-colors duration-300"
                >
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      {selectedProduct && (
        <ProductDialog 
          product={selectedProduct} 
          onClose={() => setSelectedProduct(null)} 
        />
      )}
    </section>
  );
};

export default Products;