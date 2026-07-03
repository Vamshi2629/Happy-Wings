import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

function SmokeParticles() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {Array.from({ length: 8 }, (_, i) => (
        <div
          key={i}
          className="smoke-particle"
          style={{
            left: `${15 + i * 10}%`,
            bottom: '10%',
            animationDelay: `${i * 0.5}s`,
            animationDuration: `${3 + i * 0.4}s`,
            width: `${15 + i * 5}px`,
            height: `${15 + i * 5}px`,
          }}
        />
      ))}
    </div>
  );
}

export default function HeroSection({ heroImg, appLogo }) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden" id="hero">
      <div className="absolute inset-0">
        <img src={heroImg} alt="Crispy fried chicken" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/80 via-brand-dark/60 to-brand-dark" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/70 to-transparent" />
      </div>

      <SmokeParticles />

      <div className="relative z-10 container-main text-center py-32">
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: 'spring', stiffness: 200, damping: 15, delay: 0.2 }}
          className="mb-6 inline-block"
          style={{ animation: 'float 3s ease-in-out infinite' }}
        >
          <img
            src={appLogo}
            alt="Happy Wings Logo"
            className="w-24 h-24 sm:w-32 sm:h-32 rounded-full object-cover border-4 border-brand-orange shadow-[0_0_30px_rgba(255,106,0,0.5)] mx-auto"
          />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-brand-alt text-6xl sm:text-7xl md:text-8xl lg:text-9xl mb-8 leading-tight tracking-tighter"
        >
          <span className="gradient-text-fire">Happy Wings</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="font-heading text-sm sm:text-lg md:text-xl text-brand-yellow tracking-[0.15em] sm:tracking-[0.25em] uppercase mb-8 mx-auto"
        >
          The Joy of Crispy Fried Chicken
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="block w-full max-w-2xl mx-auto text-brand-gray-light text-sm sm:text-base mb-10 leading-relaxed text-center px-6"
        >
          Crispy on the outside. Juicy on the inside. Made with our secret blend of spices & served with love in Siddipet.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link to="/menu" className="btn-glow btn-glow-red text-lg" id="hero-order-btn">
            🍽️ Explore Menu
          </Link>
          <Link to="/contact" className="btn-glow btn-glow-outline text-lg" id="hero-contact-btn">
            Contact Us <FaArrowRight className="text-sm" />
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          style={{ animation: 'bounce-subtle 2s ease-in-out infinite' }}
        >
          <div className="w-6 h-10 border-2 border-brand-yellow/30 rounded-full flex items-start justify-center pt-2">
            <div className="w-1.5 h-3 bg-brand-yellow rounded-full animate-bounce" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
