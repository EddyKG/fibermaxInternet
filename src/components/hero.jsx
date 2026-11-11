import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import WordsCycler from './wordsCycler';
import wifiPulse from '../assets/wifi-pulse.svg'; 

const Hero = () => {
  return (
    <section className="relative py-16 md:py-24 bg-white dark:bg-gray-900 mt-5">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1.2 }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: 'mirror'
          }}
          className="absolute -top-32 -right-32 w-96 h-96 bg-blue-100 dark:bg-blue-900 rounded-full opacity-50 blur-3xl"
        />
      </div>

      <div className="container max-w-6xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center lg:text-left"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Fiber Internet Solutions That Are <WordsCycler words={['Blazing_Fast', 'Affordable', 'Dependable', 'Reliable'] } interval={5000}  className="text-white" />
              <span className="block mt-4 text-xl md:text-2xl font-medium text-gray-600 dark:text-gray-300">
                Starting at <span className="text-primary dark:text-primary-light">2,000 KES/mo</span>
              </span>
            </h1>

            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-xl mx-auto lg:mx-0">
              Experience Nakuru's most reliable high-speed internet with 99.9% uptime and unlimited data.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                to="/plans"
                className="btn-primary py-3 px-8 rounded-lg font-medium hover:scale-105 transition-transform"
              >
                View Plans
              </Link>
              <Link
                to="/coverage"
                className="btn-outline py-3 px-8 rounded-lg font-medium hover:scale-105 transition-transform"
              >
                Check Coverage
              </Link>
            </div>
          </motion.div>

          {/* Image section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative mt-12 lg:mt-0"
          >
            <div className="relative aspect-square bg-gradient-to-tr from-blue-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-3xl shadow-xl">
              {/* WiFi symbol */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-3/4 h-3/4 bg-primary/10 dark:bg-primary-light/10 rounded-full backdrop-blur-lg" />
                <div className="absolute text-primary dark:text-primary-light text-9xl">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="relative aspect-square bg-gradient-to-br from-blue-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8 order-1 md:order-2"
                  >
                    <img
                      src={wifiPulse}
                      alt="Customer support"
                      className="w-full h-full object-contain animate-pulse-slow"
                    />
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;