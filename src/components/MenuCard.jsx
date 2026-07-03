import { motion } from 'framer-motion';

export default function MenuCard({ item, index = 0 }) {
  const badgeStyles = {
    bestseller: 'badge-bestseller',
    spicy: 'badge-spicy',
    new: 'badge-new',
  };

  const badgeIcons = {
    bestseller: '⭐',
    spicy: '🌶️',
    new: '✨',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -8 }}
      className="group relative glass-card overflow-hidden cursor-pointer hover:border-brand-red/30 transition-all duration-500 hover:shadow-[0_8px_40px_rgba(227,24,24,0.15)]"
      id={`menu-card-${item.id}`}
    >
      {/* Image */}
      <div className="relative h-48 sm:h-56 overflow-hidden">
        <motion.img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/20 to-transparent" />

        {/* Badges */}
        {item.badges?.length > 0 && (
          <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
            {item.badges.map((badge) => (
              <span key={badge} className={badgeStyles[badge]}>
                {badgeIcons[badge]} {badge}
              </span>
            ))}
          </div>
        )}

        {/* Price tag */}
        <div className="absolute top-3 right-3 bg-brand-dark/80 backdrop-blur-md rounded-xl px-3 py-1.5 flex items-center gap-2 border border-brand-dark-border shadow-md">
          {item.originalPrice && (
            <span className="text-xs text-brand-gray line-through">
              ₹{item.originalPrice}
            </span>
          )}
          <span className="font-heading text-brand-yellow text-lg leading-none">
            ₹{item.price}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="font-heading text-xl text-brand-white tracking-wider uppercase mb-2 group-hover:text-brand-yellow transition-colors">
          {item.name}
        </h3>
        <p className="text-brand-gray text-sm leading-relaxed mb-4 line-clamp-2">
          {item.description}
        </p>

        {/* Variants */}
        {item.variants?.length > 1 && (
          <div className="flex flex-col gap-1.5 w-full mt-3">
            {item.variants.map((v, i) => (
              <div
                key={i}
                className="text-xs bg-brand-dark-lighter border border-brand-dark-border rounded-xl px-3 py-2 text-brand-gray-light flex items-center justify-between shadow-sm"
              >
                <span className="font-medium">{v.name}</span>
                <div className="flex items-center gap-1.5">
                  {v.originalPrice && (
                    <span className="line-through text-[10px] text-brand-gray">
                      ₹{v.originalPrice}
                    </span>
                  )}
                  <span className="text-brand-yellow font-heading text-xs">₹{v.price}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}
