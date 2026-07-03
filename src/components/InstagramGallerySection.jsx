import { motion } from 'framer-motion';
import { FaInstagram } from 'react-icons/fa';
import SectionTitle from './SectionTitle';

export default function InstagramGallerySection({ images }) {
  return (
    <section className="py-20 relative" id="instagram-gallery">
      <div className="container-main">
        <SectionTitle title="Follow Us" subtitle="📸 @happywings_siddipet" />

        <div className="flex flex-wrap justify-center gap-3">
          {images.map((img, i) => (
            <motion.a
              key={i}
              href="https://instagram.com/happywings_siddipet"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="relative w-[calc(50%-6px)] sm:w-[calc(33.33%-8px)] lg:w-[calc(20%-10px)] aspect-square max-w-[220px] rounded-xl overflow-hidden group"
            >
              <img src={img} alt={`Gallery ${i + 1}`} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" />
              <div className="absolute inset-0 bg-brand-dark/0 group-hover:bg-brand-dark/60 transition-all duration-300 flex items-center justify-center">
                <FaInstagram className="text-white text-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
