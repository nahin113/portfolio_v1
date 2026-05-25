'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Qualifications() {
  const [activeTab, setActiveTab] = useState('education');

  const educationData = [
    {
      title: "SSC",
      subtitle: "Cantonment Public School and College, Rangpur",
      date: "2018"
    },
    {
      title: "HSC",
      subtitle: "Cantonment Public School and College, Rangpur",
      date: "2020"
    },
    {
      title: "B.Sc. in Computer Science & Engineering",
      subtitle: "Bangladesh University of Business & Technology (BUBT)",
      date: "2023 - Present"
    }
  ];

  const experienceData = [
    {
      title: "Competitive Programmer",
      subtitle: "Codeforces · CodeChef · LeetCode",
      date: "2023 - Present"
    },
    {
      title: "ICPC Asia Dhaka Regional Preliminary",
      subtitle: "Participant - 3 Consecutive Years",
      date: "2023 - 2025"
    },
    {
      title: "Full-Stack Developer (Self-Initiated Projects)",
      subtitle: "Independent - Petora, Roamly, NexLearn",
      date: "2025 - Present"
    }
  ];

  const currentData = activeTab === 'education' ? educationData : experienceData;

  const containerVars = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.1,
      }
    }
  };

  const itemVars = {
    initial: { opacity: 0, y: 30 },
    animate: { 
      opacity: 1, 
      y: 0, 
      transition: { type: "spring", stiffness: 60, damping: 14 } 
    },
    exit: { opacity: 0, y: -20, transition: { duration: 0.2 } }
  };

  return (
    <section id="qualifications" className="relative w-full bg-white py-24 px-6 border-t border-slate-100 overflow-hidden flex flex-col items-center justify-center">
      {/* Subtle radial background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] bg-[radial-gradient(circle_at_top,rgba(217,38,95,0.015)_0%,rgba(255,255,255,0)_70%)] pointer-events-none"></div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ type: "spring", stiffness: 60, damping: 14 }}
        className="max-w-4xl mx-auto w-full relative z-10 flex flex-col items-center"
      >
        {/* Header */}
        <div className="text-center max-w-xl">
          <h2 className="font-extrabold text-4xl text-slate-950 tracking-tight">
            Qualification
          </h2>
          <p className="text-slate-500 font-medium text-base md:text-lg mt-3">
            My personal journey
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex items-center justify-center gap-12 mt-12 mb-16">
          {/* Education Tab */}
          <button
            onClick={() => setActiveTab('education')}
            className={`group flex items-center gap-2.5 text-base md:text-lg font-bold pb-2 border-b-2 transition-all cursor-pointer ${
              activeTab === 'education'
                ? 'border-[#D9265F] text-[#D9265F]'
                : 'border-transparent text-slate-400 hover:text-slate-700'
            }`}
          >
            <svg 
              className={`w-5 h-5 transition-colors ${
                activeTab === 'education' ? 'text-[#D9265F]' : 'text-slate-400 group-hover:text-slate-600'
              }`} 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.62 48.62 0 0112 20.904a48.62 48.62 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 019.918 5.842 50.45 50.45 0 00-2.658.813m-15.482 0C6.183 10.59 8.97 10.75 12 10.75s5.817-.16 7.742-.603" />
            </svg>
            Education
          </button>

          {/* Experience Tab */}
          <button
            onClick={() => setActiveTab('experience')}
            className={`group flex items-center gap-2.5 text-base md:text-lg font-bold pb-2 border-b-2 transition-all cursor-pointer ${
              activeTab === 'experience'
                ? 'border-[#D9265F] text-[#D9265F]'
                : 'border-transparent text-slate-400 hover:text-slate-700'
            }`}
          >
            <svg 
              className={`w-5 h-5 transition-colors ${
                activeTab === 'experience' ? 'text-[#D9265F]' : 'text-slate-400 group-hover:text-slate-600'
              }`} 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 .621-.504 1.125-1.125 1.125H4.875A1.125 1.125 0 013.75 18.4V14.15m16.5 0c0-1.222-.888-2.25-2.09-2.43a4.707 4.707 0 00-9.32 0C7.637 11.9 6.75 12.928 6.75 14.15m13.5 0L18 12.562m-11.25 1.588L4.5 12.562m8.625 2.188a1.125 1.125 0 11-2.25 0 1.125 1.125 0 012.25 0z" />
            </svg>
            Experience
          </button>
        </div>

        {/* Timeline Container */}
        <div className="relative w-full max-w-2xl min-h-[400px]">
          {/* Vertical central line */}
          <div className="absolute left-[18px] md:left-1/2 transform md:-translate-x-1/2 top-2 bottom-2 w-[2px] bg-slate-200"></div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              variants={containerVars}
              initial="initial"
              animate="animate"
              exit="exit"
              className="space-y-10 w-full"
            >
              {currentData.map((item, idx) => {
                const isLeft = idx % 2 === 0;
                return (
                  <motion.div
                    key={idx}
                    variants={itemVars}
                    className="flex flex-col md:flex-row items-start md:items-center relative w-full"
                  >
                    {/* Node Circle dot on the timeline line */}
                    <div className="absolute left-[13px] md:left-1/2 transform md:-translate-x-1/2 w-3 h-3 rounded-full bg-[#D9265F] ring-[5px] ring-white shadow-sm z-20 transition-all duration-300 group-hover:scale-125"></div>

                    {/* Timeline box */}
                    <div className={`w-full md:w-1/2 pl-10 md:pl-0 ${isLeft ? 'md:pr-10 md:text-right' : 'md:pl-10 md:text-left md:ml-auto'}`}>
                      <div className="bg-white p-6 rounded-2xl border border-slate-100 hover:border-slate-200/80 hover:shadow-[0_8px_25px_-4px_rgba(0,0,0,0.02),0_6px_10px_-4px_rgba(0,0,0,0.02)] transition-all duration-300 group cursor-default">
                        <h4 className="font-extrabold text-slate-950 text-base md:text-lg group-hover:text-[#D9265F] transition-colors">
                          {item.title}
                        </h4>
                        <p className="text-slate-500 font-medium text-xs md:text-sm mt-1.5 leading-relaxed">
                          {item.subtitle}
                        </p>
                        <div className={`flex items-center gap-1.5 text-slate-400 text-xs mt-4 font-semibold ${isLeft ? 'md:justify-end' : 'md:justify-start'}`}>
                          <svg 
                            className="w-4 h-4 text-slate-300" 
                            fill="none" 
                            stroke="currentColor" 
                            strokeWidth="2" 
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                          </svg>
                          <span>{item.date}</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>
    </section>
  );
}