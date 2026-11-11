import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCheck } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Plans = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: "Basic",
      speed: "12 Mbps",
      monthlyPrice: 2000,
      annualPrice: 1600,
      features: [
        "Up to 10 Mbps download speed",
        "No downtime",
        "Suitable for 1-3 devices",
        "Stream HD content",
        "No data caps",
        "24/7 customer support",
        "Free Installation"
      ],
      popular: false,
      border: "border-2 border-gray-200 dark:border-gray-700",
      color: "bg-gray-50 dark:bg-gray-800"
    },
    {
      name: "Standard",
      speed: "20 Mbps ",
      monthlyPrice: 3000,
      annualPrice: 2500,
      features: [
        "Up to 15 Mbps download speed",
        "No Downtime",
        "Suitable for 3-6 devices",
        "Stream 4K content",
        "No data caps",
        "24/7 customer support",
        "Free Installation"
      ],
      popular: true,
      border: "border-2 border-primary dark:border-primary-light",
      color: "bg-primary/5 dark:bg-primary/10"
    },
    {
      name: "Premium",
      speed: "40 Mbps",
      monthlyPrice: 3500,
      annualPrice: 3000,
      features: [
        "Up to 30 Mbps download speed",
        "No Downtime",
        "Suitable for 7+ devices",
        "Stream 4K on multiple devices",
        "No data caps",
        "24/7 customer support",
        "Free installation",
    
      ],
      popular: false,
      border: "border-2 border-purple-300 dark:border-purple-400",
      color: "bg-gray-50 dark:bg-gray-800"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white dark:bg-gray-900 mt-14 pt-10">
      <div className="container max-w-6xl mx-auto px-4 mt-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Find Your Perfect Plan
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Choose from our range of high-speed fiber internet plans designed to meet your connectivity needs
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex justify-center mb-16"
        >
          <div className="bg-gray-100 dark:bg-gray-800 p-1 rounded-lg flex">
            <button
              className={`px-6 py-3 rounded-lg text-sm font-medium transition-colors ${
                !isAnnual 
                  ? 'bg-white dark:bg-gray-700 text-primary dark:text-primary-light shadow-sm'
                  : 'text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
              }`}
              onClick={() => setIsAnnual(false)}
            >
              Monthly Billing
            </button>
            <button
              className={`px-6 py-3 rounded-lg text-sm font-medium transition-colors ${
                isAnnual 
                  ? 'bg-white dark:bg-gray-700 text-primary dark:text-primary-light shadow-sm'
                  : 'text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
              }`}
              onClick={() => setIsAnnual(true)}
            >
              Annual Billing (Save 10%)
            </button>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative rounded-2xl p-[2px] ${plan.border} bg-gradient-to-b from-white/20 to-transparent dark:from-black/20 overflow-hidden transition-all hover:scale-[1.02] hover:shadow-xl group`}
            >
              <div className={`rounded-2xl ${plan.color} transition-colors`}>
                {plan.popular && (
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-primary to-purple-500 text-white px-4 py-1 rounded-full text-sm font-medium shadow-sm">
                    Most Popular
                  </div>
                )}

                <div className="p-8">
                  <div className="mb-6">
                    <div className="flex justify-between items-start">
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                        {plan.name}
                      </h3>
                      
                    </div>
                  </div>

                  <div className="mb-8">
                    <p className="text-4xl font-bold text-gray-900 dark:text-white mb-2 text-center">
                      {plan.speed}
                    </p>
                    <p className="text-gray-600 dark:text-gray-300 text-sm text-center">
                      Symmetrical speeds guaranteed
                    </p>
                  </div>

                  <div className="mb-8 text-center">
                    <span className="text-2xl font-bold text-gray-900 dark:text-white">
                      KES {isAnnual ? plan.annualPrice : plan.monthlyPrice}
                    </span>
                    <span className="text-gray-600 dark:text-gray-300">/month</span>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-gray-600 dark:text-gray-300">
                        <FaCheck className="text-primary dark:text-primary-light mt-1 mr-3 flex-shrink-0" />
                        <span className="leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    to="/contact"
                    className={`flex items-center justify-center gap-2 w-full py-4 px-6 rounded-xl font-semibold transition-all ${
                      plan.popular 
                        ? 'bg-gradient-to-r from-primary to-purple-500 text-white hover:from-primary-dark hover:to-purple-600 shadow-lg hover:shadow-primary/30'
                        : 'bg-white dark:bg-gray-700 text-primary dark:text-primary-light border-2 border-gray-100 dark:border-gray-600 hover:border-primary hover:bg-gray-50 dark:hover:bg-gray-600'
                    }`}
                  >
                    Get Started
                    {plan.popular && (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
                      </svg>
                    )}
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Plans;