'use client';

import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function Navbar() {
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();
  const navRef = useRef(null);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 w-[95%] max-w-6xl z-50 pointer-events-none">
      <motion.nav 
        ref={navRef}
        initial={{ y: -100, opacity: 0 }}
        animate={{ 
          y: hidden ? -120 : 0, 
          opacity: 1 
        }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="pointer-events-auto w-full px-6 py-3 flex justify-between items-center bg-slate-900/70 backdrop-blur-md rounded-full border border-white/10 shadow-2xl shadow-blue-500/5"
      >
        <div className="text-lg md:text-xl font-black text-white tracking-tighter shrink-0">NAHINBUILDS</div>
        <div className="hidden md:flex items-center gap-8">
          <a className="font-body-md text-xs font-medium uppercase tracking-widest text-blue-400 border-b border-blue-500 pb-1 hover:scale-105 transition-all duration-300" href="#hero">Work</a>
          <a className="font-body-md text-xs font-medium uppercase tracking-widest text-slate-400 hover:text-white hover:scale-105 transition-all duration-300" href="#what-i-build">What I Build</a>
          <a className="font-body-md text-xs font-medium uppercase tracking-widest text-slate-400 hover:text-white hover:scale-105 transition-all duration-300" href="#achievements">Achievement</a>
          <a className="font-body-md text-xs font-medium uppercase tracking-widest text-slate-400 hover:text-white hover:scale-105 transition-all duration-300" href="#skillsets">Skill Sets</a>
        </div>
        <button className="bg-gradient-to-r from-[#007AFF] to-[#00C2FF] text-white px-4 md:px-6 py-2 rounded-full font-label-sm text-[14px] md:text-label-sm hover:scale-105 transition-all duration-300 active:scale-95 shrink-0">Hire Me</button>
      </motion.nav>
    </div>
  );
}
