import React from 'react';
import { Shield, Server, Terminal } from 'lucide-react';
import Hero from './components/Hero';
import Section from './components/Section';
import Footer from './components/Footer';
import SystemsAdmin from './pages/SystemsAdmin';
import Cybersecurity from './pages/Cybersecurity';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <Hero />
      
      <main className="container mx-auto px-4 py-16 space-y-24">
        <Section
          id="systems"
          icon={<Server className="w-8 h-8 text-cyan-400" />}
          title="Systems Administration"
          description="Specialized in robust infrastructure management and cloud technologies"
          bgImage="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80"
        >
          <SystemsAdmin />
        </Section>

        <Section
          id="security"
          icon={<Shield className="w-8 h-8 text-cyan-400" />}
          title="Cybersecurity"
          description="Protecting digital assets through advanced security measures"
          bgImage="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80"
        >
          <Cybersecurity />
        </Section>
      </main>

      <Footer />
    </div>
  );
}