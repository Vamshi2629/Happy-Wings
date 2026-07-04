import { motion } from 'framer-motion';
import { FaYoutube } from 'react-icons/fa';
import { SiZomato } from 'react-icons/si';
import SectionTitle from './SectionTitle';

export default function FindUsSection() {
  return (
    <section className="py-20 relative" id="find-us">
      <div className="container-main">
        <SectionTitle title="Find Us" subtitle="📍 Visit Us Today" />

        <div className="flex flex-col lg:flex-row gap-8 items-stretch">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="w-full lg:w-1/2 rounded-2xl overflow-hidden border border-brand-dark-border h-[400px] lg:h-[480px]"
          >
            <iframe
              title="Happy Wings Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4666.769040701011!2d78.8555708!3d18.086557499999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcc93e5674b9ce9%3A0x8d575f65c784715d!2sHappy%20Wings!5e1!3m2!1sen!2sin!4v1783093216337!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) brightness(0.9) contrast(1.1)' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="w-full lg:w-1/2 glass-card p-8 sm:p-10 flex flex-col justify-between"
          >
            <div>
              <h3 className="font-semibold text-2xl text-brand-white tracking-wide uppercase mb-6 pb-3 border-b border-brand-dark-border flex items-center gap-2">
                📍 Contact Details
              </h3>

              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <span className="text-brand-orange text-lg shrink-0 mt-0.5">📌</span>
                  <div>
                    <p className="text-brand-yellow text-xs font-semibold tracking-widest uppercase mb-1">Address</p>
                    <p className="text-brand-gray-light text-sm leading-relaxed">
                      Housing Board Colony, Near Punjab National Bank, Beside BRS Party Office, SIDDIPET
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <span className="text-brand-orange text-lg shrink-0 mt-0.5">📞</span>
                  <div>
                    <p className="text-brand-yellow text-xs font-semibold tracking-widest uppercase mb-1">Phone</p>
                    <a href="tel:8121667040" className="text-brand-white text-sm hover:text-brand-red transition-colors font-medium">
                      8121667040
                    </a>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <span className="text-brand-orange text-lg shrink-0 mt-0.5">✉️</span>
                  <div>
                    <p className="text-brand-yellow text-xs font-semibold tracking-widest uppercase mb-1">Email</p>
                    <a href="mailto:happywings119@gmail.com" className="text-brand-white text-sm hover:text-brand-red transition-colors font-medium">
                      happywings119@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <span className="text-brand-orange text-lg shrink-0 mt-0.5">⏰</span>
                  <div>
                    <p className="text-brand-yellow text-xs font-semibold tracking-widest uppercase mb-1">Hours</p>
                    <p className="text-brand-gray-light text-sm font-medium">Mon – Sun: 4 PM – 11 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Action buttons */}
            <div className="mt-8 flex flex-col gap-3">
              <a
                href="https://wa.me/918121667040"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-glow btn-glow-red text-center text-sm w-full py-3"
              >
                💬 Chat with Us on WhatsApp
              </a>

              {/* Zomato Order Button */}
              <a
                href="https://www.zomato.com/siddipet/happy-wings-siddipet-locality/order"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2.5 w-full py-3 rounded-xl font-semibold text-sm text-white bg-[#E23744] hover:bg-[#c92d38] shadow-[0_4px_20px_rgba(226,55,68,0.4)] hover:shadow-[0_4px_30px_rgba(226,55,68,0.6)] transition-all duration-300"
              >
                <SiZomato size={18} />
                Order Now on Zomato
              </a>

              {/* YouTube Link */}
              <a
                href="https://youtube.com/@happywings_siddipet"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2.5 w-full py-3 rounded-xl font-semibold text-sm text-white bg-[#FF0000] hover:bg-[#cc0000] shadow-[0_4px_20px_rgba(255,0,0,0.3)] hover:shadow-[0_4px_30px_rgba(255,0,0,0.5)] transition-all duration-300"
              >
                <FaYoutube size={20} />
                Watch Us on YouTube
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
