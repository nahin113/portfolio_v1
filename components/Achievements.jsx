'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import Me from '@/assets/DP.jpg';
import Next from '@/assets/Next.jpg';
import Cgpa from '@/assets/CGPA.png';
import Iupc from '@/assets/IUPC.jpg';

export default function Achievements() {
  const cardsRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    gsap.fromTo(cardsRef.current.children,
      { y: 100, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        duration: 0.8, 
        stagger: 0.2,
        scrollTrigger: {
          trigger: cardsRef.current,
          start: "top 80%",
        }
      }
    );
  }, []);

  const achievements = [
    {
      name: "IUPC – Top 50 Finish",
      role: "Competitive Programming",
      content: "Competed in the Inter-University Programming Contest (IUPC) and secured a place in the top 50 — solving algorithmic challenges under time pressure against university-level programmers.",
      image: Iupc,
      borderColor: "border-t-primary/30"
    },
    {
      name: "CGPA 3.33",
      role: "Academic Achievement",
      content: "Maintained a strong academic record with a CGPA of 3.33 — balancing coursework in computer science fundamentals, algorithms, and software engineering alongside active project development.",
      image: Cgpa,
      borderColor: "border-t-secondary/30"
    },
    {
      name: "Multiple Next.js Projects",
      role: "Practical Development",
      content: "Designed and shipped several real-world projects using Next.js — covering full-stack features, API routes, server-side rendering, and modern UI — each one sharpening my production-level development skills.",
      image: Next,
      borderColor: "border-t-primary/30"
    }
  ];

  return (
    <section id="achievements" className="py-section-gap bg-surface-container-lowest overflow-hidden">
      <div className="container-max mx-auto px-gutter">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <span className="text-secondary font-label-sm text-label-sm uppercase tracking-widest block mb-4">Milestones</span>
          <h2 className="font-headline-lg text-headline-lg text-white mb-8 italic">
            &quot;A competitive programming background, strong academics, and real-world projects — built from the ground up.&quot;
          </h2>
          <div className="flex items-center justify-center gap-4">
            <div className="w-12 h-12 rounded-full overflow-hidden border border-primary relative">
              <Image
                src={Me}
                alt="Profile"
                fill
                className="object-cover"
              />
            </div>
            <div className="text-left">
              <div className="text-white font-label-sm">Nahin Ahmed</div>
              <div className="text-on-surface-variant text-xs">Web Developer & Competitive Programmer</div>
            </div>
          </div>
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {achievements.map((t, idx) => (
            <div key={idx} className={`glass-card p-8 rounded-2xl border-t-2 ${t.borderColor}`}>
              <p className="text-on-surface-variant mb-6">&quot;{t.content}&quot;</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-slate-800 border border-white/10 overflow-hidden relative">
                  <Image src={t.image} alt={t.name} fill className="object-cover" />
                </div>
                <div className="text-sm">
                  <div className="text-white font-bold">{t.name}</div>
                  <div className="text-on-surface-variant">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}