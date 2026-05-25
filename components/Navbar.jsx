'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('about');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Monitor page scroll to highlight active link and add shadow on scroll
  useEffect(() => {
    const handleScroll = () => {
      // Background scroll shadow trigger
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Track active section for green underline navigation indicator
      const sections = ['about', 'what-i-build', 'skillsets', 'qualifications', 'achievements', 'footer'];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'ABOUT', href: '/#about', id: 'about' },
    { label: 'PROJECTS', href: '/#what-i-build', id: 'what-i-build' },
    { label: 'SKILLS', href: '/#skillsets', id: 'skillsets' },
    { label: 'EXPERIENCE', href: '/#qualifications', id: 'qualifications' },
    { label: 'ACHIEVEMENTS', href: '/#achievements', id: 'achievements' },
    { label: 'CONTACT', href: '/#footer', id: 'footer' }
  ];

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-white/95 backdrop-blur-md ${
        scrolled ? 'py-4 shadow-sm border-b border-slate-100' : 'py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-8 flex justify-between items-center">
        {/* Left Side: Circular 'A |' Logo */}
        <Link href="/" className="flex items-center shrink-0">
          <div className="w-10 h-10 flex items-center justify-center relative hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer">
            <Image src="/logo-t.png" alt="Logo" fill={true} />
          </div>
        </Link>

        {/* Right Side: Desktop Navigation links */}
        <nav className="hidden md:flex items-center gap-10">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <Link
                key={item.id}
                href={item.href}
                className={`relative font-bold text-[11px] tracking-wider transition-colors py-1 ${
                  isActive ? 'text-slate-950' : 'text-slate-400 hover:text-slate-900'
                }`}
              >
                {item.label}
                {isActive && (
                  <motion.div 
                    layoutId="navbarUnderline"
                    className="absolute left-0 bottom-[-4px] w-full h-[2.5px] bg-[#D9265F] rounded-full"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Mobile Hamburger menu button */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden flex flex-col justify-center items-center gap-1.5 w-8 h-8 rounded-full border border-slate-100 hover:bg-slate-50 transition-colors"
        >
          <span className={`h-[2px] w-4 bg-slate-950 rounded-full transition-transform duration-300 ${
            mobileMenuOpen ? 'rotate-45 translate-y-[4px]' : ''
          }`} />
          <span className={`h-[2px] w-4 bg-slate-950 rounded-full transition-transform duration-300 ${
            mobileMenuOpen ? '-rotate-45 -translate-y-[4px]' : ''
          }`} />
        </button>
      </div>

      {/* Mobile Drawer menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden w-full bg-white border-t border-slate-100 px-6 py-6 absolute top-full left-0 overflow-hidden shadow-lg"
          >
            <nav className="flex flex-col gap-5">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <Link
                    key={item.id}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`text-[12px] font-bold tracking-wider py-1.5 border-b border-slate-50 flex items-center justify-between ${
                      isActive ? 'text-slate-950' : 'text-slate-400 hover:text-slate-900'
                    }`}
                  >
                    {item.label}
                    {isActive && (
                      <span className="w-2 h-2 rounded-full bg-[#D9265F]" />
                    )}
                  </Link>
                );
              })}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
