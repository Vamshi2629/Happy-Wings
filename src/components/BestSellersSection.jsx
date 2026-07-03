import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import SectionTitle from './SectionTitle';
import MenuCard from './MenuCard';

export default function BestSellersSection({ items }) {
  return (
    <section className="py-20 relative" id="best-sellers">
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-brand-orange/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container-main">
        <SectionTitle title="Best Sellers" subtitle="⭐ Fan Favorites" />

        <div className="flex flex-wrap justify-center gap-6">
          {items.map((item, i) => (
            <div key={item.id} className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)] max-w-[300px]">
              <MenuCard item={item} index={i} />
            </div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-10"
        >
          <Link to="/menu" className="btn-glow btn-glow-outline">
            View Full Menu <FaArrowRight className="text-sm" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
