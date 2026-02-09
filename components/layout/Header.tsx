import React, { useState, useEffect, useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { createPortal } from 'react-dom';
import { NAV_ITEMS } from '../../constants';
import { Menu, X } from 'lucide-react';

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Desktop Logic: "Inicio" is HIDDEN on home page, visible elsewhere
  const desktopNavItems = useMemo(() => {
    if (location.pathname === '/') {
      return NAV_ITEMS;
    }
    return [{ label: 'Inicio', path: '/' }, ...NAV_ITEMS];
  }, [location.pathname]);

  // Mobile Logic: "Inicio" ALWAYS appears (Untouched for mobile)
  const mobileNavItems = [{ label: 'Inicio', path: '/' }, ...NAV_ITEMS];

  const handleMobileLinkClick = (path: string) => {
    setIsOpen(false);
    if (path === '/' && location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${isScrolled || isOpen ? 'bg-white/95 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6 md:py-8'
          }`}
      >
        {/* 
           DESKTOP: Full width with extreme horizontal padding for absolute edge alignment
           MOBILE: Standard mobile layout logic preserved
        */}
        <div className="w-full px-6 md:px-16 lg:px-24 flex items-center justify-between">

          {/* LOGO - Extreme Left Absolute */}
          <Link
            to="/"
            className="relative z-50 flex items-center"
          >
            <img
              src="https://i.ibb.co/wZs1yP5F/Logo-completo-camisetas-copia.png"
              alt="Renovamarin - Reformas Integrales Barcelona"
              // UPDATED SIZE: Reduced slightly more to h-6 md:h-10
              className="h-6 md:h-10 w-auto object-contain"
              // Filter calculated to match brand-accent (#C5A059) perfectly
              style={{
                filter: 'brightness(0) saturate(100%) invert(73%) sepia(31%) saturate(958%) hue-rotate(358deg) brightness(89%) contrast(85%)'
              }}
            />
          </Link>

          {/* Desktop Nav - Extreme Right Absolute & Hero Typographic Sync */}
          <nav className="hidden md:flex items-center space-x-10 lg:space-x-14">
            {desktopNavItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`
                  font-sans text-[11.55px] font-medium uppercase tracking-[0.15em] 
                  transition-all duration-300 hover:text-brand-accent 
                  ${location.pathname === item.path ? 'text-brand-accent' : ''} 
                  ${isScrolled ? 'text-stone-900' : 'text-white/90'}
                `}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Toggle - Position and style untouched */}
          <button
            className={`
              md:hidden z-50 p-2 rounded-full transition-all duration-300
              ${isOpen || isScrolled
                ? 'text-stone-900'
                : 'text-white bg-black/10 backdrop-blur-sm'
              }
            `}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Abrir menú"
          >
            {isOpen ?
              <X size={24} /> :
              <Menu size={24} />
            }
          </button>
        </div>
      </header>

      {/* Mobile Nav Overlay - Rendered via Portal, preserved mobile logic */}
      {createPortal(
        <div
          className={`fixed inset-0 bg-white z-40 transform transition-transform duration-500 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'
            } md:hidden flex flex-col items-center justify-center`}
        >
          <nav className="flex flex-col space-y-8 text-center px-6">
            {mobileNavItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => handleMobileLinkClick(item.path)}
                className="font-sans font-medium text-3xl text-stone-900 hover:text-brand-accent transition-colors uppercase tracking-[0.15em]"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>,
        document.body
      )}
    </>
  );
};