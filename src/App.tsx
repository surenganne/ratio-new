import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Solutions from './components/Solutions';
import Products from './components/Products';
import Services from './components/Services';
import GlobalTeam from './components/GlobalTeam';
import ClientLogos from './components/ClientLogos';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-dark-900 transition-colors duration-200">
      <Navbar />
      <main>
        <Hero />
        <Solutions />
        <Products />
        <Services />
        <GlobalTeam />
        <ClientLogos />
        <Testimonials />
        <Contact />
      </main>
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <img 
                src="https://sureng-profile.s3.ap-south-1.amazonaws.com/ratiocination_trans_back.png"
                alt="Ratiocination Logo"
                className="h-16 w-auto mb-4"
              />
              <p className="text-gray-400">
                Transforming businesses through innovative solutions and expert services.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Solutions</h3>
              <ul className="space-y-2">
                <li><a href="#solutions" className="text-gray-400 hover:text-white transition-colors">SAP Solutions</a></li>
                <li><a href="#products" className="text-gray-400 hover:text-white transition-colors">Ratio Products</a></li>
                <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Services</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
                <li><a href="#team" className="text-gray-400 hover:text-white transition-colors">Global Team</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Connect</h3>
              <ul className="space-y-2">
                <li><a href="mailto:info@ratiocination.co.uk" className="text-gray-400 hover:text-white transition-colors">Email Us</a></li>
                <li><a href="https://calendly.com/ranga-ratiocination/30min" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">Schedule Meeting</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Ratiocination. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;