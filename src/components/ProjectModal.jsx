import React from 'react';
import { X, ExternalLink, Layers, Zap, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { Github, TechIcon } from './Icons';
import { soundFx } from '../utils/sound';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-dark-950/80 backdrop-blur-md transition-opacity"
        onClick={() => {
          soundFx.click();
          onClose();
        }}
      ></div>

      {/* Modal Dialog Card */}
      <div className="relative w-full max-w-3xl glass-panel rounded-3xl border border-slate-700/80 shadow-2xl overflow-hidden z-10 animate-fadeIn">
        
        {/* Banner Header */}
        <div className={`p-6 sm:p-8 bg-gradient-to-r ${project.color} border-b border-slate-800 relative`}>
          <button
            onClick={() => {
              soundFx.click();
              onClose();
            }}
            className="absolute top-4 right-4 p-2 rounded-xl bg-dark-900/80 border border-slate-700 text-slate-300 hover:text-white hover:border-slate-500 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-dark-950/70 border border-white/10 text-xs font-mono text-brand-cyan mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>{project.category} Architecture</span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            {project.title}
          </h3>
          <p className="text-sm text-slate-300 mt-1 font-medium">{project.subtitle}</p>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[65vh] overflow-y-auto">
          {/* Overview */}
          <div>
            <h4 className="text-xs uppercase tracking-wider font-mono text-slate-400 mb-2">
              Project Overview
            </h4>
            <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Architecture Highlights */}
          <div>
            <h4 className="text-xs uppercase tracking-wider font-mono text-brand-cyan mb-3 flex items-center gap-1.5">
              <Zap className="w-4 h-4" /> System Architecture & Key Features
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.architecture.map((item, idx) => (
                <div
                  key={idx}
                  className="glass-panel p-3.5 rounded-xl border border-slate-800 flex items-start gap-2.5 text-xs sm:text-sm text-slate-200"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Key Impact Metric */}
          {project.metrics && (
            <div className="p-4 rounded-xl bg-brand-cyan/10 border border-brand-cyan/30 text-xs sm:text-sm font-medium text-brand-cyan flex items-center gap-2.5">
              <Zap className="w-4 h-4 shrink-0" />
              <span>{project.metrics}</span>
            </div>
          )}

          {/* Tech Stack Badges */}
          <div>
            <h4 className="text-xs uppercase tracking-wider font-mono text-slate-400 mb-2.5">
              Technologies Utilized
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-mono font-medium bg-slate-900/90 border border-slate-700/80 text-slate-200"
                >
                  <TechIcon name={tag} className="w-4 h-4 shrink-0" />
                  <span>{tag}</span>
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="p-5 sm:p-6 bg-dark-900/90 border-t border-slate-800 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              onClick={() => soundFx.click()}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-dark-950 bg-gradient-to-r from-brand-cyan via-brand-electric to-brand-indigo hover:opacity-95 shadow-neon-cyan transition-all duration-200"
            >
              <span>Live Application</span>
              <ExternalLink className="w-4 h-4" />
            </a>

            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              onClick={() => soundFx.click()}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-medium text-slate-200 glass-panel border border-slate-700 hover:border-slate-500 hover:text-white transition-all duration-200"
            >
              <Github className="w-4 h-4 text-brand-cyan" />
              <span>Source Repository</span>
            </a>
          </div>

          <button
            onClick={() => {
              soundFx.click();
              onClose();
            }}
            className="text-xs font-mono text-slate-400 hover:text-white"
          >
            Close Esc
          </button>
        </div>

      </div>
    </div>
  );
}
