import React from 'react';
import { X, Download, Printer, ExternalLink, Mail, MapPin, Globe, CheckCircle2 } from 'lucide-react';
import { personalInfo, skillsData, experienceData, projectsData } from '../data/portfolioData';
import { soundFx } from '../utils/sound';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handlePrint = () => {
    soundFx.click();
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 overflow-y-auto print:p-0">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-dark-950/80 backdrop-blur-md transition-opacity print:hidden"
        onClick={() => {
          soundFx.click();
          onClose();
        }}
      ></div>

      {/* Resume Card */}
      <div className="relative w-full max-w-4xl bg-slate-900 text-slate-100 rounded-3xl border border-slate-700 shadow-2xl overflow-hidden z-10 animate-fadeIn print:bg-white print:text-black print:rounded-none print:border-none print:shadow-none">
        
        {/* Header Action Bar */}
        <div className="p-4 sm:p-5 bg-dark-950/90 border-b border-slate-800 flex items-center justify-between print:hidden">
          <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>PRINCE_JAPHET_VENDER_CV.PDF (PREVIEW)</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print</span>
            </button>
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-brand-cyan text-dark-950 hover:bg-brand-electric transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </button>
            <button
              onClick={() => {
                soundFx.click();
                onClose();
              }}
              className="p-1.5 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Content */}
        <div className="p-8 sm:p-12 max-h-[75vh] overflow-y-auto print:max-h-none print:overflow-visible space-y-8">
          
          {/* Header */}
          <div className="border-b border-slate-700 pb-6 print:border-black space-y-3">
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white print:text-black">
              {personalInfo.name}
            </h1>
            <p className="text-base font-semibold text-brand-cyan print:text-blue-800">
              {personalInfo.title}
            </p>
            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-300 print:text-gray-700">
              <span className="flex items-center gap-1">
                <Mail className="w-3.5 h-3.5" /> {personalInfo.email}
              </span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5" /> {personalInfo.location} ({personalInfo.timezone})
              </span>
              <span className="flex items-center gap-1">
                <Globe className="w-3.5 h-3.5" /> https://github.com/princejaphet
              </span>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="space-y-2">
            <h2 className="text-xs font-bold uppercase tracking-wider font-mono text-brand-cyan print:text-blue-900">
              Professional Summary
            </h2>
            <p className="text-sm text-slate-300 print:text-gray-800 leading-relaxed">
              {personalInfo.bio}
            </p>
          </div>

          {/* Core Technical Matrix */}
          <div className="space-y-2">
            <h2 className="text-xs font-bold uppercase tracking-wider font-mono text-brand-cyan print:text-blue-900">
              Technical Core Competencies
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-xl bg-slate-800/60 print:bg-gray-100">
                <strong className="text-white print:text-black block mb-1">Frontend & Architecture:</strong>
                <span className="text-slate-300 print:text-gray-700">React, TypeScript, JavaScript (ES6+), Tailwind CSS, Vite, Next.js, Zustand, Redux</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-800/60 print:bg-gray-100">
                <strong className="text-white print:text-black block mb-1">Backend & Cloud:</strong>
                <span className="text-slate-300 print:text-gray-700">Node.js, Express, RESTful APIs, PostgreSQL, Firebase/Firestore, MongoDB, Docker</span>
              </div>
            </div>
          </div>

          {/* Experience */}
          <div className="space-y-4">
            <h2 className="text-xs font-bold uppercase tracking-wider font-mono text-brand-cyan print:text-blue-900">
              Work Experience & Milestones
            </h2>
            <div className="space-y-4">
              {experienceData.map((exp, idx) => (
                <div key={idx} className="space-y-1 text-xs sm:text-sm">
                  <div className="flex justify-between font-bold text-white print:text-black">
                    <span>{exp.role} — {exp.company}</span>
                    <span className="font-mono text-brand-cyan print:text-blue-800">{exp.period}</span>
                  </div>
                  <p className="text-slate-300 print:text-gray-800 text-xs">{exp.description}</p>
                  <ul className="list-disc pl-4 space-y-1 text-xs text-slate-400 print:text-gray-700">
                    {exp.achievements.map((ach, aIdx) => (
                      <li key={aIdx}>{ach}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Key Projects */}
          <div className="space-y-3">
            <h2 className="text-xs font-bold uppercase tracking-wider font-mono text-brand-cyan print:text-blue-900">
              Featured Software Systems
            </h2>
            <div className="space-y-3 text-xs">
              {projectsData.slice(0, 3).map((proj, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-slate-800/40 print:bg-gray-50 border border-slate-700 print:border-gray-200">
                  <div className="font-bold text-white print:text-black flex justify-between">
                    <span>{proj.title}</span>
                    <span className="font-mono text-slate-400">{proj.tags.slice(0, 3).join(', ')}</span>
                  </div>
                  <p className="text-slate-300 print:text-gray-700 mt-1">{proj.description}</p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
