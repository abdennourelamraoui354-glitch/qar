import TikTokPixel from './components/TikTokPixel';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Stats from './components/Stats';
import Testimonials from './components/Testimonials';
import Features from './components/Features';
import Process from './components/Process';
import Packages from './components/Packages';
import Contact from './components/Contact';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50">
      <TikTokPixel />
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Portfolio />
        <Stats />
        <Testimonials />
        <Features />
        <Process />
        <Packages />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
