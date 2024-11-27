import React from 'react';
import { X } from 'lucide-react';

const ProductDialog = ({ product, onClose }) => {
  if (!product) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold text-gray-900">{product.title}</h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-500 transition-colors"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          
          <div className="prose max-w-none">
            <h3 className="text-xl font-semibold mb-4">Overview</h3>
            <p className="text-gray-600 mb-6">
              {product.description}
            </p>

            <h3 className="text-xl font-semibold mb-4">Key Features</h3>
            <ul className="space-y-4">
              {product.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <svg className="h-5 w-5 text-blue-500 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <h4 className="font-medium text-gray-900">{feature}</h4>
                    <p className="text-gray-600 mt-1">
                      Detailed explanation of how {feature.toLowerCase()} enhances your business operations.
                    </p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <a
                href="https://calendly.com/ranga-ratiocination/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
              >
                Schedule a Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDialog;