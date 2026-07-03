import { motion } from 'framer-motion';
import { FaStar } from 'react-icons/fa';

export default function TestimonialCard({ testimonial, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass-card p-6 relative group hover:border-brand-yellow/20 transition-all duration-500"
    >
      {/* Quote mark */}
      <div className="absolute top-4 right-4 text-5xl text-brand-red/10 font-heading leading-none select-none">
        "
      </div>

      {/* Stars */}
      <div className="flex items-center gap-1 mb-3">
        {Array.from({ length: 5 }, (_, i) => (
          <FaStar
            key={i}
            className={`text-sm ${
              i < testimonial.rating ? 'text-brand-yellow' : 'text-brand-dark-border'
            }`}
          />
        ))}
      </div>

      {/* Review */}
      <p className="text-brand-gray-light text-sm leading-relaxed mb-5 italic">
        "{testimonial.review}"
      </p>

      {/* Author */}
      <div className="flex items-center gap-3 border-t border-brand-dark-border pt-4">
        <div className="w-10 h-10 rounded-full bg-brand-dark-lighter flex items-center justify-center text-xl">
          {testimonial.avatar}
        </div>
        <div>
          <p className="font-heading text-sm text-brand-white tracking-wider uppercase">
            {testimonial.name}
          </p>
          <p className="text-brand-gray text-xs">{testimonial.date}</p>
        </div>
      </div>
    </motion.div>
  );
}
