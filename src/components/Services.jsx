import React from 'react';
import { Code, Server, Database, Layout, Wrench, ArrowRight } from 'lucide-react';
import { servicesData } from '../data/portfolioData';
import { soundFx } from '../utils/sound';

export default function Services() {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'code':
        return <Code className="w-6 h-6 text-brand-cyan" />;
      case 'server':
        return <Server className="w-6 h-6 text-brand-indigo" />;
      case 'database':
        return <Database className="w-6 h-6 text-brand-emerald" />;
      case 'layout':
      default:
        return <Layout className="w-6 h-6 text-brand-violet" />;
    }
  };

  return (
    <section id="services" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel border border-slate-700/80 text-xs font-mono text-brand-cyan">
            <Wrench className="w-3.5 h-3.5" />
            <span>SOLUTIONS & EXPERTISE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Comprehensive Full-Stack <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan via-brand-electric to-brand-violet">
              Web & App Development
            </span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Delivering responsive, high-performance web applications and digital systems tailored for modern users.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {servicesData.map((service, idx) => (
            <div
              key={idx}
              className="glass-panel p-8 rounded-3xl border border-slate-800/80 glass-panel-hover flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-dark-950 border border-slate-800 flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-300">
                  {getIcon(service.icon)}
                </div>

                <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-brand-cyan transition-colors">
                  {service.title}
                </h3>

                <p className="text-sm text-slate-300 leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Tags and CTA */}
              <div className="pt-6 mt-6 border-t border-slate-800/80 space-y-4">
                <div className="flex flex-wrap gap-1.5">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-dark-950/80 border border-slate-800 text-slate-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href="#contact"
                  onClick={() => soundFx.click()}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-cyan hover:text-brand-electric transition-colors"
                >
                  <span>Discuss a project</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
