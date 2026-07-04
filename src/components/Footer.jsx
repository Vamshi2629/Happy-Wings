import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaInstagram, FaWhatsapp, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaYoutube } from 'react-icons/fa';
import { SiZomato } from 'react-icons/si';
import appLogo from '../assets/logo/app-logo.jpeg';

const quickLinks = [
  { name: 'Home', path: '/' },
  { name: 'Menu', path: '/menu' },
  { name: 'Offers', path: '/offers' },
  { name: 'About Us', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

export default function Footer() {
  return (
    <footer className="relative bg-brand-dark-lighter pt-16 pb-6 overflow-hidden">
      {/* Top flame divider */}
      <div className="section-divider absolute top-0 left-0 w-full" />

      {/* Decorative glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-brand-red/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container-main relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-16 mb-12">
          {/* Brand Column */}
          <div className="text-center sm:text-left">
            <Link to="/" className="flex items-center justify-center sm:justify-start gap-3 mb-4 group">
              <img
                src={appLogo}
                alt="Happy Wings Logo"
                className="w-12 h-12 rounded-full object-cover border-2 border-brand-orange shadow-[0_0_12px_rgba(255,106,0,0.3)]"
              />
              <div className="flex flex-col leading-tight pt-1">
                <span className="font-brand-alt text-2xl sm:text-3xl gradient-text-fire leading-none">
                  Happy Wings
                </span>
                <span className="text-[0.45rem] sm:text-[0.5rem] text-brand-yellow tracking-[0.1em] sm:tracking-[0.15em] uppercase">
                  The Joy of Crispy Fried Chicken
                </span>
              </div>
            </Link>
            <p className="text-brand-gray text-sm leading-relaxed mb-4">
              Serving the crispiest, juiciest fried chicken in Siddipet. Made fresh daily with our secret blend of spices.
            </p>
            <div className="flex items-center justify-center sm:justify-start gap-2 text-brand-yellow text-xs font-heading tracking-widest uppercase mb-4">
              <span>🍗 100% Fresh</span>
              <span>•</span>
              <span>⭐ Crispy Perfection</span>
            </div>
            {/* Zomato Badge */}
            <a
              href="https://www.zomato.com/siddipet/happy-wings-siddipet-locality/order"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#E23744]/10 border border-[#E23744]/30 hover:bg-[#E23744]/20 hover:border-[#E23744]/60 text-[#E23744] text-xs font-semibold px-3 py-2 rounded-full transition-all duration-300 group"
              aria-label="Order on Zomato"
            >
              <SiZomato size={14} className="group-hover:scale-110 transition-transform" />
              <span>Available on Zomato</span>
            </a>
          </div>

          {/* Quick Links */}
          <div className="text-center sm:text-left">
            <h4 className="font-heading text-lg text-brand-yellow tracking-wider uppercase mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5 flex flex-col items-center sm:items-start">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-brand-gray hover:text-brand-white hover:pl-2 transition-all duration-300 text-sm flex items-center gap-2"
                  >
                    <span className="text-brand-red text-xs">▸</span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-center sm:text-left">
            <h4 className="font-heading text-lg text-brand-yellow tracking-wider uppercase mb-4">
              Contact Us
            </h4>
            <ul className="space-y-3 flex flex-col items-center sm:items-start">
              <li className="flex items-start justify-center sm:justify-start gap-3 text-sm text-brand-gray text-center sm:text-left">
                <FaMapMarkerAlt className="text-brand-red mt-0.5 shrink-0 animate-pulse" />
                <span>Housing Board Colony, Near Punjab National Bank, Beside BRS Party Office, SIDDIPET</span>
              </li>
              <li>
                <a href="tel:8121667040" className="flex items-center justify-center sm:justify-start gap-3 text-sm text-brand-gray hover:text-brand-white transition-colors">
                  <FaPhoneAlt className="text-blue-500 shrink-0" />
                  8121667040
                </a>
              </li>
              <li>
                <a href="mailto:happywings119@gmail.com" className="flex items-center justify-center sm:justify-start gap-3 text-sm text-brand-gray hover:text-brand-white transition-colors">
                  <FaEnvelope className="text-brand-red shrink-0" />
                  happywings119@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Hours & Social */}
          <div className="text-center sm:text-left">
            <h4 className="font-heading text-lg text-brand-yellow tracking-wider uppercase mb-4">
              Hours & Social
            </h4>
            <div className="text-sm text-brand-gray mb-4 space-y-1">
              <p><span className="text-brand-white">Mon – Sun:</span> 4:00 PM – 11:00 PM</p>
              <p className="text-brand-yellow text-xs">Open all 7 days!</p>
            </div>
            <div className="flex items-center justify-center sm:justify-start flex-wrap gap-3 mt-4">
              <motion.a
                href="https://instagram.com/happywings_siddipet"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 flex items-center justify-center text-white hover:shadow-[0_0_20px_rgba(236,72,153,0.5)] transition-shadow"
                aria-label="Instagram"
              >
                <FaInstagram size={18} />
              </motion.a>
              <motion.a
                href="https://youtube.com/@happywings_siddipet"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: -5 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 rounded-full bg-[#FF0000] flex items-center justify-center text-white hover:shadow-[0_0_20px_rgba(255,0,0,0.5)] transition-shadow"
                aria-label="YouTube"
              >
                <FaYoutube size={20} />
              </motion.a>
              <motion.a
                href="https://www.zomato.com/siddipet/happy-wings-siddipet-locality/order"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 rounded-full bg-[#E23744] flex items-center justify-center text-white hover:shadow-[0_0_20px_rgba(226,55,68,0.5)] transition-shadow"
                aria-label="Zomato"
              >
                <SiZomato size={18} />
              </motion.a>
              <motion.a
                href="https://wa.me/918121667040"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: -5 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center text-white hover:shadow-[0_0_20px_rgba(34,197,94,0.5)] transition-shadow"
                aria-label="WhatsApp"
              >
                <FaWhatsapp size={18} />
              </motion.a>
              <motion.a
                href="tel:8121667040"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] transition-shadow"
                aria-label="Call us"
              >
                <FaPhoneAlt size={16} />
              </motion.a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-brand-dark-border pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-brand-gray text-xs text-center md:text-left">
            © {new Date().getFullYear()} Happy Wings. All rights reserved.
          </p>
          <div className="flex items-center gap-3 flex-wrap justify-center">
            <a
              href="https://www.zomato.com/siddipet/happy-wings-siddipet-locality/order"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-[#E23744] text-xs font-semibold hover:text-white transition-colors"
            >
              <SiZomato size={12} /> Order on Zomato
            </a>
            <span className="text-brand-dark-border">•</span>
            <p className="font-heading text-sm tracking-wider">
              <span className="gradient-text-fire">Stay Happy, Eat Happy!</span> 🍗❤️
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
