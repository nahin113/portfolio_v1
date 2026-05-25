'use client';

import { motion } from 'framer-motion';

export default function AboutMe() {
  const containerVars = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVars = {
    initial: { opacity: 0, y: 30 },
    animate: { 
      opacity: 1, 
      y: 0, 
      transition: { type: "spring", stiffness: 60, damping: 14 } 
    },
  };

  return (
  <section id="about" className="relative w-full bg-white py-24 px-6 border-t border-slate-100 overflow-hidden flex flex-col items-center justify-center">
      {/* Background soft radial glow matching Hero fold */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[400px] bg-[radial-gradient(circle_at_top,rgba(217,38,95,0.015)_0%,rgba(255,255,255,0)_70%)] pointer-events-none"></div>

      <motion.div 
        variants={containerVars}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-3xl mx-auto w-full relative z-10 flex flex-col items-center text-center"
      >
        {/* Title */}
        <motion.h2 
          variants={itemVars} 
          className="font-extrabold text-4xl text-slate-950 tracking-tight"
        >
          About Me
        </motion.h2>

        {/* Paragraph Stack */}
        <div className="mt-10 flex flex-col gap-6 text-slate-500 font-medium text-[15px] md:text-[16px] leading-relaxed tracking-wide">
          <motion.p variants={itemVars}>
            I&apos;m Nahin Ahmed, a Full-Stack Developer and CSE student at Bangladesh University 
            of Business and Technology (BUBT), Dhaka. I&apos;m passionate about building real world 
            web applications using the MERN stack from clean, responsive frontends to secure, 
            scalable backend APIs. I combine modern web development with strong problem-solving 
            fundamentals sharpened through competitive programming.
          </motion.p>

          <motion.p variants={itemVars}>
            I&apos;ve built multiple full stack projects independently including Petora, a Pet 
            Adoption Platform; Roamly, a Travel Package Booking Platform; and NexLearn, an Online 
            Learning Platform each featuring authentication, dynamic data, and production ready 
            architecture using Next.js 15, Node.js, Express.js, MongoDB, and BetterAuth. Alongside 
            development, I actively compete on Codeforces (max 1068), CodeChef (max 1287), and 
            LeetCode (max 1434), and have participated in the ICPC Asia Dhaka Regional Preliminary 
            three consecutive years ranking 54th at the BUBT Inter University Programming 
            Contest 2025.
          </motion.p>

          <motion.p variants={itemVars}>
            I&apos;m actively seeking a Junior Full-Stack Developer role or internship where I can 
            contribute, grow, and work on meaningful products. If you have an opportunity that 
            matches my skills and drive, I&apos;d love to hear from you.
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
}
