import { motion } from 'framer-motion';
import { FiAlertTriangle, FiWifi, FiPackage, FiClock } from 'react-icons/fi';

const Terms = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 mt-10">
      <div className="container max-w-6xl mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16 text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 mt-10">
            Terms of Service
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Effective Date: {new Date().toLocaleDateString()}
          </p>
        </motion.div>

        {/* Service Availability */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-6">
            <FiWifi className="text-2xl text-primary dark:text-primary-light" />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Service Availability
            </h2>
          </div>
          <div className="space-y-4 text-gray-600 dark:text-gray-300">
            <p>
              Fibermax is a service of Fibermax Internet Limited. Usage of Fibermax is subject to the business terms of Fibermax Internet Limited.
            </p>
            <p>
              Fibermax service is only available in select areas. Out-of-range customers may sign up to be on a waiting list. Waiting list customers, subject to management's discretion, may be required to pay for installation at the time of registration. In the unlikely event of failure to connect service within 90 days, a customer may demand a full 100% refund of the installation fee.
            </p>
          </div>
        </motion.div>

        {/* Devices & Installation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-6">
            <FiPackage className="text-2xl text-primary dark:text-primary-light" />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Devices & Installation
            </h2>
          </div>
          <ol className="list-decimal space-y-6 pl-6 text-gray-600 dark:text-gray-300">
            {[
              "All connectivity devices installed remain the property of Fibermax (unless otherwise stated). Fibermax reserves the right to enforce remote management/connectivity policies...",
              "All free lease devices are subject to replacement due to manufacturer defaults...",
              "All devices sold to customers become the property of the customer upon successful payment/delivery...",
              "The customer hereby agrees not to tamper with or relocate the installed devices without prior consent from Fibermax...",
              "The customer consents to allow Fibermax to install power equipment...",
              "Fibermax reserves the right to charge up to a standard installation fee...",
              "Fibermax internet may only be used at the location where it is supplied and installed...",
              "Fibermax Internet Limited reserves the right to terminate service and blacklist the customer..."
            ].map((item, index) => (
              <li key={index} className="pl-4">{item}</li>
            ))}
          </ol>
        </motion.div>

        {/* Internet Service & Plans */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-6">
            <FiClock className="text-2xl text-primary dark:text-primary-light" />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Internet Service & Plans
            </h2>
          </div>
          <div className="space-y-6 text-gray-600 dark:text-gray-300">
            {[
              "All plans are shared plans, and the speeds advertised are the maximum advertised speeds...",
              "The advertised speeds do not indicate uncontended speed to international connectivity...",
              "Fibermax reserves the right to shape bandwidth to ensure a balanced user experience...",
              "All plans are unlimited unless otherwise stated...",
              "Fibermax is a prepaid service. Service must be renewed before expiry to avoid disruption...",
              "All available plans are updated and displayed on our website:",
              "Fibermax Internet Limited reserves the right to change the plans and their respective pricing...",
              "The customer authorizes Fibermax to contact the registered email and phone number...",
              "Subscriptions not renewed for more than 90 days may be deactivated permanently...",
              "All subscriptions are for the duration specified, and subscriptions cannot be paused..."
            ].map((item, index) => (
              <p key={index}>{item}</p>
            ))}
            <a
              href="https://fibermaxnet.com"
              className="text-primary dark:text-primary-light hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://fibermaxnet.com
            </a>
          </div>
        </motion.div>

        {/* General Terms */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-blue-50 dark:bg-gray-800 p-6 rounded-xl"
        >
          <div className="flex items-center gap-3 mb-4">
            <FiAlertTriangle className="text-2xl text-primary dark:text-primary-light" />
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Important Notice
            </h3>
          </div>
          <p className="text-gray-600 dark:text-gray-300">
            These terms and conditions are subject to change without notice. The updated terms of service are always available at {" "}
            <a
              href="https://fibermaxnet.com"
              className="text-primary dark:text-primary-light hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://fibermaxnet.com
            </a>
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Terms; 