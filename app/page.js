import Hero from '@/components/Hero';
import AboutMe from '@/components/AboutMe';
import Services from '@/components/WhatIBuild';
import Testimonials from '@/components/Achievements';
import FAQ from '@/components/Skillset';
import Qualifications from '@/components/Qualifications';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="w-full overflow-hidden bg-white">
      <Hero />
      <AboutMe />
      <FAQ />
      <Services />
      <Qualifications />
      <Testimonials />
      <Footer />
    </main>
  );
}
