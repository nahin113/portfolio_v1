import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/WhatIBuild';
import Testimonials from '@/components/Achievements';
import FAQ from '@/components/Skillset';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Navbar />
      <div className='container mx-auto space-y-12'>
      <Hero />
      <Services />
      <Testimonials />
      <FAQ />
      </div>
      <Footer />
    </main>
  );
}
