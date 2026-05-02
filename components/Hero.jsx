'use client';
import Image from 'next/image';
import profileImg from '@/assets/DP.jpg';
import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function Hero() {
  const statsRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const stats = statsRef.current.querySelectorAll('.stat-number');
    
    stats.forEach((stat) => {
      const target = parseInt(stat.getAttribute('data-target'));
      gsap.fromTo(stat, 
        { innerText: 0 },
        { 
          innerText: target,
          duration: 2,
          snap: { innerText: 1 },
          scrollTrigger: {
            trigger: stat,
            start: "top 90%",
          }
        }
      );
    });
  }, []);

  const name = "Hi! I'm Nahin Ahmed";
  const words = name.split(" ");

  const containerVars = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const childVars = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <section id="hero" className="relative pt-48 pb-24 px-gutter container-max mx-auto">
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-full h-[600px] hero-glow -z-10"></div>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 space-y-8">
          <motion.h1 
            variants={containerVars}
            initial="initial"
            animate="animate"
            className="font-display-xl text-display-xl text-white"
          >
            {words.map((word, i) => (
              <motion.span key={i} variants={childVars} className="inline-block mr-3">
                {word}
              </motion.span>
            ))}
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="font-body-lg text-body-lg text-on-surface-variant max-w-xl"
          >
            I am a web developer with 1 year of experience in web development. I am a quick learner and always eager to expand my skill set. I am also passionate about learning new things and always looking for opportunities to grow as a developer.
          </motion.p>

          <div className="flex flex-wrap gap-4 pt-4">
            <motion.button 
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ type: "spring", stiffness: 100, delay: 1.2 }}
              className="bg-gradient-to-r from-[#007AFF] to-[#00C2FF] text-white px-8 py-4 rounded-full font-label-sm text-label-sm hover:opacity-90 transition-all"
            >
              Let&apos;s Connect
            </motion.button>
            <motion.button 
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ type: "spring", stiffness: 100, delay: 1.4 }}
              className="border border-primary text-primary px-8 py-4 rounded-full font-label-sm text-label-sm hover:bg-primary/5 transition-all"
            >
              See My Work
            </motion.button>
          </div>
          
          <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-12">
            <div className="glass-card p-6 rounded-xl border-l-4 border-l-primary">
              <div className="text-white font-bold text-2xl flex items-center">
                <span className="stat-number" data-target="100">0</span>+
              </div>
              <div className="text-on-surface-variant text-xs uppercase tracking-widest mt-1">Coding Hours</div>
            </div>
            <div className="glass-card p-6 rounded-xl border-l-4 border-l-secondary">
              <div className="text-white font-bold text-2xl flex items-center">
                <span className="stat-number" data-target="10">0</span>+
              </div>
              <div className="text-on-surface-variant text-xs uppercase tracking-widest mt-1">Projects Done</div>
            </div>
            <div className="glass-card p-6 rounded-xl border-l-4 border-l-secondary">
              <div className="text-white font-bold text-2xl flex items-center">
                <span className="stat-number" data-target="1">0</span>+
              </div>
              <div className="text-on-surface-variant text-xs uppercase tracking-widest mt-1">Years Exp.</div>
            </div>
          </div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, x: 100, scale: 0.8 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="lg:col-span-5 relative"
        >
          <div className="aspect-square rounded-3xl overflow-hidden border border-white/10 shadow-2xl relative z-10">
            <Image 
              src={profileImg} 
              alt="Professional headshot of Nahin Ahmed" 
              fill
              className="object-cover" 
              priority
            />
          </div>
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/20 blur-3xl rounded-full"></div>
          <div className="absolute -top-6 -left-6 w-48 h-48 bg-secondary/10 blur-3xl rounded-full"></div>
        </motion.div>
      </div>
    </section>
  );
}
