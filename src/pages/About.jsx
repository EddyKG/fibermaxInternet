import { motion } from 'framer-motion';
import { FiGlobe, FiZap, FiUsers } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import teamImage from '../assets/team.jpg'; // Add your team image
import fiberMap from '../assets/coverage-map.png'; // Add coverage map image
import wifiPulse from '../assets/wifi-pulse.svg';

const About = () => {
  const stats = [
    { value: '99.9%', label: 'Network Uptime', icon: <FiZap /> },
    { value: '50k+', label: 'Happy Customers', icon: <FiUsers /> },
    { value: '15+', label: 'Cities Covered', icon: <FiGlobe /> },
  ];

  return (
    <div className="bg-white dark:bg-gray-900 mt-10">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 ">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-center lg:text-left"
            >
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 mt-8">
                Connecting Kenya to the Future
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-xl mx-auto lg:mx-0">
              Founded in 2020 during the COVID-19 pandemic, Fibermax was established to meet the rising demand for reliable internet connectivity in Nakuru. As remote work, online learning, and digital communication became essential, we recognized the urgent need for high-speed, stable, and affordable internet solutions.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative aspect-video rounded-3xl overflow-hidden shadow-xl"
            >
              <img
                src={fiberMap}
                alt="Network coverage map"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-blue-500/20 dark:from-primary-dark/30" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-700 p-8 rounded-2xl shadow-sm text-center"
              >
                <div className="text-4xl text-primary dark:text-primary-light mb-4 flex justify-center">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  {stat.value}
                </div>
                <p className="text-gray-600 dark:text-gray-300">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="relative aspect-square rounded-3xl overflow-hidden shadow-xl"
            >
              <img
                src={teamImage}
                alt="Our team"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                Our Journey
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                Founded in 2015 by a team of passionate technologists, we set out to 
                revolutionize Kenya's digital landscape. What started as a small 
                Nairobi-based operation has grown into a nationwide network powering 
                thousands of homes and businesses.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 dark:bg-primary-light/10 rounded-lg flex items-center justify-center">
                    <FiZap className="text-primary dark:text-primary-light text-xl" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      Cutting-Edge Technology
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Deploying the latest fiber-optic infrastructure
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          <div className="space-y-4">
              <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center pt-8"
                >
                  <div className="space-y-4 order-2 md:order-1">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-primary/10 dark:bg-primary-light/10 rounded-lg flex items-center justify-center">
                        <FiUsers className="text-primary dark:text-primary-light text-xl" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                         Our Commitment To You
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300">
                          24/7 support and personalized solutions
                        </p>
                      </div>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300">
                    Our commitment to quality, customer satisfaction, and technological innovation drives us to provide seamless connectivity that keeps you connected to what matters most. Whether for work, study, or entertainment, Fibermax ensures fast, reliable, and uninterrupted internet access.
                    </p>
                  </div>

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
                </motion.div>
              </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-primary to-blue-500 dark:from-primary-dark dark:to-blue-600 py-20">
        <div className="container max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Ready for Blazing-Fast Internet?
            </h2>
            <p className="text-lg text-white/90 max-w-xl mx-auto">
              Join thousands of satisfied customers experiencing the future of connectivity
            </p>
            <div className="flex justify-center gap-4">
            <Link
                to="/plans"
                className="btn-primary py-3 px-8 rounded-lg font-medium hover:scale-105 transition-transform"
              >
                View Plans
              </Link>
              <Link
                to="/contact"
                className="btn-primary py-3 px-8 rounded-lg font-medium hover:scale-105 transition-transform"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;