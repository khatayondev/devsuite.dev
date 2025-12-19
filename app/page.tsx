import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Problem } from './components/Problem';
import { Solution } from './components/Solution';
import { WhatWeBuild } from './components/WhatWeBuild';
import { WhyChoose } from './components/WhyChoose';
import { Proof } from './components/Proof';
import { CTASection } from './components/CTASection';
import { About } from './components/About';
import { Services } from './components/Services';
import { EngagementModel } from './components/EngagementModel';
import { FAQ } from './components/FAQ';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <Navigation />
      <Hero />
      <Problem />
      <Solution />
      <WhatWeBuild />
      <WhyChoose />
      <Proof />
      <CTASection />
      <About />
      <Services />
      <EngagementModel />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}
