import React, { useState, useEffect } from 'react';
import { Mail, Send, Copy, Check, Clock, MapPin, Zap, MessageSquare, ExternalLink, User, Tag, Sparkles, Loader2 } from 'lucide-react';
import { Github, Linkedin } from './Icons';
import confetti from 'canvas-confetti';
import { personalInfo } from '../data/portfolioData';
import { soundFx } from '../utils/sound';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [selectedIntent, setSelectedIntent] = useState('Web & App Project');
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [copiedField, setCopiedField] = useState(null);
  const [philippinesTime, setPhilippinesTime] = useState('');

  const intents = [
    { label: '🚀 Web & App Project', value: 'Web & App Project' },
    { label: '💼 Hiring / Contract', value: 'Hiring / Full-Time Role' },
    { label: '⚙️ Backend & Database', value: 'Backend & Database' },
    { label: '☕ Say Hello / Collab', value: 'Say Hello & Collab' },
  ];

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    soundFx.click();
    setSubmitting(true);
    setErrorMessage('');

    try {
      const fullSubject = `[${selectedIntent}] ${formData.subject || 'Portfolio Inquiry'} — from ${formData.name}`;

      // 1. Send live email directly to japhetvender00@gmail.com via Web3Forms
      const emailPayload = {
        access_key: '94caf3ce-60c1-475e-ace3-fce72a8fe240',
        name: formData.name,
        email: formData.email,
        subject: fullSubject,
        message: `Topic / Category: ${selectedIntent}\nSender Name: ${formData.name}\nSender Email: ${formData.email}\nSubject: ${formData.subject || 'General Inquiry'}\n\nMessage:\n${formData.message}`,
        from_name: `Portfolio: ${formData.name}`,
        reply_to: formData.email,
      };

      const emailResponse = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(emailPayload),
      });

      const result = await emailResponse.json();
      console.log('Web3Forms dispatch result:', result);

      // 2. Also log to Firebase Firestore collection (inquiries)
      try {
        const firestoreUrl = 'https://firestore.googleapis.com/v1/projects/prince-japhet-portfolio/databases/(default)/documents/inquiries';
        await fetch(firestoreUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            fields: {
              name: { stringValue: formData.name },
              email: { stringValue: formData.email },
              category: { stringValue: selectedIntent },
              subject: { stringValue: formData.subject || 'General Inquiry' },
              message: { stringValue: formData.message },
              createdAt: { timestampValue: new Date().toISOString() },
            },
          }),
        });
      } catch (dbErr) {
        console.warn('Firestore sync note:', dbErr);
      }

      setSubmitting(false);
      setSubmitted(true);
      soundFx.success();

      confetti({
        particleCount: 160,
        spread: 100,
        origin: { y: 0.7 },
        colors: ['#38bdf8', '#818cf8', '#a855f7', '#34d399', '#f59e0b'],
      });

      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitted(false), 12000);
    } catch (err) {
      console.error('Submission error:', err);
      // Fallback: Open mailto directly
      const mailtoLink = `mailto:japhetvender00@gmail.com?subject=${encodeURIComponent(formData.subject || 'Portfolio Inquiry')}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\nCategory: ${selectedIntent}\n\nMessage:\n${formData.message}`)}`;
      window.location.href = mailtoLink;
      setSubmitting(false);
      setSubmitted(true);
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-dark-900/40">
      {/* Ambient Blobs */}
      <div className="glow-cyan-blob top-10 right-10 opacity-30"></div>
      <div className="glow-indigo-blob bottom-10 left-10 opacity-30"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-brand-cyan/30 text-xs font-mono text-brand-cyan shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-brand-cyan animate-pulse" />
            <span>LET'S CONNECT & COLLABORATE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Have a Project in Mind? <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan via-brand-electric to-brand-violet">
              Let's Build It Together
            </span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            Whether you need a full-stack web app, custom system, or looking to add a passionate developer to your team — my inbox is always open.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left: Contact Info & Live Local Time */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Direct Connect Card */}
            <div className="glass-panel p-7 sm:p-8 rounded-3xl border border-slate-800/90 space-y-6 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-cyan/5 rounded-full blur-2xl group-hover:bg-brand-cyan/10 transition-colors duration-500"></div>

              <div>
                <h3 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
                  <span>Direct Contact Hub</span>
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  Reach out directly to Prince Japhet Vender
                </p>
              </div>

              <div className="space-y-3.5">
                {/* Email Chip */}
                <div className="glass-panel p-4 rounded-2xl border border-slate-800 hover:border-slate-700 transition-colors flex items-center justify-between gap-3">
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
                  <span className="text-[10px] font-mono font-bold text-emerald-400 bg-emerald-950/70 px-2.5 py-1 rounded-full border border-emerald-800/50 flex items-center gap-1.5 shadow-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
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
                    className="glass-panel p-3.5 rounded-2xl border border-slate-800 hover:border-slate-600 flex items-center gap-2.5 text-xs text-slate-200 transition-all hover:scale-[1.02] group"
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
                    className="glass-panel p-3.5 rounded-2xl border border-slate-800 hover:border-brand-cyan/50 flex items-center gap-2.5 text-xs text-slate-200 transition-all hover:scale-[1.02] group"
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
                  I typically respond to project inquiries, full-time offers, and messages within 24 hours.
                </p>
              </div>

            </div>

          </div>

          {/* Right: Functional Message Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-7 sm:p-9 rounded-3xl border border-slate-800/90 shadow-2xl relative">
              
              {submitted ? (
                <div className="py-14 text-center space-y-4 animate-fadeIn">
                  <div className="w-20 h-20 mx-auto rounded-full bg-emerald-500/20 border border-emerald-500/50 flex items-center justify-center text-emerald-400 shadow-lg shadow-emerald-500/20 animate-bounce">
                    <Check className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">Message Dispatched!</h3>
                  <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                    Thank you! Your message has been sent directly to <strong className="text-brand-cyan font-semibold">Prince Japhet Vender</strong> and saved to our database. I will reply to you shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-6 py-2.5 rounded-xl text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  {/* Topic / Intent Chips */}
                  <div className="space-y-2">
                    <label className="text-xs font-mono text-slate-300 font-medium flex items-center gap-1.5">
                      <Tag className="w-3.5 h-3.5 text-brand-cyan" />
                      <span>Select Inquiry Category</span>
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {intents.map((item) => {
                        const isSelected = selectedIntent === item.value;
                        return (
                          <button
                            key={item.value}
                            type="button"
                            onClick={() => {
                              soundFx.click();
                              setSelectedIntent(item.value);
                            }}
                            className={`px-3 py-2 rounded-xl text-xs font-medium text-center transition-all duration-200 border ${
                              isSelected
                                ? 'bg-brand-cyan/20 border-brand-cyan text-white shadow-sm shadow-brand-cyan/20 scale-[1.02]'
                                : 'bg-dark-950/60 border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700'
                            }`}
                          >
                            {item.label}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Name & Email Fields */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-slate-300 font-medium flex items-center gap-1">
                        <User className="w-3 h-3 text-brand-cyan" />
                        <span>Your Name *</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Juan dela Cruz"
                        className="w-full px-4 py-3 rounded-xl bg-dark-950/80 border border-slate-700/80 text-white placeholder:text-slate-600 text-sm focus:outline-none focus:border-brand-cyan focus:ring-2 focus:ring-brand-cyan/20 transition-all"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-slate-300 font-medium flex items-center gap-1">
                        <Mail className="w-3 h-3 text-brand-cyan" />
                        <span>Your Email Address *</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="you@company.com"
                        className="w-full px-4 py-3 rounded-xl bg-dark-950/80 border border-slate-700/80 text-white placeholder:text-slate-600 text-sm focus:outline-none focus:border-brand-cyan focus:ring-2 focus:ring-brand-cyan/20 transition-all"
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-300 font-medium">Subject / Headline</label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="e.g. Building an interactive web system / Developer position"
                      className="w-full px-4 py-3 rounded-xl bg-dark-950/80 border border-slate-700/80 text-white placeholder:text-slate-600 text-sm focus:outline-none focus:border-brand-cyan focus:ring-2 focus:ring-brand-cyan/20 transition-all"
                    />
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-300 font-medium flex items-center justify-between">
                      <span className="flex items-center gap-1">
                        <MessageSquare className="w-3 h-3 text-brand-cyan" />
                        <span>Your Message *</span>
                      </span>
                      <span className="text-[10px] text-slate-500 font-mono">
                        {formData.message.length} chars
                      </span>
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Describe your project, requirements, timeline, or whatever is on your mind..."
                      className="w-full px-4 py-3 rounded-xl bg-dark-950/80 border border-slate-700/80 text-white placeholder:text-slate-600 text-sm focus:outline-none focus:border-brand-cyan focus:ring-2 focus:ring-brand-cyan/20 transition-all resize-none"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full flex items-center justify-center gap-2.5 py-4 rounded-xl text-sm font-bold text-dark-950 bg-gradient-to-r from-brand-cyan via-brand-electric to-brand-indigo hover:opacity-95 shadow-neon-cyan transition-all duration-300 hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50 cursor-pointer"
                  >
                    {submitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin text-dark-950" />
                        <span>Transmitting Message to Prince...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 text-dark-950" />
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
