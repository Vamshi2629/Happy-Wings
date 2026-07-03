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
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 100, damping: 20 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled || !isHomePage
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
            <span className="font-brand text-2xl sm:text-3xl md:text-4xl gradient-text-fire leading-none">
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
                  `relative px-4 py-2 font-heading text-sm tracking-wider uppercase transition-colors duration-300 ${
                    isActive ? 'text-brand-yellow' : 'text-white hover:text-brand-yellow'
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
        <Link
          to="/menu"
          className="hidden lg:inline-flex btn-glow btn-glow-red text-sm py-2.5 px-6"
          id="nav-order-cta"
        >
          View Menu
        </Link>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden text-brand-white text-2xl sm:text-3xl p-2 z-[60] relative"
          id="nav-mobile-toggle"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[51] lg:hidden"
              onClick={() => setMobileOpen(false)}
            />
            {/* Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 35 }}
              className="fixed top-0 right-0 h-full w-[75%] max-w-[320px] bg-brand-dark/98 backdrop-blur-xl z-[55] lg:hidden border-l border-brand-dark-border shadow-[-20px_0_60px_rgba(227,24,24,0.1)]"
            >
              <div className="flex flex-col items-center justify-center h-full gap-2 pt-20">
                {/* Logo in drawer */}
                <img
                  src={appLogo}
                  alt="Happy Wings Logo"
                  className="w-20 h-20 rounded-full object-cover border-2 border-brand-orange mb-4 shadow-[0_0_20px_rgba(255,106,0,0.3)]"
                />
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.path}
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.1 + i * 0.08 }}
                  >
                    <NavLink
                      to={link.path}
                      id={`mobile-nav-${link.name.toLowerCase().replace(/\s/g, '-')}`}
                      onClick={() => setMobileOpen(false)}
                      className={({ isActive }) =>
                        `block py-3 px-8 font-heading text-xl sm:text-2xl tracking-wider uppercase transition-colors ${
                          isActive ? 'text-brand-yellow' : 'text-white hover:text-brand-yellow'
                        }`
                      }
                    >
                      {link.name}
                    </NavLink>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="mt-6"
                >
                  <Link
                    to="/menu"
                    onClick={() => setMobileOpen(false)}
                    className="btn-glow btn-glow-red text-base sm:text-lg"
                    id="mobile-order-cta"
                  >
                    🍽️ View Menu
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
