// 'use client';
// import { useState } from 'react';

// export default function FAQ() {
//   const [openIndex, setOpenIndex] = useState(0);

//   const faqs = [
//     {
//       question: "What kind of projects do you work on?",
//       answer: "I specialize in high-performance web applications, scalable SaaS platforms, and sophisticated design systems for tech-forward companies and startups."
//     },
//     {
//       question: "What is your typical project timeline?",
//       answer: "Timelines vary depending on complexity. Small projects typically take 2-4 weeks, while large-scale enterprise solutions can span 3-6 months."
//     },
//     {
//       question: "Do you offer long-term maintenance?",
//       answer: "Yes, I offer various maintenance packages to ensure your platform remains up-to-date, secure, and performing at its peak."
//     },
//     {
//       question: "How do you handle project communication?",
//       answer: "I use a combination of Slack, Zoom, and Notion to keep stakeholders informed at every stage of the development process."
//     }
//   ];

//   return (
//     <section className="py-section-gap px-gutter container-max mx-auto">
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
//         <div>
//           <h2 className="font-headline-lg text-headline-lg text-white mb-6">Frequently Asked Questions</h2>
//           <p className="text-on-surface-variant text-body-lg">Find answers to common questions about my process, technology stack, and how we can work together.</p>
//         </div>
//         <div className="space-y-4">
//           {faqs.map((faq, idx) => (
//             <div key={idx} className="border-b border-white/10 pb-4">
//               <button 
//                 onClick={() => setOpenIndex(openIndex === idx ? -1 : idx)}
//                 className="w-full flex justify-between items-center text-left text-white py-4 group"
//               >
//                 <span className="font-headline-md text-xl">{faq.question}</span>
//                 <span className={`material-symbols-outlined text-primary transition-transform ${openIndex === idx ? 'rotate-180' : ''}`}>
//                   expand_more
//                 </span>
//               </button>
//               {openIndex === idx && (
//                 <div className="text-on-surface-variant pb-4 leading-relaxed animate-in fade-in slide-in-from-top-1 duration-300">
//                   {faq.answer}
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


'use client';
import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function Skillset() {
  const [openIndex, setOpenIndex] = useState(0);
  const cardsRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    gsap.fromTo(cardsRef.current.children,
      { x: 50, opacity: 0 },
      { 
        x: 0, 
        opacity: 1, 
        duration: 0.8, 
        stagger: 0.2,
        scrollTrigger: {
          trigger: cardsRef.current,
          start: "top 85%",
        }
      }
    );
  }, []);

  const skills = [
    {
      question: "Languages",
      answer: "Proficient in C, C++, Java, and Python for systems and backend logic — with a strong foundation in JavaScript as my primary language for building modern web experiences."
    },
    {
      question: "Frontend Development",
      answer: "I craft responsive and accessible interfaces using HTML, CSS, JavaScript, React, and Next.js — focusing on performance, clean UI structure, and smooth user experiences."
    },
    {
      question: "Backend & Logic",
      answer: "I build reliable server-side logic and APIs using JavaScript (Node.js), Python, and Java — applying core programming principles from my experience with C and C++."
    },
    {
      question: "Database & Storage",
      answer: "I work with MongoDB for flexible, document-based data storage — designing schemas and queries that scale with application needs."
    }
  ];

  return (
    <section className="py-section-gap px-gutter container-max mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div>
          <h2 className="font-headline-lg text-headline-lg text-white mb-6">My Skillset</h2>
          <p className="text-on-surface-variant text-body-lg">A breakdown of the languages, frameworks, and tools I use to build modern, performant web applications.</p>
        </div>
        <div ref={cardsRef} className="space-y-4">
          {skills.map((skill, idx) => (
            <div key={idx} className="border-b border-white/10 pb-4">
              <button
                onClick={() => setOpenIndex(openIndex === idx ? -1 : idx)}
                className="w-full flex justify-between items-center text-left text-white py-4 group"
              >
                <span className="font-headline-md text-xl">{skill.question}</span>
                <span className={`material-symbols-outlined text-primary transition-transform ${openIndex === idx ? 'rotate-180' : ''}`}>
                  expand_more
                </span>
              </button>
              {openIndex === idx && (
                <div className="text-on-surface-variant pb-4 leading-relaxed animate-in fade-in slide-in-from-top-1 duration-300">
                  {skill.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}