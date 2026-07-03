import { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import appLogo from '../assets/logo/app-logo.jpeg';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Menu', path: '/menu' },
  { name: 'Offers', path: '/offers' },
  { name: 'About Us', path: '/about' },
  { name: 'Contact', path: '/contact' },
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

      {/* Ultra-Premium Full-Screen Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 h-[100dvh] w-full bg-brand-dark/95 backdrop-blur-2xl z-[150] lg:hidden flex flex-col overflow-y-auto"
          >
            {/* Top Bar inside Menu */}
            <div className="flex items-center justify-between p-6">
              <span className="font-brand-alt text-2xl text-brand-yellow">Happy Wings</span>
              <button
                onClick={() => setMobileOpen(false)}
                className="text-brand-white text-3xl p-2 bg-white/5 hover:bg-white/10 rounded-full transition-colors"
                aria-label="Close menu"
              >
                <HiX />
              </button>
            </div>

            {/* Decorative Orbs */}
            <div className="absolute top-1/4 left-0 w-64 h-64 bg-brand-red/10 blur-[80px] rounded-full pointer-events-none" />
            <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-brand-orange/10 blur-[80px] rounded-full pointer-events-none" />

            <div className="flex-1 flex flex-col items-center justify-center gap-6 px-6 relative z-10">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.path}
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.1 + i * 0.1, duration: 0.5, ease: "easeOut" }}
                >
                  <NavLink
                    to={link.path}
                    onClick={() => setMobileOpen(false)}
                    className={({ isActive }) =>
                      `relative group block text-center font-heading text-4xl sm:text-5xl uppercase tracking-widest transition-colors duration-300 ${
                        isActive ? 'text-brand-yellow' : 'text-brand-white/80 hover:text-brand-white'
                      }`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        {link.name}
                        {isActive && (
                          <motion.span
                            layoutId="mobile-nav-underline"
                            className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-12 h-1 bg-gradient-to-r from-brand-red to-brand-yellow rounded-full"
                          />
                        )}
                      </>
                    )}
                  </NavLink>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.4 }}
              className="p-8 pb-12 mt-auto relative z-10"
            >
              <Link
                to="/menu"
                onClick={() => setMobileOpen(false)}
                className="w-full flex items-center justify-center btn-glow btn-glow-red text-xl py-5 rounded-2xl shadow-[0_10px_40px_rgba(227,24,24,0.4)] tracking-widest"
              >
                🍽️ ORDER NOW
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
