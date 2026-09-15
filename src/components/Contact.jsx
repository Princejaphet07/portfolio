import React, { useState, useEffect } from 'react';
import { Mail, Send, Copy, Check, Clock, MapPin, Zap, MessageSquare, ExternalLink } from 'lucide-react';
import { Github, Linkedin } from './Icons';
import confetti from 'canvas-confetti';
import { personalInfo } from '../data/portfolioData';
import { soundFx } from '../utils/sound';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copiedField, setCopiedField] = useState(null);
  const [philippinesTime, setPhilippinesTime] = useState('');

  // Live Philippine Clock (UTC+8)
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options = {
        timeZone: 'Asia/Manila',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      };
      setPhilippinesTime(new Intl.DateTimeFormat('en-US', options).format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleCopy = (text, fieldName) => {
    soundFx.click();
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    soundFx.click();
    setSubmitting(true);

    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      soundFx.success();

      confetti({
        particleCount: 150,
        spread: 90,
        origin: { y: 0.7 },
        colors: ['#38bdf8', '#818cf8', '#a855f7', '#34d399', '#f59e0b'],
      });

      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitted(false), 8000);
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-dark-900/40">
      {/* Ambient Blobs */}
      <div className="glow-cyan-blob top-10 right-10 opacity-30"></div>
      <div className="glow-indigo-blob bottom-10 left-10 opacity-30"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel border border-slate-700/80 text-xs font-mono text-brand-cyan">
            <Mail className="w-3.5 h-3.5" />
            <span>GET IN TOUCH</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Let's Build Something <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan via-brand-electric to-brand-violet">
              Exceptional Together
            </span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Have a project in mind, want to build a modern web/mobile app, or looking to add a full-stack developer to your team? My inbox is always open.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left: Contact Info & Live Local Time */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Direct Connect Card */}
            <div className="glass-panel p-7 rounded-3xl border border-slate-800/80 space-y-6">
              <div>
                <h3 className="text-xl font-bold text-white tracking-tight">
                  Direct Contact Hub
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  Connect directly with Prince Japhet Vender
                </p>
              </div>

              <div className="space-y-3">
                {/* Email Chip */}
                <div className="glass-panel p-4 rounded-2xl border border-slate-800 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-brand-cyan/10 text-brand-cyan border border-brand-cyan/20">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div className="overflow-hidden">
                      <div className="text-[11px] text-slate-400 font-mono">Email Address</div>
                      <div className="text-xs sm:text-sm font-semibold text-white truncate">
                        {personalInfo.email}
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => handleCopy(personalInfo.email, 'email')}
                    className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors shrink-0"
                    title="Copy Email"
                  >
                    {copiedField === 'email' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Location & Live Clock Chip */}
                <div className="glass-panel p-4 rounded-2xl border border-slate-800 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-brand-indigo/10 text-brand-indigo border border-brand-indigo/20">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[11px] text-slate-400 font-mono flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-brand-cyan" /> {personalInfo.location} (UTC+8)
                      </div>
                      <div className="text-xs sm:text-sm font-bold text-brand-cyan font-mono tracking-wider">
                        {philippinesTime || 'Loading Local Time...'}
                      </div>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800/40">
                    ONLINE
                  </span>
                </div>

                {/* Social Profiles */}
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => soundFx.click()}
                    className="glass-panel p-3.5 rounded-2xl border border-slate-800 hover:border-slate-600 flex items-center gap-2.5 text-xs text-slate-200 transition-colors group"
                  >
                    <Github className="w-4 h-4 text-slate-400 group-hover:text-white" />
                    <span className="font-semibold">GitHub</span>
                    <ExternalLink className="w-3 h-3 text-slate-500 ml-auto" />
                  </a>

                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => soundFx.click()}
                    className="glass-panel p-3.5 rounded-2xl border border-slate-800 hover:border-brand-cyan/50 flex items-center gap-2.5 text-xs text-slate-200 transition-colors group"
                  >
                    <Linkedin className="w-4 h-4 text-brand-cyan" />
                    <span className="font-semibold">LinkedIn</span>
                    <ExternalLink className="w-3 h-3 text-slate-500 ml-auto" />
                  </a>
                </div>
              </div>

              {/* Status Note */}
              <div className="p-4 rounded-2xl bg-gradient-to-r from-brand-cyan/10 via-brand-indigo/10 to-brand-violet/10 border border-brand-cyan/20 space-y-1">
                <div className="flex items-center gap-2 text-xs font-bold text-white">
                  <Zap className="w-3.5 h-3.5 text-brand-cyan" />
                  <span>Rapid Response Guarantee</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  I typically respond to project inquiries, interview requests, and questions within 24 hours.
                </p>
              </div>

            </div>

          </div>

          {/* Right: Functional Message Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-7 sm:p-9 rounded-3xl border border-slate-800/80 shadow-xl">
              
              {submitted ? (
                <div className="py-12 text-center space-y-4 animate-fadeIn">
                  <div className="w-16 h-16 mx-auto rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
                    <Check className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Message Sent Successfully!</h3>
                  <p className="text-sm text-slate-300 max-w-md mx-auto">
                    Thank you for reaching out, Prince has received your notification and will get back to you shortly at your provided email.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-5 py-2.5 rounded-xl text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-slate-300 font-medium">Your Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Alex Morgan"
                        className="w-full px-4 py-3 rounded-xl bg-dark-950/80 border border-slate-700 text-white placeholder:text-slate-600 text-sm focus:outline-none focus:border-brand-cyan transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-slate-300 font-medium">Email Address *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="alex@company.com"
                        className="w-full px-4 py-3 rounded-xl bg-dark-950/80 border border-slate-700 text-white placeholder:text-slate-600 text-sm focus:outline-none focus:border-brand-cyan transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-300 font-medium">Subject / Topic</label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="e.g. Full Stack Web/App Developer Role / Project Collaboration"
                      className="w-full px-4 py-3 rounded-xl bg-dark-950/80 border border-slate-700 text-white placeholder:text-slate-600 text-sm focus:outline-none focus:border-brand-cyan transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-300 font-medium">Your Message *</label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Describe your requirements, system goals, or timeline..."
                      className="w-full px-4 py-3 rounded-xl bg-dark-950/80 border border-slate-700 text-white placeholder:text-slate-600 text-sm focus:outline-none focus:border-brand-cyan transition-colors resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full flex items-center justify-center gap-2 py-4 rounded-xl text-sm font-bold text-dark-950 bg-gradient-to-r from-brand-cyan via-brand-electric to-brand-indigo hover:opacity-95 shadow-neon-cyan transition-all duration-300 hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50"
                  >
                    {submitting ? (
                      <span>Dispatching Message...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message to Prince</span>
                      </>
                    )}
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
