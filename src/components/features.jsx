import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaBolt, FaWifi, FaHeadset, FaShieldAlt } from 'react-icons/fa';

const Feature = ({ icon, title, description, delay }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay }}
      className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow space-y-8"
    >
      <div className="bg-primary-light bg-opacity-20 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-black dark:text-white mb-3">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </motion.div>
  );
};

const Features = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container max-w-6xl mx-auto px-4">
        <h2 className="section-title">Why FiberMax Internet?</h2>
        <p className="section-subtitle">
          We provide state-of-the-art fiber connectivity solutions tailored to your needs
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          <Feature
            icon={<FaBolt className="text-primary text-2xl" />}
            title="Lightning Fast"
            description="Experience high-speed internet with speeds up to 150 Mbps for seamless streaming, gaming, and browsing."
            delay={0.1}
          />
          <Feature
            icon={<FaWifi className="text-primary text-2xl" />}
            title="Reliable Connection"
            description="Our network guarantees 99.9% uptime, so you stay connected when it matters most."
            delay={0.2}
          />
          <Feature
            icon={<FaHeadset className="text-primary text-2xl" />}
            title="24/7 Support"
            description="Our dedicated customer and technical support teams are always on stand-by to assist you with any questions or issues."
            delay={0.3}
          />
          <Feature
            icon={<FaShieldAlt className="text-primary text-2xl" />}
            title="Secure Network"
            description="Our Built-in security features protect your network and devices from cyber threats, ensuring your safety online."
            delay={0.4}
          />
        </div>
      </div>
    </section>
  );
};

export default Features;