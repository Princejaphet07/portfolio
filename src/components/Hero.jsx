import React, { useState, useEffect } from 'react';
import { ArrowRight, Download, Mail, Terminal as TerminalIcon, ShieldCheck, Zap, Layers } from 'lucide-react';
import { Github, Linkedin } from './Icons';
import { personalInfo } from '../data/portfolioData';
import { soundFx } from '../utils/sound';

export default function Hero({ onOpenResume, onOpenTerminal }) {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    const currentTitle = personalInfo.titles[currentTitleIndex];

    const handleTyping = () => {
      if (!isDeleting) {
        setDisplayText(currentTitle.substring(0, displayText.length + 1));
        setTypingSpeed(75);

        if (displayText === currentTitle) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setDisplayText(currentTitle.substring(0, displayText.length - 1));
        setTypingSpeed(40);

        if (displayText === '') {
          setIsDeleting(false);
          setCurrentTitleIndex((prev) => (prev + 1) % personalInfo.titles.length);
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentTitleIndex, typingSpeed]);

  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Ambient Gradient Glow Blobs */}
      <div className="glow-cyan-blob top-10 left-1/4 -translate-x-1/2 opacity-70"></div>
      <div className="glow-indigo-blob top-32 right-10 opacity-60"></div>
      <div className="glow-purple-blob bottom-10 left-10 opacity-50"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Hero Column */}
          <div className="lg:col-span-7 space-y-7 text-left">
            {/* Live Availability Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass-panel border border-brand-cyan/20 text-xs font-medium text-slate-300 shadow-sm shadow-brand-cyan/10 hover:border-brand-cyan/40 transition-colors">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>{personalInfo.badge}</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1]">
                Hi, I'm <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan via-brand-electric to-brand-indigo">
                  {personalInfo.name}
                </span>
              </h1>

              {/* Dynamic Typewriter Role */}
              <div className="h-10 sm:h-12 flex items-center">
                <span className="font-mono text-xl sm:text-2xl lg:text-3xl font-semibold text-slate-300">
                  I build{' '}
                  <span className="text-brand-cyan border-b-2 border-brand-cyan/60 pb-0.5">
                    {displayText}
                  </span>
                  <span className="animate-pulse text-brand-cyan font-normal">|</span>
                </span>
              </div>
            </div>

            {/* Bio Description */}
            <p className="text-base sm:text-lg text-slate-300/90 max-w-2xl leading-relaxed font-normal">
              Specialized in crafting scalable architectures, resilient RESTful/real-time backends, and intuitive frontend experiences. Transforming complex ideas into production-ready software.
            </p>

            {/* Action CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#projects"
                onClick={() => soundFx.click()}
                className="group relative inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-dark-950 bg-gradient-to-r from-brand-cyan via-brand-electric to-brand-indigo hover:opacity-95 shadow-neon-cyan transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Explore Featured Work</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <button
                onClick={() => {
                  soundFx.click();
                  onOpenResume();
                }}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl font-medium text-sm text-slate-200 glass-panel border border-slate-700/80 hover:border-slate-500 hover:text-white hover:bg-slate-800/80 transition-all duration-300"
              >
                <Download className="w-4 h-4 text-brand-cyan" />
                <span>View Resume</span>
              </button>

              <button
                onClick={() => {
                  soundFx.click();
                  onOpenTerminal();
                }}
                className="inline-flex items-center gap-2 px-4 py-3.5 rounded-xl font-mono text-xs text-brand-cyan/90 glass-panel border border-brand-cyan/30 hover:border-brand-cyan hover:bg-brand-cyan/10 transition-all duration-300"
                title="Open Interactive Terminal"
              >
                <TerminalIcon className="w-4 h-4 text-brand-cyan" />
                <span>$ CLI Mode</span>
              </button>
            </div>

            {/* Quick Social Connectivity */}
            <div className="flex items-center gap-4 pt-2 text-slate-400">
              <span className="text-xs uppercase tracking-wider font-mono text-slate-500">Connect:</span>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                onClick={() => soundFx.click()}
                className="p-2 rounded-lg glass-panel hover:text-white hover:border-slate-500 transition-colors"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                onClick={() => soundFx.click()}
                className="p-2 rounded-lg glass-panel hover:text-brand-cyan hover:border-brand-cyan/50 transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                onClick={() => soundFx.click()}
                className="p-2 rounded-lg glass-panel hover:text-brand-violet hover:border-brand-violet/50 transition-colors"
                aria-label="Email Prince Japhet"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Interactive Visual & Tech Badge Column */}
          <div className="lg:col-span-5 relative flex justify-center">
            {/* Visual Container */}
            <div className="relative w-full max-w-md">
              {/* Outer Glow Ring */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-brand-cyan via-brand-indigo to-brand-violet rounded-3xl blur-lg opacity-40 animate-pulse-slow"></div>

              {/* Central Glass Card */}
              <div className="relative glass-panel rounded-2xl p-6 border border-white/10 shadow-2xl space-y-6">
                
                {/* Code Window Header */}
                <div className="flex items-center justify-between border-b border-slate-800 pb-3 font-mono text-xs text-slate-400">
                  <div className="flex items-center gap-2">
                    <img
                      src={personalInfo.avatarUrl}
                      alt={personalInfo.name}
                      className="w-6 h-6 rounded-full border border-brand-cyan/40 object-cover"
                      onError={(e) => { e.target.style.display = 'none'; }}
                    />
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-500/80"></span>
                      <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></span>
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></span>
                    </div>
                  </div>
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noreferrer"
                    className="text-slate-200 hover:text-white font-medium flex items-center gap-1.5 px-2 py-0.5 rounded-md hover:bg-slate-800/80 transition-colors"
                  >
                    <Github className="w-4 h-4" colored={true} />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan via-purple-300 to-pink-400 font-bold">
                      @{personalInfo.githubUsername}
                    </span>
                  </a>
                  <span className="text-[10px] text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800/40 font-mono">
                    ONLINE
                  </span>
                </div>

                {/* Simulated IDE Snippet */}
                <div className="font-mono text-xs space-y-2 text-slate-300">
                  <div>
                    <span className="text-brand-violet">const</span> <span className="text-brand-cyan">developer</span> = &#123;
                  </div>
                  <div className="pl-4">
                    <span className="text-slate-400">name:</span> <span className="text-emerald-300">"{personalInfo.name}"</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-slate-400">role:</span> <span className="text-amber-300">"Full Stack Web & App Developer"</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-slate-400">primaryStack:</span> [
                    <span className="text-brand-electric">"React"</span>, <span className="text-brand-electric">"Node.js"</span>, <span className="text-brand-electric">"Tailwind"</span>, <span className="text-brand-electric">"Firebase/SQL"</span>
                    ],
                  </div>
                  <div className="pl-4">
                    <span className="text-slate-400">focus:</span> <span className="text-indigo-300">"Modern Web & Mobile Apps"</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-slate-400">availableForHire:</span> <span className="text-emerald-400 font-bold">true</span>,
                  </div>
                  <div>&#125;;</div>
                  <div className="pt-2 text-slate-500">
                    <span className="text-brand-cyan">&gt;</span> developer.buildModernApps();
                  </div>
                </div>

                {/* Floating Metric Badges */}
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="glass-panel p-3 rounded-xl border border-slate-800 flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-brand-cyan/10 text-brand-cyan">
                      <Zap className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white">Sub-100ms</div>
                      <div className="text-[10px] text-slate-400">Optimized Render</div>
                    </div>
                  </div>

                  <div className="glass-panel p-3 rounded-xl border border-slate-800 flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-brand-indigo/10 text-brand-indigo">
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white">RBAC & JWT</div>
                      <div className="text-[10px] text-slate-400">Secure Architect</div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>

        {/* Bottom Key Stats Bar */}
        <div className="mt-16 pt-10 border-t border-slate-800/80">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {personalInfo.stats.map((stat, idx) => (
              <div
                key={idx}
                className="glass-panel p-5 rounded-2xl border border-slate-800/80 hover:border-brand-cyan/30 transition-all duration-300"
              >
                <div className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-violet font-mono">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm font-semibold text-slate-200 mt-1">
                  {stat.label}
                </div>
                <div className="text-[11px] text-slate-400 font-mono mt-0.5">
                  {stat.suffix}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
