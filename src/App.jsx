import React, { useState } from 'react';
import BackgroundCanvas from './components/BackgroundCanvas';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';
import Chatbot from './components/Chatbot';

export default function App() {
  const [resumeOpen, setResumeOpen] = useState(false);

  const scrollToTerminal = () => {
    const aboutEl = document.getElementById('about');
    if (aboutEl) {
      aboutEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-dark-950 text-slate-100 relative selection:bg-brand-cyan selection:text-dark-950 overflow-x-hidden font-sans">
      {/* Dynamic Interactive Ambient Canvas */}
      <BackgroundCanvas />

      {/* Navigation Bar */}
      <Navbar
        onOpenResume={() => setResumeOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="relative z-10">
        <Hero
          onOpenResume={() => setResumeOpen(true)}
          onOpenTerminal={scrollToTerminal}
        />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Services />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Formatted In-Browser Resume Modal */}
      <ResumeModal
        isOpen={resumeOpen}
        onClose={() => setResumeOpen(false)}
      />

      {/* Floating Interactive Robot AI Copilot */}
      <Chatbot />
    </div>
  );
}
