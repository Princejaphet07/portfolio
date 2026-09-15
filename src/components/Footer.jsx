import React from 'react';
import { ArrowUp, Mail, Heart } from 'lucide-react';
import { Github, Linkedin } from './Icons';
import { personalInfo } from '../data/portfolioData';
import { soundFx } from '../utils/sound';

export default function Footer() {
  const scrollToTop = () => {
    soundFx.click();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-800/80 bg-dark-950/90 py-12 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand and Copyright */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-brand-cyan to-brand-violet p-0.5 shadow-sm shadow-brand-cyan/20">
              <div className="w-full h-full bg-dark-950 rounded-[10px] flex items-center justify-center">
                <span className="font-mono font-bold text-xs text-brand-cyan">PV</span>
              </div>
            </div>
            <div>
              <div className="text-sm font-bold text-white">
                {personalInfo.name}
              </div>
              <p className="text-xs text-slate-400 font-mono">
                Crafted with React, Tailwind CSS & Vite • {new Date().getFullYear()}
              </p>
            </div>
          </div>

          {/* Center Links */}
          <div className="flex items-center gap-6 text-xs text-slate-400 font-medium">
            <a href="#about" className="hover:text-brand-cyan transition-colors">About</a>
            <a href="#skills" className="hover:text-brand-cyan transition-colors">Skills</a>
            <a href="#projects" className="hover:text-brand-cyan transition-colors">Projects</a>
            <a href="#experience" className="hover:text-brand-cyan transition-colors">Experience</a>
            <a href="#contact" className="hover:text-brand-cyan transition-colors">Contact</a>
          </div>

          {/* Socials & Back to Top */}
          <div className="flex items-center gap-3">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-xl glass-panel hover:text-white transition-colors"
              title="GitHub"
            >
              <Github className="w-4 h-4 text-slate-400" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-xl glass-panel hover:text-brand-cyan transition-colors"
              title="LinkedIn"
            >
              <Linkedin className="w-4 h-4 text-slate-400" />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="p-2 rounded-xl glass-panel hover:text-brand-violet transition-colors"
              title="Email"
            >
              <Mail className="w-4 h-4 text-slate-400" />
            </a>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors ml-2"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>
      </div>
    </footer>
  );
}
