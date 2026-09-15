import React, { useState } from 'react';
import { User, Cpu, ShieldCheck, Code2, Compass, Terminal as TerminalIcon, CheckCircle2, Award, Rocket } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import Terminal from './Terminal';
import { soundFx } from '../utils/sound';

export default function About() {
  const [activeTab, setActiveTab] = useState('philosophy');

  const principles = [
    {
      icon: <Cpu className="w-5 h-5 text-brand-cyan" />,
      title: "Scalable Architecture",
      desc: "Building decoupled, maintainable codebases with clean separation of concerns and robust data flow.",
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-brand-emerald" />,
      title: "Security & Role-Based Control",
      desc: "Implementing strict authorization models, sanitized database transactions, and secure credential handling.",
    },
    {
      icon: <Code2 className="w-5 h-5 text-brand-indigo" />,
      title: "Clean & Idiomatic Code",
      desc: "Writing readable, self-documenting code with comprehensive modern JavaScript/React patterns and zero tech debt.",
    },
    {
      icon: <Rocket className="w-5 h-5 text-brand-amber" />,
      title: "High Performance & Web Vitals",
      desc: "Optimizing bundle sizes, lazy loading routes, and tuning database indices for sub-second responses.",
    },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel border border-slate-700/80 text-xs font-mono text-brand-cyan">
            <User className="w-3.5 h-3.5" />
            <span>ABOUT PRINCE JAPHET VENDER</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Building Modern Web & App Systems with <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan via-brand-electric to-brand-violet">
              Passion & Precision
            </span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            A full-stack developer who bridges the gap between resilient backend infrastructure and engaging, pixel-perfect user experiences.
          </p>
        </div>

        {/* Tab Selector */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1.5 rounded-2xl glass-panel border border-slate-800">
            <button
              onClick={() => {
                soundFx.click();
                setActiveTab('philosophy');
              }}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                activeTab === 'philosophy'
                  ? 'bg-gradient-to-r from-brand-cyan/20 to-brand-indigo/20 text-brand-cyan border border-brand-cyan/30 shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Compass className="w-4 h-4" />
              <span>Story & Core Principles</span>
            </button>
            <button
              onClick={() => {
                soundFx.click();
                setActiveTab('cli');
              }}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                activeTab === 'cli'
                  ? 'bg-gradient-to-r from-brand-cyan/20 to-brand-indigo/20 text-brand-cyan border border-brand-cyan/30 shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <TerminalIcon className="w-4 h-4" />
              <span>Interactive Dev CLI</span>
            </button>
          </div>
        </div>

        {/* Tab 1: Philosophy & Story */}
        {activeTab === 'philosophy' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Story Card */}
            <div className="lg:col-span-6 glass-panel rounded-2xl p-7 border border-slate-800/80 space-y-5">
              <div className="flex items-center gap-3">
                <img
                  src={personalInfo.avatarUrl}
                  alt={personalInfo.name}
                  className="w-12 h-12 rounded-2xl border-2 border-brand-cyan/40 object-cover shadow-neon-cyan"
                  onError={(e) => { e.target.style.display = 'none'; }}
                />
                <div>
                  <h3 className="text-lg font-bold text-white">Full Stack Background</h3>
                  <p className="text-xs text-slate-400 font-mono">Based in {personalInfo.location} • {personalInfo.timezone}</p>
                </div>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed">
                I am a dedicated software developer driven by the satisfaction of turning complex challenges into streamlined, high-standard digital solutions. Whether designing multi-tier relational databases, building real-time reactive state layers, or optimizing web vitals, I prioritize reliability and clean architecture.
              </p>

              <p className="text-sm text-slate-300 leading-relaxed">
                My hands-on experience spans end-to-end full stack development: from foundational research platforms (like multi-role archival platforms with Firebase) to distributed telemetry monitors and high-velocity storefronts.
              </p>

              <div className="pt-2 border-t border-slate-800/80 grid grid-cols-2 gap-3 text-xs">
                <div className="flex items-center gap-2 text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-brand-cyan shrink-0" />
                  <span>Agile & Fast Iterations</span>
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-brand-cyan shrink-0" />
                  <span>REST & GraphQL APIs</span>
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-brand-cyan shrink-0" />
                  <span>Component-Driven UI</span>
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-brand-cyan shrink-0" />
                  <span>Cloud & BaaS Integration</span>
                </div>
              </div>
            </div>

            {/* Principles Grid */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {principles.map((p, idx) => (
                <div
                  key={idx}
                  className="glass-panel p-6 rounded-2xl border border-slate-800/80 glass-panel-hover flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center">
                      {p.icon}
                    </div>
                    <h4 className="text-sm font-bold text-white tracking-tight">{p.title}</h4>
                    <p className="text-xs text-slate-400 leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        )}

        {/* Tab 2: Terminal Mode */}
        {activeTab === 'cli' && (
          <div className="max-w-4xl mx-auto">
            <Terminal />
          </div>
        )}

      </div>
    </section>
  );
}
