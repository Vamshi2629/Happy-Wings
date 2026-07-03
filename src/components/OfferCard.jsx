import { motion } from 'framer-motion';

export default function OfferCard({ offer, index = 0, isLastAndSingle = false }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -6, scale: 1.02 }}
      className={`relative overflow-hidden rounded-2xl p-6 sm:p-8 cursor-pointer group ${
        offer.featured
          ? 'col-span-full lg:col-span-2 bg-gradient-to-br from-brand-red via-brand-orange to-brand-yellow'
          : isLastAndSingle
          ? 'col-span-full bg-gradient-to-br from-brand-dark-card to-brand-dark-lighter border border-brand-dark-border'
          : 'bg-gradient-to-br from-brand-dark-card to-brand-dark-lighter border border-brand-dark-border'
      }`}
      id={`offer-card-${offer.id}`}
    >
      {/* Background glow */}
      <div
        className={`absolute -top-20 -right-20 w-40 h-40 rounded-full blur-[80px] pointer-events-none transition-all duration-500 group-hover:scale-150 ${
          offer.featured ? 'bg-brand-yellow/30' : 'bg-brand-red/10 group-hover:bg-brand-red/20'
        }`}
      />

      {/* Sparkle decoration */}
      <div className="absolute top-4 right-4 text-4xl opacity-20 group-hover:opacity-40 transition-opacity">
        {offer.icon}
      </div>

      <div className="relative z-10">
        <span
          className={`inline-block text-xs font-bold tracking-widest uppercase mb-2 ${
            offer.featured ? 'text-white/80' : 'text-brand-orange'
          }`}
        >
          {offer.validity}
        </span>

        <h3
          className={`font-heading text-2xl sm:text-3xl tracking-wider uppercase mb-1 ${
            offer.featured ? 'text-white' : 'text-brand-white'
          }`}
        >
          {offer.title}
        </h3>

        <p
          className={`font-heading text-xl sm:text-2xl tracking-wider mb-3 ${
            offer.featured ? 'text-brand-dark' : 'gradient-text-fire'
          }`}
        >
          {offer.subtitle}
        </p>

        <p
          className={`text-sm leading-relaxed mb-5 max-w-md ${
            offer.featured ? 'text-white/80' : 'text-brand-gray'
          }`}
        >
          {offer.description}
        </p>

        {/* Counter Info Banner */}
        <div className="mt-5">
          <div
            className={`inline-block text-xs font-semibold px-4 py-2 rounded-xl ${
              offer.featured
                ? 'bg-white/20 text-white shadow-sm'
                : 'bg-brand-dark-lighter border border-brand-dark-border text-brand-yellow'
            }`}
          >
            📢 Present this offer at the counter to redeem!
          </div>
        </div>
      </div>
    </motion.div>
  );
}
