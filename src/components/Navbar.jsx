import { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { FaFacebookF, FaInstagram, FaYoutube, FaHome, FaHamburger, FaFire, FaUsers, FaPhoneAlt, FaChevronRight, FaMotorcycle, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa';
import appLogo from '../assets/logo/app-logo.jpeg';

const navLinks = [
  { name: 'Home', path: '/', icon: <FaHome /> },
  { name: 'Menu', path: '/menu', icon: <FaHamburger /> },
  { name: 'Offers', path: '/offers', icon: <FaFire /> },
  { name: 'About Us', path: '/about', icon: <FaUsers /> },
  { name: 'Contact', path: '/contact', icon: <FaPhoneAlt /> },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { pathname } = useLocation();
  const isHomePage = pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 100, damping: 20 }}
        className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${scrolled || !isHomePage
            ? 'bg-brand-dark/95 backdrop-blur-md shadow-[0_4px_30px_rgba(227,24,24,0.15)] border-b border-brand-dark-border/40'
            : 'bg-transparent'
          }`}
      >
        <div className="container-main flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group shrink-0" id="nav-logo">
            <motion.img
              src={appLogo}
              alt="Happy Wings Logo"
              whileHover={{ rotate: [0, -5, 5, 0] }}
              transition={{ duration: 0.5 }}
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover border-2 border-brand-orange shadow-[0_0_12px_rgba(255,106,0,0.3)]"
            />
            <div className="flex flex-col leading-tight pt-1">
              <span className="font-brand-alt text-2xl sm:text-3xl md:text-4xl gradient-text-fire leading-none pb-1">
                Happy Wings
              </span>
              <span className="text-[0.45rem] sm:text-[0.55rem] text-brand-yellow tracking-[0.1em] sm:tracking-[0.15em] uppercase hidden xs:block">
                The Joy of Crispy Fried Chicken
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  id={`nav-${link.name.toLowerCase().replace(/\s/g, '-')}`}
                  className={({ isActive }) =>
                    `relative px-4 py-2 font-heading text-sm tracking-wider uppercase transition-colors duration-300 ${isActive ? 'text-brand-yellow' : 'text-white hover:text-brand-yellow'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {link.name}
                      {isActive && (
                        <motion.div
                          layoutId="nav-underline"
                          className="absolute bottom-0 left-2 right-2 h-[3px] rounded-full bg-gradient-to-r from-brand-red via-brand-orange to-brand-yellow"
                          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                        />
                      )}
                    </>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <Link
              to="/menu"
              className="inline-flex btn-glow btn-glow-red text-sm py-2.5 px-6"
              id="nav-order-cta"
            >
              View Menu
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-brand-white text-2xl sm:text-3xl p-2 z-[110] relative"
            id="nav-mobile-toggle"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <HiX /> : <HiMenuAlt3 />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Matching User Image */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 h-[100dvh] w-full bg-[#0a0a0a] z-[150] lg:hidden flex flex-col overflow-y-auto"
          >
            {/* Background floating icons as subtle watermark */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-5">
               <FaHamburger className="absolute top-[20%] -left-10 text-[200px] text-white/30 rotate-12" />
               <FaFire className="absolute bottom-[40%] -right-10 text-[250px] text-white/30 -rotate-12" />
            </div>

            {/* Background Fire Particles */}
            <div className="absolute inset-0 opacity-30 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(255,100,0,0.1) 0%, transparent 70%)' }} />

            {/* Top Bar inside Menu */}
            <div className="flex items-center justify-between p-6 relative z-20">
              <span className="font-brand-alt text-3xl text-brand-yellow drop-shadow-md">Happy Wings</span>
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => setMobileOpen(false)}
                className="text-brand-white text-2xl p-2.5 rounded-full border-2 border-brand-orange shadow-[0_0_15px_rgba(255,106,0,0.4)] bg-black/50"
                aria-label="Close menu"
              >
                <HiX />
              </motion.button>
            </div>

            {/* Center Chicken Logo */}
            <div className="flex justify-center mt-2 mb-8 relative z-20">
              <img 
                src={appLogo} 
                alt="Happy Wings" 
                className="w-28 h-28 rounded-full border-2 border-brand-orange shadow-[0_0_30px_rgba(255,106,0,0.5)] object-cover" 
              />
            </div>

            {/* Navigation Links */}
            <div className="flex-1 flex flex-col px-10 relative z-20">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileOpen(false)}
                  className="group block py-4 border-b border-white/5 last:border-0"
                >
                  {({ isActive }) => (
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 relative">
                        <span className={`text-2xl drop-shadow-md transition-colors ${isActive ? 'text-brand-yellow' : 'text-brand-orange'}`}>{link.icon}</span>
                        <div className="relative">
                           <span className={`font-heading text-3xl tracking-widest uppercase transition-colors ${isActive ? 'text-brand-yellow' : 'text-brand-white group-hover:text-brand-white/80'}`}>
                             {link.name}
                           </span>
                           {isActive && <div className="absolute -bottom-1 left-0 w-full h-[3px] bg-gradient-to-r from-brand-orange to-transparent" />}
                        </div>
                      </div>
                      {isActive && (
                        <FaChevronRight className="text-brand-orange text-xl drop-shadow-[0_0_10px_rgba(255,106,0,0.8)]" />
                      )}
                    </div>
                  )}
                </NavLink>
              ))}
            </div>

            {/* Bottom Actions */}
            <div className="p-8 pb-10 mt-auto relative z-20 w-full flex flex-col items-center gap-6">
              <motion.a
                href="https://www.zomato.com/siddipet/happy-wings-siddipet-locality/order"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileOpen(false)}
                whileTap={{ scale: 0.95 }}
                className="w-full max-w-sm flex items-center justify-between bg-gradient-to-r from-red-600 to-brand-orange text-white font-heading uppercase text-xl py-4 px-6 rounded-full shadow-[0_5px_20px_rgba(255,50,0,0.5)] tracking-widest border border-orange-400/30"
              >
                <FaMotorcycle className="text-3xl" />
                <span className="flex-1 text-center font-bold">ORDER ON ZOMATO</span>
                <FaChevronRight className="text-2xl" />
              </motion.a>
              
              {/* Social Links Footer */}
              <div className="flex items-center justify-center gap-3 mt-2 text-[10px] sm:text-[11px] font-semibold tracking-wider text-brand-white flex-wrap">
                <a href="https://instagram.com/happywings_siddipet" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-brand-yellow transition-colors"><FaInstagram className="text-brand-red text-base" /> INSTAGRAM</a>
                <span className="text-white/20 hidden sm:inline">|</span>
                <a href="https://maps.google.com/?q=Happy+Wings,Housing+Board+Colony,Siddipet" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-brand-yellow transition-colors"><FaMapMarkerAlt className="text-brand-orange text-base" /> GOOGLE MAPS</a>
                <span className="text-white/20 hidden sm:inline">|</span>
                <a href="https://wa.me/918121667040" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-brand-yellow transition-colors"><FaWhatsapp className="text-green-500 text-base" /> WHATSAPP</a>
                <span className="text-white/20 hidden sm:inline">|</span>
                <a href="https://youtube.com/@happywings_siddipet" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-brand-yellow transition-colors"><FaYoutube className="text-red-500 text-base" /> YOUTUBE</a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
