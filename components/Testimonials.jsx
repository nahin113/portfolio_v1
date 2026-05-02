// import Image from 'next/image';

// export default function Testimonials() {
//   const testimonials = [
//     {
//       name: "Marcus Chen",
//       role: "Founder of Nexa",
//       content: "The attention to detail in the UI was incredible. Our user engagement increased by 40% within the first month of launch.",
//       image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAgEK24hl_6a5Ky_OScZdx3moicawsPZ45NQDUTquWt5tWoEoSqjr7VCPgOOa_2mLjsEenjDdWP-4spEWwYDYjN23zuoSaQSMCZoIMKXn8aRH5ZsJukjEIwIVPKlP6QAOq1L7Bzr36ANpq4o-YBn3dI5myo5ylSRbx8tiGhqhY6RvmDl0VK3QOJ7MRDXJgKzuHcSj6M5bvACRFZocdOTZxzmRWbmgEsb7Wp5foUtBLVku9a0zJKGS6uj0Mwq_RVmrD2twrqR_wKmgM",
//       borderColor: "border-t-primary/30"
//     },
//     {
//       name: "Sarah Jenkins",
//       role: "Product Lead, ScaleUp",
//       content: "Leo delivered a high-stakes prototype in record time. His technical architectural knowledge is deep and thorough.",
//       image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDfEm17hJ_sY2k2ids-3HLuFf7gxcXHYiiRX0QRkYTN6v4_l1b7STabe9aBYm6Jobj-w7-utT4KN9lR0GnLyiWqQ2VB2kTFaZQBxh1kLoAH2WugM9Al21iHRkAlzyZrmC2HPLh-woKdx2waf87xEAkCjbGpMvYfaCNRXXkIjg2Y10rfIpGX1T2M3YLWtD44wlhAh4FFuN2zIKlq8kCpeNrneyDzYJdpL1tZWKhg1Zth8hmMdc13I8F58N4ZNnTQZ3Dvv9SJn6a6ZGI",
//       borderColor: "border-t-secondary/30"
//     },
//     {
//       name: "David Rodriguez",
//       role: "CEO, BlueMatrix",
//       content: "Scaling our platform was a nightmare until Leo stepped in. The systems he built are robust, fast, and very easy to maintain.",
//       image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBHF2lZtlTXXO1T778rUt_ZANvrm-t38cYHMbNgFoZk6903JBGLhJVQevH1l7h9z9lovT0-btZgvuNBjTVCJAjDBby7jFz860v_mlE3BpuftvHzdPdl90MemPY-DoQpt2Y64s8Y6lz9W4iFLezwBGeCwWKG41t9Sivs0_1G_xrzc5p7jqJIjTbDz9Q0BlJCFXShiA2u7-rn1GlH0RdqG3MYHqDLSLaqvUaN1NwLGnB61jF_EY_4EBDSafHguPRb2cWx5ugKxwQtLac",
//       borderColor: "border-t-primary/30"
//     }
//   ];

//   return (
//     <section className="py-section-gap bg-surface-container-lowest overflow-hidden">
//       <div className="container-max mx-auto px-gutter">
//         <div className="max-w-3xl mx-auto text-center mb-20">
//           <span className="text-secondary font-label-sm text-label-sm uppercase tracking-widest block mb-4">Success Stories</span>
//           <h2 className="font-headline-lg text-headline-lg text-white mb-8 italic">
//             &quot;Leo&apos;s ability to translate complex business needs into elegant software is truly unmatched in the industry.&quot;
//           </h2>
//           <div className="flex items-center justify-center gap-4">
//             <div className="w-12 h-12 rounded-full overflow-hidden border border-primary relative">
//               <Image 
//                 src="https://lh3.googleusercontent.com/aida-public/AB6AXuCyTjY1MKOYAHkEvSaTwxvpEWYCt_0aEGr2PmROt3RSfzS_VZuc0gUURwXSAKim6gt7df7MHRRHNfI2taNQR9edUUnrZ0htcbMioHOKZAC0LaQOdsO93e1OyO7zeaMay-lqBoUx2vwjKjP1wERBsp-qqMdctFqF9ILbnTHuQF3zsEg765BscpAlxkD5JnVIsGhwPkIRrRqDH-8dQ840x09AdLrIXj-N751I2lkDsC-53G_pVfrjjMiNlq7VmtwX2SbEXMt0RZTfNwY" 
//                 alt="Elena Matsuura" 
//                 fill
//                 className="object-cover"
//               />
//             </div>
//             <div className="text-left">
//               <div className="text-white font-label-sm">Elena Matsuura</div>
//               <div className="text-on-surface-variant text-xs">CTO at TechFlow Systems</div>
//             </div>
//           </div>
//         </div>
        
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//           {testimonials.map((t, idx) => (
//             <div key={idx} className={`glass-card p-8 rounded-2xl border-t-2 ${t.borderColor}`}>
//               <p className="text-on-surface-variant mb-6">&quot;{t.content}&quot;</p>
//               <div className="flex items-center gap-3">
//                 <div className="w-10 h-10 rounded-full bg-slate-800 border border-white/10 overflow-hidden relative">
//                   <Image src={t.image} alt={t.name} fill className="object-cover" />
//                 </div>
//                 <div className="text-sm">
//                   <div className="text-white font-bold">{t.name}</div>
//                   <div className="text-on-surface-variant">{t.role}</div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


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
    <section className="py-section-gap bg-surface-container-lowest overflow-hidden">
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
              <div className="text-white font-label-sm">Your Name</div>
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