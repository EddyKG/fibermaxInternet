import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white">
      <div className="container max-w-6xl mx-auto px-4 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center mb-6">
              <span className="text-2xl font-bold">
                FiberMax<span className="text-primary dark:text-primary-light">Internet</span>
              </span>
            </Link>
            <p className="text-gray-600 dark:text-gray-300">
              Empowering Nakuru with high-speed fiber connectivity since 2020
            </p>
            <div className="flex space-x-4">
              {[FaFacebook, FaTwitter, FaInstagram, FaLinkedin].map((Icon, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary-light transition-colors"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white">Quick Links</h3>
            <ul className="space-y-3">
              {['Home', 'About Us', 'Coverage', 'Contact'].map((link) => (
                <li key={link}>
                  <Link
                    to={`/${link.toLowerCase().replace(' ', '-')}`}
                    className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary-light transition-colors"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white">Services</h3>
            <ul className="space-y-3">
              {['Home Internet', 'Business Solutions', 'Support'].map((service) => (
                <li key={service}>
                  <Link
                    to={`/services/${service.toLowerCase().replace(' ', '-')}`}
                    className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary-light transition-colors"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-600 dark:text-gray-300">
                <FaMapMarkerAlt className="mr-3" />
                Nairobi, Kenya
              </li>
              <li className="flex items-center">
                <a
                  href="tel:+254796592673"
                  className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary-light transition-colors"
                >
                  <FaPhoneAlt className="mr-3" />
                  +254 796 592 673
                </a>
              </li>
              <li className="flex items-center">
                <a
                  href="mailto:info@fibermax.com"
                  className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary-light transition-colors"
                >
                  <FaEnvelope className="mr-3" />
                  fibermaxtelcom@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm">
            <p className="text-gray-600 dark:text-gray-300 mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} FiberMax Internet. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link to="/privacy" className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary-light transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary-light transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

