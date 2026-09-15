import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Menu, X, FileText, Send, Briefcase } from 'lucide-react';
import { soundFx } from '../utils/sound';

export default function Navbar({ onOpenResume, onOpenContact }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const sections = ['hero', 'about', 'skills', 'projects', 'experience', 'services', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleSound = () => {
    const newState = soundFx.toggle();
    setSoundEnabled(newState);
  };

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e, href) => {
    soundFx.click();
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass-nav py-3.5 shadow-lg shadow-black/30' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Monogram */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, '#hero')}
            className="group flex items-center gap-3 focus:outline-none"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-cyan via-brand-indigo to-brand-violet p-0.5 shadow-neon-cyan group-hover:scale-105 transition-transform duration-300">
              <div className="w-full h-full bg-dark-950 rounded-[10px] flex items-center justify-center">
                <span className="font-mono font-bold text-sm tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-violet">
                  &lt;PV/&gt;
                </span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-base tracking-tight text-white group-hover:text-brand-cyan transition-colors">
                Prince Japhet Vender
              </span>
              <span className="text-xs text-slate-400 font-mono flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                Full Stack Developer
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-dark-900/60 border border-slate-800/80 rounded-full px-4 py-1.5 backdrop-blur-md">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-gradient-to-r from-brand-cyan/20 to-brand-indigo/20 text-brand-cyan border border-brand-cyan/30 shadow-sm'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Header Action Controls */}
          <div className="hidden sm:flex items-center gap-2.5">
            {/* Audio Toggle */}
            <button
              onClick={toggleSound}
              title={soundEnabled ? 'Disable UI Sound FX' : 'Enable UI Sound FX'}
              className={`p-2 rounded-xl border transition-all duration-200 ${
                soundEnabled
                  ? 'border-brand-cyan/40 bg-brand-cyan/10 text-brand-cyan shadow-sm shadow-brand-cyan/30'
                  : 'border-slate-800 bg-dark-900/60 text-slate-400 hover:text-slate-200 hover:border-slate-700'
              }`}
            >
              {soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
            </button>

            {/* Resume Button */}
            <button
              onClick={() => {
                soundFx.click();
                onOpenResume();
              }}
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-medium border border-slate-700/80 bg-slate-900/80 text-slate-200 hover:text-white hover:border-slate-600 hover:bg-slate-800/90 transition-all duration-200"
            >
              <FileText className="w-3.5 h-3.5 text-brand-cyan" />
              Resume
            </button>

            {/* Hire Me CTA */}
            <button
              onClick={() => {
                soundFx.click();
                const contactEl = document.getElementById('contact');
                if (contactEl) contactEl.scrollIntoView({ behavior: 'smooth' });
              }}
              className="group relative flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-dark-950 bg-gradient-to-r from-brand-cyan via-brand-electric to-brand-indigo hover:opacity-95 shadow-neon-cyan transition-all duration-200 hover:scale-[1.02]"
            >
              <Briefcase className="w-3.5 h-3.5 text-dark-950" />
              Hire Me
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 sm:hidden">
            <button
              onClick={toggleSound}
              className="p-2 rounded-xl border border-slate-800 bg-dark-900/80 text-slate-300"
            >
              {soundEnabled ? <Volume2 className="w-4 h-4 text-brand-cyan" /> : <VolumeX className="w-4 h-4" />}
            </button>
            <button
              onClick={() => {
                soundFx.click();
                setMobileMenuOpen(!mobileMenuOpen);
              }}
              className="p-2 rounded-xl border border-slate-800 bg-dark-900/80 text-slate-300 hover:text-white"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden glass-nav border-t border-slate-800/80 px-4 pt-3 pb-6 mt-3 space-y-2 animate-fadeIn">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="block px-4 py-2.5 rounded-xl text-sm font-medium text-slate-200 hover:bg-slate-800/70 hover:text-brand-cyan transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2 flex flex-col gap-2">
            <button
              onClick={() => {
                soundFx.click();
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium border border-slate-700 bg-slate-900 text-slate-200"
            >
              <FileText className="w-4 h-4 text-brand-cyan" />
              View Resume
            </button>
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold bg-gradient-to-r from-brand-cyan to-brand-indigo text-dark-950"
            >
              <Send className="w-4 h-4" />
              Get In Touch
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
