// export default function Services() {
//   return (
//     <section className="py-section-gap px-gutter container-max mx-auto">
//       <div className="text-center mb-16">
//         <span className="text-primary font-label-sm text-label-sm uppercase tracking-widest block mb-4">My Expertise</span>
//         <h2 className="font-headline-lg text-headline-lg text-white">High-Impact Services</h2>
//       </div>
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//         {/* Web Dev Card */}
//         <div className="glass-card p-card-padding rounded-2xl group hover:border-primary transition-all duration-500">
//           <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-6">
//             <span className="material-symbols-outlined text-3xl">code</span>
//           </div>
//           <h3 className="font-headline-md text-2xl text-white mb-4">Web Development</h3>
//           <p className="text-on-surface-variant">Building responsive, high-performance web applications using the latest modern frameworks and scalable architectures.</p>
//           <div className="mt-8 border-t border-white/5 pt-6 opacity-0 group-hover:opacity-100 transition-opacity">
//             <span className="text-primary font-label-sm text-xs">LEARN MORE →</span>
//           </div>
//         </div>
        
//         {/* Cross Platform Card */}
//         <div className="glass-card p-card-padding rounded-2xl group hover:border-secondary transition-all duration-500">
//           <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary mb-6">
//             <span className="material-symbols-outlined text-3xl">devices</span>
//           </div>
//           <h3 className="font-headline-md text-2xl text-white mb-4">Cross-Platform</h3>
//           <p className="text-on-surface-variant">Seamlessly delivering experiences across iOS, Android, and Web from a single, robust codebase with native-feel performance.</p>
//           <div className="mt-8 border-t border-white/5 pt-6 opacity-0 group-hover:opacity-100 transition-opacity">
//             <span className="text-secondary font-label-sm text-xs">LEARN MORE →</span>
//           </div>
//         </div>
        
//         {/* UI/UX Card */}
//         <div className="glass-card p-card-padding rounded-2xl group hover:border-primary transition-all duration-500">
//           <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-6">
//             <span className="material-symbols-outlined text-3xl">token</span>
//           </div>
//           <h3 className="font-headline-md text-2xl text-white mb-4">UI/UX Design</h3>
//           <p className="text-on-surface-variant">Creating intuitive, human-centered interfaces that focus on user flow, conversion, and brand identity alignment.</p>
//           <div className="mt-8 border-t border-white/5 pt-6 opacity-0 group-hover:opacity-100 transition-opacity">
//             <span className="text-primary font-label-sm text-xs">LEARN MORE →</span>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }



'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function WhatIBuild() {
  const sectionRef = useRef(null);
  const cardsRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    // Header animation
    gsap.fromTo(sectionRef.current.querySelector('h2'),
      { y: 50, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        duration: 1, 
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        }
      }
    );

    // Cards staggered entrance
    gsap.fromTo(cardsRef.current.children,
      { y: 100, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        duration: 0.8, 
        stagger: 0.2,
        scrollTrigger: {
          trigger: cardsRef.current,
          start: "top 75%",
        }
      }
    );
  }, []);

  return (
    <section ref={sectionRef} className="py-section-gap px-gutter container-max mx-auto">
      <div className="text-center mb-16">
        <span className="text-primary font-label-sm text-label-sm uppercase tracking-widest block mb-4">My Work</span>
        <h2 className="font-headline-lg text-headline-lg text-white">What I Build</h2>
      </div>
      <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Relationship Tracker */}
        <div className="glass-card p-card-padding rounded-2xl group hover:border-primary transition-all duration-500 p-4">
          <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-6">
            <span className="material-symbols-outlined text-3xl">favorite</span>
          </div>
          <h3 className="font-headline-md text-2xl text-white mb-4">Relationship Tracker</h3>
          <p className="text-on-surface-variant">A Next.js app for tracking relationships with timeline logging, interaction analytics, and a fully responsive UI architecture.</p>
          <div className="mt-8 border-t border-white/5 pt-6 opacity-0 group-hover:opacity-100 transition-opacity">
            <span className="text-primary font-label-sm text-xs">VIEW ON GITHUB →</span>
          </div>
        </div>

        {/* Book Library SPA */}
        <div className="glass-card p-card-padding rounded-2xl group hover:border-secondary transition-all duration-500 p-4">
          <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary mb-6">
            <span className="material-symbols-outlined text-3xl">menu_book</span>
          </div>
          <h3 className="font-headline-md text-2xl text-white mb-4">Book Library SPA</h3>
          <p className="text-on-surface-variant">A React SPA with client-side routing and state-driven book list management — readlist, wishlist, and purchases — with dynamic sorting and filtering.</p>
          <div className="mt-8 border-t border-white/5 pt-6 opacity-0 group-hover:opacity-100 transition-opacity">
            <span className="text-secondary font-label-sm text-xs">VIEW ON GITHUB →</span>
          </div>
        </div>

        {/* News Platform */}
        <div className="glass-card p-card-padding rounded-2xl group hover:border-primary transition-all duration-500 p-4">
          <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-6">
            <span className="material-symbols-outlined text-3xl">newspaper</span>
          </div>
          <h3 className="font-headline-md text-2xl text-white mb-4">News Platform</h3>
          <p className="text-on-surface-variant">A modern Next.js news platform with category-based browsing, dynamic article views, and secure authentication for personalized access.</p>
          <div className="mt-8 border-t border-white/5 pt-6 opacity-0 group-hover:opacity-100 transition-opacity">
            <span className="text-primary font-label-sm text-xs">VIEW ON GITHUB →</span>
          </div>
        </div>

        {/* Pulse Wire */}
        <div className="glass-card p-card-padding rounded-2xl group hover:border-secondary transition-all duration-500 p-4">
          <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary mb-6">
            <span className="material-symbols-outlined text-3xl">bug_report</span>
          </div>
          <h3 className="font-headline-md text-2xl text-white mb-4">Pulse Wire</h3>
          <p className="text-on-surface-variant">A responsive GitHub Issues tracking dashboard built with Vanilla JS and REST APIs — featuring filtering, search, modal views, and dynamic status indicators.</p>
          <div className="mt-8 border-t border-white/5 pt-6 opacity-0 group-hover:opacity-100 transition-opacity">
            <span className="text-secondary font-label-sm text-xs">VIEW ON GITHUB →</span>
          </div>
        </div>

        {/* ToolNest */}
        <div className="glass-card p-card-padding rounded-2xl group hover:border-primary transition-all duration-500 p-4">
          <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-6">
            <span className="material-symbols-outlined text-3xl">storefront</span>
          </div>
          <h3 className="font-headline-md text-2xl text-white mb-4">ToolNest</h3>
          <p className="text-on-surface-variant">A modern digital tools marketplace built with React — featuring dynamic product browsing, cart management, and a clean responsive UI.</p>
          <div className="mt-8 border-t border-white/5 pt-6 opacity-0 group-hover:opacity-100 transition-opacity">
            <span className="text-primary font-label-sm text-xs">VIEW ON GITHUB →</span>
          </div>
        </div>

      </div>
    </section>
  );
}