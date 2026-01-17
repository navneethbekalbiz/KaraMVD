import React, { useState, useEffect } from 'react';
import { siteConfig } from '../site.config';
import { NavItem } from '../types';
import { NAV_ITEMS } from '../constants';
import { Menu, X, ChevronDown, ChevronRight } from 'lucide-react';
import { Button } from './Button';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  const [brandFirst, ...brandRest] = siteConfig.brandName.split(' ');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleBook = () => {
    window.open(siteConfig.bookingUrl, '_blank');
  };

  const isHome = location.pathname === '/';
  const isVideos = location.pathname === '/videos';

  // Dynamic text color based on route and scroll state
  // On Videos page (dark bg), we want white text when not scrolled.
  // When scrolled (sand bg), we want obsidian text.
  const isDarkBg = isVideos && !isScrolled;
  const textColor = isDarkBg ? 'text-white' : 'text-obsidian';
  const logoBorderColor = isDarkBg ? 'border-white/20' : 'border-obsidian/20';
  const logoRingColor = isDarkBg ? 'border-white/10' : 'border-obsidian/10';

  // Desktop Dropdown variants
  const dropdownVariants = {
    hidden: {
      opacity: 0,
      y: 10,
      pointerEvents: "none" as const,
      transition: { duration: 0.1, ease: "easeIn" }
    },
    visible: {
      opacity: 1,
      y: 0,
      pointerEvents: "auto" as const,
      transition: { duration: 0.2, ease: "easeOut" }
    },
    exit: {
      opacity: 0,
      y: 5,
      pointerEvents: "none" as const,
      transition: { duration: 0.1, ease: "easeIn" }
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled
          ? 'bg-sand/90 backdrop-blur-md py-4 border-b border-obsidian/5 shadow-sm'
          : 'bg-transparent py-6 md:py-8 border-transparent'
          }`}
      >
        <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="relative z-50 flex items-center gap-2 group">
            {/* Abstract Icon */}
            <div className={`w-8 h-8 rounded-full bg-gradient-to-tr from-gold to-sand border ${logoRingColor} flex items-center justify-center group-hover:rotate-45 transition-transform duration-500`}>
              <div className={`w-4 h-4 border ${logoBorderColor} rounded-full`}></div>
            </div>
            <span className={`text-xl md:text-2xl font-display font-semibold tracking-wide ${textColor} transition-colors duration-300`}>
              {brandFirst} <span className="font-light">{brandRest.join(' ')}</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <div
                key={item.label}
                className="relative group h-full py-2"
                onMouseEnter={() => setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {/* Parent Link */}
                {item.href.startsWith('/') ? (
                  <Link
                    to={item.href}
                    className={`font-sans text-sm tracking-widest uppercase ${textColor} hover:text-gold transition-colors flex items-center gap-1`}
                  >
                    {item.label} {item.children && <ChevronDown size={14} />}
                  </Link>
                ) : (
                  <a
                    href={isHome ? item.href : `/${item.href}`}
                    className={`font-sans text-sm tracking-widest uppercase ${textColor} hover:text-gold transition-colors flex items-center gap-1`}
                  >
                    {item.label} {item.children && <ChevronDown size={14} />}
                  </a>
                )}

                {/* Dropdown Menu */}
                {item.children && (
                  <motion.div
                    variants={dropdownVariants}
                    initial="hidden"
                    animate={activeDropdown === item.label ? "visible" : "hidden"}
                    className="absolute top-full left-1/2 -translate-x-1/2 pt-4 w-56"
                  >
                    <div className="bg-white/95 backdrop-blur-md border border-obsidian/5 rounded-2xl shadow-angled overflow-hidden p-2">
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          to={`/${child.href}`}
                          className="block px-4 py-3 text-sm font-sans text-obsidian/80 hover:text-obsidian hover:bg-sand/30 rounded-xl transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile Menu & CTA */}
          <div className="flex items-center gap-4">
            <Button
              variant="primary"
              className="hidden md:block !py-3 !px-8 !rounded-full !text-xs !bg-charcoal !text-sand hover:!bg-obsidian"
              onClick={handleBook}
            >
              Book Now
            </Button>

            <button
              className={`md:hidden relative z-50 p-3 rounded-full transition-colors ${isDarkBg ? 'bg-white/10 text-white hover:bg-white/20' : 'bg-obsidian text-sand hover:bg-charcoal'}`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-sand z-40 pt-32 pb-12 px-6 overflow-y-auto"
          >
            <div className="container mx-auto max-w-md flex flex-col space-y-6">
              {NAV_ITEMS.map((item) => (
                <MobileNavItem key={item.label} item={item} setIsOpen={setIsMobileMenuOpen} isHome={isHome} />
              ))}
              <div className="mt-8">
                <Button
                  variant="primary"
                  className="w-full !py-4"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    handleBook();
                  }}
                >
                  Book Consultation
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

// Sub-component for Mobile Nav Items (Accordion logic)
const MobileNavItem = ({ item, setIsOpen, isHome }: { item: NavItem, setIsOpen: (val: boolean) => void, isHome: boolean }) => {
  const [isOpen, setOpen] = useState(false);
  const hasChildren = item.children && item.children.length > 0;

  return (
    <div className="border-b border-obsidian/5 pb-4">
      <div className="flex items-center justify-between">
        <a
          href={!hasChildren ? (isHome ? item.href : `/${item.href}`) : '#'} // Don't navigate parent if it has children in mobile view for accordion behavior
          onClick={(e) => {
            if (hasChildren) {
              e.preventDefault();
              setOpen(!isOpen);
            } else {
              setIsOpen(false);
            }
          }}
          className="font-display text-2xl text-obsidian flex-grow"
        >
          {item.label}
        </a>
        {hasChildren && (
          <button onClick={() => setOpen(!isOpen)} className="p-2">
            <ChevronRight size={20} className={`transform transition-transform duration-300 ${isOpen ? 'rotate-90' : ''}`} />
          </button>
        )}
      </div>

      <AnimatePresence>
        {isOpen && hasChildren && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden pl-4 pt-4 space-y-3"
          >
            {item.children!.map((child) => (
              <a
                key={child.label}
                href={isHome ? child.href : `/${child.href}`}
                onClick={() => setIsOpen(false)}
                className="block font-sans text-base text-obsidian/70"
              >
                {child.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};