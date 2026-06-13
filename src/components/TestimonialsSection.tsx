import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { testimonials } from '../data/portfolioData';
import { FiChevronLeft, FiChevronRight, FiStar } from 'react-icons/fi';

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section id="testimonials" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            What People <span className="gradient-text">Say</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Feedback from professors, colleagues, and collaborators
          </p>
        </motion.div>

        <div className="relative max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-4 mb-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  i === current ? 'w-8 bg-primary' : 'bg-gray-600'
                }`}
              />
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4 }}
              className="glass p-8 md:p-12 rounded-2xl text-center"
            >
              <div className="text-5xl mb-6">{testimonials[current].avatar}</div>
              <div className="flex justify-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <FiStar key={i} className="text-yellow-400 fill-yellow-400" size={18} />
                ))}
              </div>
              <p className="text-gray-300 text-lg mb-6 leading-relaxed italic">
                "{testimonials[current].text}"
              </p>
              <div>
                <h4 className="font-bold text-lg">{testimonials[current].name}</h4>
                <p className="text-gray-400 text-sm">{testimonials[current].role}</p>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center gap-4 mt-8">
            <motion.button
              onClick={prev}
              className="w-12 h-12 glass rounded-full flex items-center justify-center text-gray-400 hover:text-white transition-all"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiChevronLeft size={20} />
            </motion.button>
            <motion.button
              onClick={next}
              className="w-12 h-12 glass rounded-full flex items-center justify-center text-gray-400 hover:text-white transition-all"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiChevronRight size={20} />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;