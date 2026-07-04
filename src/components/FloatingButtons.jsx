import { motion } from 'framer-motion';
import { FaWhatsapp, FaPhoneAlt } from 'react-icons/fa';

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
      {/* Call Button */}
      <motion.a
        href="tel:8121667040"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.5, type: 'spring', stiffness: 200 }}
        whileHover={{ scale: 1.15 }}
        whileTap={{ scale: 0.9 }}
        className="relative w-14 h-14 rounded-full bg-blue-500 flex items-center justify-center text-white shadow-[0_4px_20px_rgba(59,130,246,0.5)] hover:shadow-[0_4px_30px_rgba(59,130,246,0.7)] transition-shadow"
        aria-label="Call us"
        id="floating-call-btn"
      >
        <FaPhoneAlt size={20} />
        {/* Pulse ring */}
        <span className="absolute inset-0 rounded-full bg-blue-500/30 animate-[pulse-ring_2s_ease-out_infinite]" />
      </motion.a>

      {/* WhatsApp Button */}
      <motion.a
        href="https://wa.me/918121667040?text=Hi%20Happy%20Wings!%20I%20have%20a%20question%20about%20your%20menu."
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.8, type: 'spring', stiffness: 200 }}
        whileHover={{ scale: 1.15 }}
        whileTap={{ scale: 0.9 }}
        className="relative w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center text-white shadow-[0_4px_20px_rgba(37,211,102,0.5)] hover:shadow-[0_4px_30px_rgba(37,211,102,0.7)] transition-shadow"
        aria-label="Chat on WhatsApp"
        id="floating-whatsapp-btn"
      >
        <FaWhatsapp size={24} />
        {/* Pulse ring */}
        <span className="absolute inset-0 rounded-full bg-[#25D366]/30 animate-[pulse-ring_2s_ease-out_infinite_0.5s]" />
      </motion.a>
    </div>
  );
}
