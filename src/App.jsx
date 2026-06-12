import { lazy } from 'react';
import AnimatedBackground from './components/ui/AnimatedBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import WhatsAppButton from './components/WhatsAppButton';
import TikTokPixel from './components/TikTokPixel';
import LazySection from './components/ui/LazySection';

const Problem = lazy(() => import('./components/Problem'));
const Solution = lazy(() => import('./components/Solution'));
const Quiz = lazy(() => import('./components/Quiz'));
const Packages = lazy(() => import('./components/Packages'));
const BeforeAfter = lazy(() => import('./components/BeforeAfter'));
const Portfolio = lazy(() => import('./components/Portfolio'));
const Process = lazy(() => import('./components/Process'));
const Testimonials = lazy(() => import('./components/Testimonials'));
const FAQ = lazy(() => import('./components/FAQ'));
const FinalCTA = lazy(() => import('./components/FinalCTA'));
const Footer = lazy(() => import('./components/Footer'));

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0e14] text-[#e2e8f0] relative">
      <TikTokPixel />
      <AnimatedBackground />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <Marquee />
        <LazySection minHeight="520px">
          <Problem />
        </LazySection>
        <LazySection minHeight="480px">
          <Solution />
        </LazySection>
        <LazySection minHeight="560px">
          <Quiz />
        </LazySection>
        <LazySection minHeight="640px">
          <Packages />
        </LazySection>
        <LazySection minHeight="480px">
          <BeforeAfter />
        </LazySection>
        <LazySection minHeight="720px">
          <Portfolio />
        </LazySection>
        <LazySection minHeight="420px">
          <Process />
        </LazySection>
        <LazySection minHeight="420px">
          <Testimonials />
        </LazySection>
        <LazySection minHeight="380px">
          <FAQ />
        </LazySection>
        <LazySection minHeight="360px">
          <FinalCTA />
        </LazySection>
      </main>
      <LazySection minHeight="240px">
        <Footer />
      </LazySection>
      <WhatsAppButton />
    </div>
  );
}
