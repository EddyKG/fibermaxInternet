import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';

const testimonials = [
  {
    name: "Jane Kamau",
    role: "Small Business Owner",
    image: "/api/placeholder/80/80",
    content: "FiberMax Internet transformed our business operations. With reliable high-speed connectivity, we can now efficiently serve our customers without any downtime.",
    rating: 5
  },
  {
    name: "David Ochieng",
    role: "Online Gamer",
    image: "/api/placeholder/80/80",
    content: "As an avid gamer, low latency is crucial. FiberMax delivers lightning-fast speeds with minimal ping, giving me the competitive edge I need. Best ISP in Kenya!",
    rating: 5
  },
  {
    name: "Sarah Njeri",
    role: "Remote Worker",
    image: "/api/placeholder/80/80",
    content: "Working from home requires dependable internet. FiberMax has never let me down during important video calls or when uploading large files to my company's servers.",
    rating: 4
  },
  {
    name: "Michael Maina",
    role: "Family Household",
    image: "/api/placeholder/80/80",
    content: "With five family members all streaming, gaming, and browsing simultaneously, our previous ISP couldn't handle the load. FiberMax powers our digital lifestyle without a hitch.",
    rating: 5
  }
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(prev => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="section bg-primary bg-opacity-5">
      <div className="container">
        <h2 className="section-title">What Our Customers Say</h2>
        <p className="section-subtitle">
          Don't just take our word for it - hear from our satisfied customers across Kenya
        </p>

        <div className="relative max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: index === current ? 1 : 0 }}
              transition={{ duration: 0.5 }}
              className={`absolute inset-0 ${index === current ? 'block' : 'hidden'}`}
            >
              <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
                <FaQuoteLeft className="text-primary text-4xl mb-6 opacity-20" />
                <p className="text-lg md:text-xl mb-6">{testimonial.content}</p>
                <div className="flex items-center">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className="text-gray-600">{testimonial.role}</p>
                    <div className="flex mt-1">
                      {[...Array(5)].map((_, i) => (
                        <FaStar 
                          key={i} 
                          className={i < testimonial.rating ? "text-yellow-400" : "text-gray-300"} 
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}

          <div className="flex justify-center mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-3 h-3 mx-1 rounded-full ${
                  index === current ? 'bg-primary' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;