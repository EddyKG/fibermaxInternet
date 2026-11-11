import React from 'react';
import { FiMail, FiMapPin, FiPhone, FiLinkedin, FiGithub, FiTwitter, FiFacebook } from 'react-icons/fi';

const Contact = () => {
  const contactInfo = {
    address: "000-20300, Nakuru, Kenya",
    email: "fibermaxtelcom@gmail.com",
    phone: "+254 796 592 673"
  };

  const socialLinks = [
    { platform: "LinkedIn", url: "#", icon: <FiLinkedin /> },
    { platform: "Facebook", url: "#", icon: <FiFacebook /> },
    { platform: "Twitter", url: "#", icon: <FiTwitter /> }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-500 dark:text-white p-4 md:p-8 lg:p-12 mt-10">
          <div className="bg-white dark:bg-gray-900 p-4 md:p-8 mt-8">
          <h2 className="text-3xl md:text-7xl font-bold text-center mb-8 text-black dark:text-gray-300">
            REACH <span className="dark:text-white text-black"> OUT</span>
          </h2>
        </div>


      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        {/* Left Section - Get in Touch */}
        <div className="md:pr-8 lg:pr-12">
          
          <p className="dark:text-gray-300 text-black mb-8 md:mb-12 text-lg md:text-xl">
            You want to get connected or are experiencing any trouble?
            We are always on stand-by to help when you call Us!
          </p>
          <br />
          <br />
          <h2 className="text-3xl md:text-4xl font-bold mb-7 text-black dark:text-gray-300">Check-out our Socials</h2>
          <div className="space-y-4  gap-5">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
                aria-label={link.platform}
              >
                <span className="text-3xl text-blue-500">{link.icon}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Right Section - Contact Me */}
      
        <div className="md:pl-8 lg:pl-12 dark:text-gray-300 text-black">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-black dark:text-gray-300">Support Line</h2>
          
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <FiMapPin className="text-2xl text-blue-500 mt-1" />
              <div>
                <p className="text-lg md:text-xl font-medium mb-1">Address</p>
                <p className="dark:text-gray-100 text-gray-600 text-base md:text-lg">{contactInfo.address}</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <FiMail className="text-2xl text-blue-500 mt-1" />
              <div>
                <p className="text-lg md:text-xl font-medium mb-1">Email</p>
                <p className="dark:text-gray-100 text-gray-600 text-base md:text-lg">{contactInfo.email}</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <FiPhone className="text-2xl text-blue-500 mt-1" />
              <div>
                <p className="text-lg md:text-xl font-medium mb-1">Phone</p>
                <p className="dark:text-gray-100 text-gray-600 text-base md:text-lg">{contactInfo.phone}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
