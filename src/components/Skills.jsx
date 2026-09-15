import React, { useState } from 'react';
import { Code, Server, Database, Wrench, Layers, CheckCircle, Flame } from 'lucide-react';
import { TechIcon } from './Icons';
import { skillsData } from '../data/portfolioData';
import { soundFx } from '../utils/sound';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Stack', icon: <Layers className="w-4 h-4" /> },
    { id: 'frontend', label: 'Frontend', icon: <Code className="w-4 h-4" /> },
    { id: 'backend', label: 'Backend & APIs', icon: <Server className="w-4 h-4" /> },
    { id: 'database', label: 'Databases & Cloud', icon: <Database className="w-4 h-4" /> },
    { id: 'devops', label: 'DevOps & Tools', icon: <Wrench className="w-4 h-4" /> },
  ];

  const getFilteredSkills = () => {
    if (activeCategory === 'all') {
      return [
        ...skillsData.frontend.map((s) => ({ ...s, domain: 'Frontend' })),
        ...skillsData.backend.map((s) => ({ ...s, domain: 'Backend' })),
        ...skillsData.database.map((s) => ({ ...s, domain: 'Databases' })),
        ...skillsData.devops.map((s) => ({ ...s, domain: 'DevOps' })),
      ];
    }
    return skillsData[activeCategory].map((s) => ({
      ...s,
      domain: categories.find((c) => c.id === activeCategory)?.label || '',
    }));
  };

  const filteredSkills = getFilteredSkills();

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-dark-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel border border-slate-700/80 text-xs font-mono text-brand-cyan">
            <Code className="w-3.5 h-3.5" />
            <span>TECHNICAL PROFICIENCY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Tools, Technologies & <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan via-brand-electric to-brand-violet">
              Core Capabilities
            </span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            A battle-tested stack refined for building scalable, high-throughput web applications with zero compromises.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                soundFx.click();
                setActiveCategory(cat.id);
              }}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 ${
                activeCategory === cat.id
                  ? 'bg-gradient-to-r from-brand-cyan/20 to-brand-indigo/20 text-brand-cyan border border-brand-cyan/40 shadow-sm shadow-brand-cyan/10'
                  : 'glass-panel border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
              }`}
            >
              {cat.icon}
              <span>{cat.label}</span>
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredSkills.map((skill, idx) => (
            <div
              key={idx}
              className="glass-panel p-5 rounded-2xl border border-slate-800/80 glass-panel-hover flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center p-2 shadow-inner group-hover:scale-105 group-hover:border-slate-700 transition-all">
                      <TechIcon name={skill.name} className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white group-hover:text-brand-cyan transition-colors">
                        {skill.name}
                      </h3>
                      <span className="text-[11px] text-slate-400 font-mono">
                        {skill.category} • {skill.domain}
                      </span>
                    </div>
                  </div>
                  {skill.highlight && (
                    <span className="flex items-center gap-1 text-[10px] font-mono font-semibold text-emerald-400 bg-emerald-950/60 border border-emerald-800/50 px-2 py-0.5 rounded-full shrink-0">
                      <Flame className="w-3 h-3 text-emerald-400" /> Core
                    </span>
                  )}
                </div>
              </div>

              {/* Proficiency Bar */}
              <div className="space-y-1.5 pt-2">
                <div className="flex justify-between text-[11px] font-mono">
                  <span className="text-slate-400">Mastery Level</span>
                  <span className="text-brand-cyan font-bold">{skill.level}%</span>
                </div>
                <div className="w-full h-2 rounded-full bg-slate-900 border border-slate-800 overflow-hidden">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-brand-cyan to-brand-indigo transition-all duration-700"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
