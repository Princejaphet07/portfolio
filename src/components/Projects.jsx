import React, { useState } from 'react';
import { FolderGit2, ExternalLink, Star, Layers, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { Github, TechIcon } from './Icons';
import { projectsData } from '../data/portfolioData';
import ProjectModal from './ProjectModal';
import { soundFx } from '../utils/sound';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const filterOptions = ['All', 'Full Stack', 'Frontend', 'Backend'];

  const filteredProjects =
    activeFilter === 'All'
      ? projectsData
      : projectsData.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Ambient Blobs */}
      <div className="glow-indigo-blob top-1/3 left-0 opacity-40"></div>
      <div className="glow-cyan-blob bottom-10 right-0 opacity-40"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel border border-slate-700/80 text-xs font-mono text-brand-cyan">
              <FolderGit2 className="w-3.5 h-3.5" />
              <span>FEATURED WORK & REPOSITORIES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Selected Software Projects & <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan via-brand-electric to-brand-violet">
                Full-Stack Deployments
              </span>
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Explore production-grade applications, multi-role research platforms, telemetry systems, and modern storefronts.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0">
            {filterOptions.map((filter) => (
              <button
                key={filter}
                onClick={() => {
                  soundFx.click();
                  setActiveFilter(filter);
                }}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 shrink-0 ${
                  activeFilter === filter
                    ? 'bg-gradient-to-r from-brand-cyan/20 to-brand-indigo/20 text-brand-cyan border border-brand-cyan/40 shadow-sm shadow-brand-cyan/10'
                    : 'glass-panel border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-panel rounded-3xl border border-slate-800/80 overflow-hidden glass-panel-hover flex flex-col justify-between group"
            >
              {/* Card Banner Header */}
              <div className={`p-6 sm:p-7 bg-gradient-to-r ${project.color} border-b border-slate-800/80 relative`}>
                <div className="flex items-center justify-between gap-4 mb-3">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-dark-950/70 border border-white/10 text-[11px] font-mono text-brand-cyan">
                    <Layers className="w-3 h-3" />
                    {project.category}
                  </span>

                  {project.featured && (
                    <span className="inline-flex items-center gap-1 text-[11px] font-mono font-semibold text-amber-300 bg-amber-950/70 border border-amber-800/50 px-2.5 py-0.5 rounded-full">
                      <Star className="w-3 h-3 text-amber-400 fill-amber-400" /> Flagship
                    </span>
                  )}
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight group-hover:text-brand-cyan transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mt-1 font-medium">{project.subtitle}</p>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 space-y-5 flex-1 flex flex-col justify-between">
                <div className="space-y-4">
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  {/* Quick Architecture Bullets */}
                  <div className="space-y-1.5 pt-1">
                    {project.architecture.slice(0, 2).map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span className="truncate">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Tags & Actions */}
                <div className="space-y-4 pt-3 border-t border-slate-800/80">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-mono bg-dark-950/80 border border-slate-800 text-slate-300"
                      >
                        <TechIcon name={tag} className="w-3.5 h-3.5 shrink-0" />
                        <span>{tag}</span>
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between gap-3 pt-2">
                    <button
                      onClick={() => {
                        soundFx.click();
                        setSelectedProject(project);
                      }}
                      className="text-xs font-semibold text-brand-cyan hover:text-brand-electric flex items-center gap-1 group/btn"
                    >
                      <span>Architecture Details</span>
                      <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                    </button>

                    <div className="flex items-center gap-2">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        onClick={() => soundFx.click()}
                        className="p-2 rounded-xl glass-panel hover:text-white hover:border-slate-600 transition-colors"
                        title="View Source Code"
                      >
                        <Github className="w-4 h-4 text-slate-300" />
                      </a>
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        onClick={() => soundFx.click()}
                        className="p-2 rounded-xl bg-brand-cyan/15 border border-brand-cyan/30 text-brand-cyan hover:bg-brand-cyan/25 transition-colors"
                        title="Live Demo"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Deep Dive Project Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
