'use client';

import { motion } from 'framer-motion';

export default function Skillset() {
  const techLogos = [
    { slug: 'javascript', name: 'JavaScript' },
    { slug: 'typescript', name: 'TypeScript' },
    { slug: 'react', name: 'React' },
    { slug: 'nextdotjs', name: 'Next.js' },
    { slug: 'nodedotjs', name: 'Node.js' },
    { slug: 'express', name: 'Express.js' },
    { slug: 'mongodb', name: 'MongoDB' },
    { slug: 'tailwindcss', name: 'Tailwind CSS' },
    { slug: 'git', name: 'Git' },
    { slug: 'github', name: 'GitHub' },
    { slug: 'vercel', name: 'Vercel' },
    { slug: 'cplusplus', name: 'C++' },
  ];

  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        "React.js",
        "Next.js 15 (App Router)",
        "Tailwind CSS",
        "HeroUI",
        "Framer Motion",
        "HTML5 & CSS3",
        "JavaScript (ES6+)",
        "TypeScript"
      ]
    },
    {
      title: "Backend Development",
      skills: [
        "Node.js",
        "Express.js",
        "REST API Design",
        "JWT Authentication",
        "JWK Token Verification",
        "BetterAuth",
        "Google OAuth"
      ]
    },
    {
      title: "Database",
      skills: [
        "MongoDB",
        "Mongoose ODM",
        "Database Modeling",
        "Query Optimization",
      ]
    },
    {
      title: "Programming & DSA",
      skills: [
        "C++ (Competitive Programming)",
        "Data Structures & Algorithms",
        "Problem Solving",
        "Codeforces (max 1068)",
        "CodeChef (max 1287)",
        "LeetCode (max 1434)",
      ]
    },
    {
      title: "Tools & Platforms",
      skills: [
        "Git & GitHub",
        "Vercel",
        "Postman",
        "VS Code",
        "npm / yarn",
        "Linux CLI"
      ]
    },
    {
      title: "Concepts & Practices",
      skills: [
        "Full-Stack Architecture",
        "Responsive Web Design",
        "API Security & Middleware",
        "Component-Based UI",
        "Clean Code Principles",
        "Performance Optimization"
      ]
    }
  ];

  const containerVars = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const itemVars = {
    initial: { opacity: 0, y: 25 },
    animate: { 
      opacity: 1, 
      y: 0, 
      transition: { type: "spring", stiffness: 60, damping: 14 } 
    },
  };

  const logoContainerVars = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const logoVars = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { 
      opacity: 1, 
      scale: 1, 
      transition: { type: "spring", stiffness: 100, damping: 15 } 
    },
  };

  return (
    <section id="skillsets" className="relative w-full bg-slate-50/50 py-24 px-6 border-t border-slate-100 overflow-hidden">
      {/* Premium subtle background grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-35 pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10 flex flex-col items-center">
        {/* Header */}
        <div className="text-center max-w-3xl">
          <h2 className="font-extrabold text-4xl text-slate-950 tracking-tight">
            Skills
          </h2>
          <p className="text-slate-500 font-medium text-base md:text-lg mt-3">
            Technologies and tools I work with to build real-world web applications.
          </p>
        </div>

        {/* Tech Logos Bar */}
        <motion.div 
          variants={logoContainerVars}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-50px" }}
          className="flex flex-wrap items-center justify-center gap-6 md:gap-8 mt-10 max-w-4xl"
        >
          {techLogos.map((logo, idx) => (
            <motion.div 
              key={idx} 
              variants={logoVars}
              className="flex items-center justify-center p-2 hover:scale-110 transition-transform duration-300 cursor-pointer"
              title={logo.name}
            >
              <img 
                src={`https://cdn.simpleicons.org/${logo.slug}/0f172a`} 
                alt={logo.name}
                className="h-8 w-auto max-w-[32px] object-contain opacity-75 hover:opacity-100 transition-opacity duration-300"
                loading="lazy"
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Skill Cards Grid */}
        <motion.div 
          variants={containerVars}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16 w-full"
        >
          {skillCategories.map((category, idx) => (
            <motion.div 
              key={idx} 
              variants={itemVars}
              className="bg-white border border-slate-100 rounded-2xl p-8 shadow-[0_4px_25px_-4px_rgba(0,0,0,0.01),0_10px_15px_-3px_rgba(0,0,0,0.02)] hover:shadow-[0_12px_30px_-5px_rgba(0,0,0,0.04),0_8px_10px_-6px_rgba(0,0,0,0.04)] hover:border-slate-200/80 hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              <h3 className="font-bold text-slate-950 text-[17px] mb-6 tracking-tight">
                {category.title}
              </h3>
              <ul className="space-y-3.5 flex-grow">
                {category.skills.map((skill, sIdx) => (
                  <li 
                    key={sIdx} 
                    className="flex items-start gap-2 text-slate-600 font-medium text-sm leading-normal"
                  >
                    <span className="text-[#D9265F]/90 select-none mt-0.5 font-bold leading-none">▸</span>
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}