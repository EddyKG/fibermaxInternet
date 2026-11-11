import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';

const CTA = () => {
  return (
    <section className="py-20 bg-primary dark:bg-primary-dark">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center text-white">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-extrabold mb-4"
          >
            Ready to Experience Superfast Fiber Internet?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-lg mb-8 text-blue-100"
          >
            Join thousands of satisfied customers and transform your digital experience today with FiberMax Internet.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <Link to="/contact" className="btn bg-white text-primary hover:bg-blue-50">
              Get Connected Now
            </Link>
            <Link to="/coverage" className="btn bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary">
              Check Coverage <FaArrowRight className="ml-2" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTA;