import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaFire } from 'react-icons/fa';

export default function TodaySpecialSection({ image, title, subtitle, badgeText, heading, description, price, originalPrice, offerText, buttonText }) {
  return (
    <section className="py-20 relative overflow-hidden" id="todays-special">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-red/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="container-main">
        <div className="text-center mb-12">
          <p className="text-brand-orange font-body text-sm tracking-[0.2em] uppercase mb-2">{subtitle}</p>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl tracking-wider uppercase brush-underline gradient-text-fire leading-tight">
            {title}
          </h2>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative glass-card overflow-hidden lg:flex items-center"
        >
          <div className="lg:w-1/2 relative h-64 sm:h-80 lg:h-[400px]">
            <img src={image} alt={heading} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-brand-dark/50 hidden lg:block" />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark to-transparent lg:hidden" />
            <div className="absolute top-4 left-4">
              <span className="badge-spicy text-sm">
                <FaFire /> {badgeText}
              </span>
            </div>
          </div>

          <div className="lg:w-1/2 p-8 lg:p-12 text-center lg:text-left flex flex-col items-center lg:items-start">
            <span className="text-brand-orange text-sm tracking-widest uppercase font-bold">Our Specialty</span>
            <h3 className="font-heading text-3xl sm:text-4xl text-brand-white tracking-wider uppercase mt-2 mb-3">
              {heading}
            </h3>
            <p className="text-brand-gray-light text-sm leading-relaxed mb-4">{description}</p>

            <div className="flex items-center justify-center lg:justify-start gap-3 mb-6">
              <span className="font-heading text-4xl text-brand-yellow">{originalPrice}</span>
              {/* <span className="text-brand-gray line-through text-lg">{originalPrice}</span> */}
              {/* <span className="badge-spicy">{offerText}</span> */}
            </div>

            <Link to="/menu" className="btn-glow btn-glow-red">
              🍽️ {buttonText}
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
