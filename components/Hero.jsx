'use client';

import Image from 'next/image';
import profileImg from '@/assets/DP.jpg';
import { motion } from 'framer-motion';

export default function Hero() {
  const containerVars = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const badgeVars = {
    initial: { opacity: 0, y: -20 },
    animate: { 
      opacity: 1, 
      y: 0, 
      transition: { type: "spring", stiffness: 100, damping: 15 } 
    },
  };

  const titleVars = {
    initial: { opacity: 0, y: 30 },
    animate: { 
      opacity: 1, 
      y: 0, 
      transition: { type: "spring", stiffness: 70, damping: 14 } 
    },
  };

  const descVars = {
    initial: { opacity: 0, y: 25 },
    animate: { 
      opacity: 1, 
      y: 0, 
      transition: { type: "spring", stiffness: 60, damping: 15 } 
    },
  };

  const buttonsVars = {
    initial: { opacity: 0, y: 20 },
    animate: { 
      opacity: 1, 
      y: 0, 
      transition: { type: "spring", stiffness: 70, damping: 14 } 
    },
  };

  const avatarVars = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { 
      opacity: 1, 
      scale: 1, 
      transition: { type: "spring", stiffness: 50, damping: 12, delay: 0.4 } 
    },
  };

  return (
<section id="hero" className="relative w-full bg-white pt-36 pb-20 px-6 overflow-hidden flex flex-col items-center justify-center">
      {/* Background soft glow elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] bg-[radial-gradient(circle_at_top,rgba(217,38,95,0.03)_0%,rgba(255,255,255,0)_60%)] pointer-events-none"></div>

      <motion.div 
        variants={containerVars}
        initial="initial"
        animate="animate"
        className="max-w-4xl mx-auto flex flex-col items-center text-center z-10"
      >
        {/* Available for Work Badge */}
        <motion.div 
          variants={badgeVars}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-100 bg-emerald-50/50 shadow-sm"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-xs font-semibold text-emerald-700 tracking-wide">
            Available for work!
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1 
          variants={titleVars}
          className="font-extrabold text-4xl md:text-5xl lg:text-6xl text-slate-950 mt-6 leading-tight tracking-tight max-w-3xl"
        >
          Hi I&apos;m a <span className="text-[#D9265F]">Full-Stack Developer</span> building real-world web applications with the MERN stack.
        </motion.h1>

        {/* Subheading / Description */}
        <motion.p 
          variants={descVars}
          className="text-slate-500 font-medium text-base md:text-lg max-w-2xl mt-6 leading-relaxed"
        >
          A CSE student at BUBT, Dhaka. Passionate about building scalable full-stack web apps with Next.js, Node.js, and MongoDB — and sharpening problem-solving skills through competitive programming.
        </motion.p>

        {/* Buttons & Socials Row */}
        <motion.div 
          variants={buttonsVars}
          className="flex flex-wrap items-center justify-center gap-4 mt-8"
        >
          {/* Get In Touch */}
          <button 
            onClick={() => {
              const el = document.getElementById('footer');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="group bg-slate-950 hover:bg-slate-800 text-white font-semibold px-6 py-3 rounded-full text-sm flex items-center gap-2 transition-all shadow-sm active:scale-95 cursor-pointer"
          >
            Get in touch
            <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </button>

          {/* Download Resume */}
          <a 
            href="/Nahin_Resume.pdf"
            download="Nahin_Resume.pdf"
            className="group border border-slate-200 hover:bg-slate-50 text-slate-700 font-semibold px-6 py-3 rounded-full text-sm flex items-center gap-2 transition-all shadow-sm active:scale-95 cursor-pointer bg-white"
          >
            Download Resume
            <svg className="w-4 h-4 text-slate-500 group-hover:text-slate-700 transition-colors" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
            </svg>
          </a>

          {/* LinkedIn */}
          <a 
            href="https://www.linkedin.com/in/nahinahmed/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="w-11 h-11 border border-slate-200 bg-white rounded-full flex items-center justify-center hover:bg-slate-50 text-slate-600 hover:text-slate-900 transition-all shadow-sm active:scale-95"
            aria-label="LinkedIn Profile"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          </a>

          {/* GitHub */}
          <a 
            href="https://github.com/nahin113" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="w-11 h-11 border border-slate-200 bg-white rounded-full flex items-center justify-center hover:bg-slate-50 text-slate-600 hover:text-slate-900 transition-all shadow-sm active:scale-95"
            aria-label="GitHub Profile"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.137 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z" clipRule="evenodd" />
            </svg>
          </a>
        </motion.div>

        {/* Circular Avatar */}
        <motion.div 
          variants={avatarVars}
          className="mt-16 flex justify-center"
        >
          <div className="relative w-44 h-44 md:w-52 md:h-52 rounded-full border-[10px] border-white shadow-[0_15px_30px_-5px_rgba(0,0,0,0.1),0_10px_15px_-10px_rgba(0,0,0,0.1)] bg-[#a24444] overflow-hidden">
            <Image 
              src={profileImg} 
              alt="Nahin Ahmed - Full Stack Developer" 
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
