import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { experienceData } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-dark-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel border border-slate-700/80 text-xs font-mono text-brand-cyan">
            <Briefcase className="w-3.5 h-3.5" />
            <span>CAREER MILESTONES & JOURNEY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Work Experience & <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan via-brand-electric to-brand-violet">
              Software Development Milestones
            </span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            A chronological timeline of web and app development experience, academic foundation, and project delivery.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="max-w-4xl mx-auto relative">
          {/* Vertical Glowing Line */}
          <div className="absolute top-0 bottom-0 left-4 sm:left-1/2 w-0.5 -translate-x-1/2 bg-gradient-to-b from-brand-cyan via-brand-indigo to-brand-violet/20"></div>

          <div className="space-y-12">
            {experienceData.map((item, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <div
                  key={idx}
                  className={`relative flex flex-col sm:flex-row items-start ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  } gap-8 group`}
                >
                  {/* Center Node Indicator */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-dark-950 border-2 border-brand-cyan shadow-neon-cyan flex items-center justify-center z-10 group-hover:scale-110 transition-transform duration-300">
                    <div className="w-2.5 h-2.5 rounded-full bg-brand-cyan animate-pulse"></div>
                  </div>

                  {/* Content Card */}
                  <div className="ml-12 sm:ml-0 sm:w-1/2 sm:px-6">
                    <div className="glass-panel p-6 sm:p-7 rounded-2xl border border-slate-800/80 glass-panel-hover space-y-4">
                      {/* Period Badge & Meta */}
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-cyan/10 border border-brand-cyan/30 text-xs font-mono text-brand-cyan font-semibold">
                          <Calendar className="w-3 h-3" />
                          {item.period}
                        </span>
                        <span className="text-[11px] font-mono text-slate-400 flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {item.location}
                        </span>
                      </div>

                      <div>
                        <h3 className="text-lg font-bold text-white tracking-tight group-hover:text-brand-cyan transition-colors">
                          {item.role}
                        </h3>
                        <p className="text-sm font-medium text-slate-300">{item.company}</p>
                        <p className="text-xs text-slate-400 font-mono mt-0.5">{item.type}</p>
                      </div>

                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                        {item.description}
                      </p>

                      {/* Achievements List */}
                      <div className="space-y-2 pt-2 border-t border-slate-800/80">
                        {item.achievements.map((ach, aIdx) => (
                          <div key={aIdx} className="flex items-start gap-2 text-xs text-slate-300">
                            <CheckCircle2 className="w-3.5 h-3.5 text-brand-cyan shrink-0 mt-0.5" />
                            <span>{ach}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
