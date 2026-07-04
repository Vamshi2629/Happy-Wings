import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';
import MenuCard from '../components/MenuCard';
import menuData from '../data/menuData';

const categories = [
  { key: 'all', label: 'All', icon: '🍽️' },
  { key: 'chicken', label: 'Chicken', icon: '🍗' },
  { key: 'burgers', label: 'Burgers', icon: '🍔' },
  { key: 'veg', label: 'Veg', icon: '🥗' },
  { key: 'combos', label: 'Combos', icon: '📦' },
];

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filtered = activeCategory === 'all'
    ? menuData
    : menuData.filter((item) => item.category === activeCategory);

  return (
    <>
      <Helmet>
        <title>🍗 Menu — Happy Wings | Fried Chicken, Wings, Burgers & Combos</title>
        <meta name="description" content="Explore the Happy Wings menu — Chicken Bits, Cajun Fried Chicken, BBQ Wings, Korean Chicken, Burgers, Veg Items & Happy Box combos." />
      </Helmet>

      {/* Hero Banner */}
      <section className="relative pt-16 pb-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-red/10 to-transparent pointer-events-none" />
        <div className="container-main relative z-10">
          <SectionTitle title="Our Menu" subtitle="🍗 Crispy • Juicy • Delicious" />
          <p className="text-center text-brand-gray max-w-2xl mx-auto text-sm leading-relaxed -mt-6">
            From classic fried chicken to Korean-style wings, every item is made fresh with our secret blend of spices. Pick your favorite and order via WhatsApp!
          </p>
        </div>
      </section>

      {/* Category Filters */}
      <section className="sticky top-20 z-30 bg-brand-dark/95 backdrop-blur-md border-b border-brand-dark-border py-4">
        <div className="container-main">
          <div className="flex items-center justify-center gap-2 sm:gap-3 flex-wrap">
            {categories.map((cat) => (
              <motion.button
                key={cat.key}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveCategory(cat.key)}
                className={`px-3 sm:px-5 py-2.5 rounded-full font-body font-semibold text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 flex items-center gap-1.5 sm:gap-2 ${
                  activeCategory === cat.key
                    ? 'bg-gradient-to-r from-brand-red to-brand-orange text-white shadow-[0_0_20px_rgba(227,24,24,0.3)]'
                    : 'bg-brand-dark-card border border-brand-dark-border text-brand-gray hover:text-brand-white hover:border-brand-red/30'
                }`}
                id={`filter-${cat.key}`}
              >
                <span className="text-sm sm:text-base">{cat.icon}</span>
                <span>{cat.label}</span>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Grid */}
      <section className="py-12 pb-20">
        <div className="container-main">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            >
              {filtered.map((item, i) => (
                <MenuCard key={item.id} item={item} index={i} />
              ))}
            </motion.div>
          </AnimatePresence>

          {filtered.length === 0 && (
            <div className="text-center py-20">
              <p className="text-brand-gray text-lg">No items in this category yet. Check back soon!</p>
            </div>
          )}

          {/* Storefront Visit Note */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-16 max-w-lg mx-auto bg-brand-dark-card border border-brand-dark-border p-6 rounded-2xl shadow-xl"
          >
            <p className="font-heading text-xl text-brand-yellow mb-2">🍽️ Order Online or Visit Us</p>
            <p className="text-brand-gray-light text-sm mb-4">
              We are now available on <a href="https://www.zomato.com/siddipet/happy-wings-siddipet-locality/order" target="_blank" rel="noopener noreferrer" className="text-brand-red font-semibold hover:underline">Zomato</a> for online orders! Or visit our outlet at Housing Board Colony, Siddipet to enjoy our fresh, crispy fried chicken hot out of the fryer.
            </p>
            <p className="text-brand-orange text-xs font-semibold uppercase tracking-wider">
              ⭐ Complimentary French Fries with every purchase! ⭐
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
