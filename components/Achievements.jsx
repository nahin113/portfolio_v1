'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Next from '@/assets/Next.jpg';
import Cgpa from '@/assets/CGPA.png';
import Iupc from '@/assets/IUPC.jpg';

export default function Achievements() {
  const achievements = [
    {
      name: "IUPC – Top 50 Finish",
      role: "Competitive Programming",
      content: "Competed in the Inter-University Programming Contest (IUPC) and secured a place in the top 50 — solving algorithmic challenges under time pressure against university-level programmers.",
      image: Iupc,
      date: "2020 - 2024",
      tags: ["Algorithms", "C++", "Competitive Programming", "Problem Solving"]
    },
    {
      name: "CGPA 3.38",
      role: "Academic Achievement",
      content: "Maintained a strong academic record with a CGPA of 3.33 — balancing coursework in computer science fundamentals, algorithms, and software engineering alongside active project development.",
      image: Cgpa,
      date: "2020 - 2024",
      tags: ["Computer Science", "Algorithms", "Software Engineering", "Academics"]
    },
    {
      name: "Multiple Next.js Projects",
      role: "Practical Development",
      content: "Designed and shipped several real-world projects using Next.js — covering full-stack features, API routes, server-side rendering, and modern UI — each one sharpening my production-level development skills.",
      image: Next,
      date: "2023 - Present",
      tags: ["Next.js", "React", "Full-Stack", "Web Development"]
    }
  ];

  const containerVars = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const itemVars = {
    initial: { opacity: 0, x: -30 },
    animate: { 
      opacity: 1, 
      x: 0, 
      transition: { type: "spring", stiffness: 60, damping: 14 } 
    },
  };

  return (
    <section id="achievements" className="relative w-full bg-white py-24 px-6 border-t border-slate-100 overflow-hidden flex flex-col items-center">
      {/* Background glow shadow */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30 pointer-events-none"></div>

      <div className="max-w-2xl w-full mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-extrabold text-4xl text-slate-950 tracking-tight">
            Achievements
          </h2>
          <p className="text-slate-500 font-medium text-base mt-3 leading-relaxed max-w-xl mx-auto">
            A competitive programming background, strong academics, and real-world projects — built from the ground up.
          </p>
        </div>

        {/* Timeline Stack */}
        <div className="relative w-full mt-12 pl-4">
          {/* Vertical central-left line */}
          <div className="absolute left-[9px] top-6 bottom-6 w-[2px] bg-slate-200"></div>

          <motion.div
            variants={containerVars}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-12"
          >
            {achievements.map((t, idx) => (
              <motion.div 
                key={idx} 
                variants={itemVars}
                className="relative w-full"
              >
                {/* Hollow Circle dot sitting on the timeline */}
                <div className="absolute left-[-11.5px] top-[14.5px] w-3 h-3 rounded-full bg-white border-[2.5px] border-slate-950 z-20"></div>

                {/* Achievement Header Row */}
                <div className="flex items-center gap-3.5 pl-6">
                  {/* Circle Institution/Project Avatar */}
                  <div className="w-10 h-10 rounded-full border border-slate-200 overflow-hidden relative shrink-0 bg-slate-50 shadow-sm">
                    <Image 
                      src={t.image} 
                      alt={t.name} 
                      fill 
                      className="object-cover" 
                      priority={idx === 0}
                    />
                  </div>
                  {/* Title */}
                  <h3 className="font-extrabold text-slate-950 text-base md:text-[17px] tracking-tight leading-tight">
                    {t.name}
                  </h3>
                </div>

                {/* Achievement Details (Indented underneath title) */}
                <div className="pl-20 mt-2">
                  {/* Role Category */}
                  <h4 className="font-bold text-slate-900 text-sm leading-snug">
                    {t.role}
                  </h4>
                  
                  {/* Calendar Date Span */}
                  <div className="flex items-center gap-1.5 text-slate-400 text-xs mt-1.5 font-semibold">
                    <svg 
                      className="w-3.5 h-3.5 text-slate-300" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                    </svg>
                    <span>{t.date}</span>
                  </div>

                  {/* Description content */}
                  <p className="text-slate-500 font-medium text-xs md:text-sm mt-3.5 leading-relaxed max-w-xl">
                    {t.content}
                  </p>

                  {/* Dynamic Tags */}
                  <div className="flex flex-wrap gap-2 mt-4">
                    {t.tags.map((tag, tagIdx) => (
                      <span 
                        key={tagIdx} 
                        className="border border-slate-200 bg-white px-2.5 py-1 rounded-full text-[10px] font-bold text-slate-600 shadow-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}