import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function HappyBoxSection({ image, items }) {
  return (
    <section className="py-20 relative overflow-hidden" id="happy-box">
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-brand-yellow/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="container-main">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-brand-red/20 via-brand-dark-card to-brand-dark-lighter border border-brand-red/10"
        >
          <div className="lg:flex items-center">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:w-1/2 p-8 lg:p-12"
            >
              <img
                src={image}
                alt="Happy Box Combo"
                className="w-full max-w-md mx-auto rounded-2xl shadow-2xl"
                style={{ animation: 'float 4s ease-in-out infinite' }}
              />
            </motion.div>

            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="lg:w-1/2 p-8 lg:p-12"
            >
              <span className="badge-bestseller text-sm mb-4 inline-block">⭐ Best Value</span>
              <h2 className="font-heading text-4xl sm:text-5xl gradient-text-fire tracking-wider uppercase mb-4">
                Happy Box
              </h2>
              <p className="text-brand-gray-light mb-6 leading-relaxed">
                The ultimate combo meal for maximum happiness! Everything you love, packed in one delicious box.
              </p>
              <ul className="space-y-3 mb-8">
                {items.map((item, i) => (
                  <motion.li
                    key={item}
                    initial={{ x: 20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 + i * 0.1 }}
                    className="flex items-center gap-3 text-brand-white"
                  >
                    <span className="text-brand-yellow">✓</span>
                    <span className="text-sm">{item}</span>
                  </motion.li>
                ))}
              </ul>

              <div className="flex items-center gap-4 mb-6">
                <span className="font-heading text-5xl text-brand-yellow">₹135</span>
                <div className="flex flex-col">
                  <span className="text-brand-gray line-through">₹169</span>
                  <span className="badge-spicy text-xs">Save ₹34!</span>
                </div>
              </div>

              <Link to="/menu" className="btn-glow btn-glow-yellow text-lg">
                📦 View Happy Box in Menu
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
