import { motion } from 'framer-motion';
import SectionTitle from './SectionTitle';

export default function WhyChooseUsSection({ reasons }) {
  return (
    <section className="py-20 relative" id="why-choose-us">
      <div className="container-main">
        <SectionTitle title="Why Choose Us" subtitle="What Makes Us Special" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -8, scale: 1.03 }}
              className="glass-card p-6 text-center group hover:border-brand-yellow/20 transition-all duration-500"
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-brand-red to-brand-orange flex items-center justify-center text-white text-2xl mx-auto mb-4 group-hover:shadow-[0_0_30px_rgba(227,24,24,0.3)] transition-shadow">
                {item.icon}
              </div>
              <h3 className="font-heading text-lg text-brand-yellow tracking-wider uppercase mb-2">
                {item.title}
              </h3>
              <p className="text-brand-gray text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
