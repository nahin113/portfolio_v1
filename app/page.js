import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
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
