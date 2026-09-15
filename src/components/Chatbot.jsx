import React, { useState, useEffect, useRef } from 'react';
import { X, Send, Bot, Sparkles, RefreshCw, ChevronDown, MessageSquare, ExternalLink, Zap, Terminal as TerminalIcon } from 'lucide-react';
import confetti from 'canvas-confetti';
import { personalInfo, projectsData, skillsData, experienceData, servicesData } from '../data/portfolioData';
import { soundFx } from '../utils/sound';

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [showGreetingBubble, setShowGreetingBubble] = useState(true);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'bot',
      text: `Hello there! 👋 I am **Japhet-AI**, the official digital copilot of **Prince Japhet Vender**.\n\nI can answer questions about Prince's **projects (Archivio, Swellbrew, Dive-Cebu)**, **skills (React, Firebase, Node.js)**, or help you get in touch!`,
      timestamp: 'Just now',
      quickReplies: [
        '🚀 Tell me about Archivio',
        '💻 What is his tech stack?',
        '📂 What projects has he built?',
        '📬 How can I contact him?',
      ],
    },
  ]);

  const messagesEndRef = useRef(null);

  useEffect(() => {
    // Auto scroll chat to bottom
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isTyping, isOpen]);

  // Auto-hide the initial greeting bubble after 8 seconds of inactivity if not hovered
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowGreetingBubble(false);
    }, 9000);
    return () => clearTimeout(timer);
  }, []);

  const handleSend = (textToSend = inputMessage) => {
    const query = (textToSend || '').trim();
    if (!query) return;

    soundFx.click();

    const userMsgId = Date.now();
    const newMessages = [
      ...messages,
      {
        id: userMsgId,
        sender: 'user',
        text: query,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      },
    ];

    setMessages(newMessages);
    setInputMessage('');
    setIsTyping(true);

    // Simulate AI thinking and generate smart contextual response
    setTimeout(() => {
      const botResponse = generateAIResponse(query);
      setIsTyping(false);
      soundFx.success();

      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          sender: 'bot',
          text: botResponse.text,
          actions: botResponse.actions || [],
          quickReplies: botResponse.quickReplies || [
            '🚀 Tell me about Archivio',
            '⚡ View Core Skills',
            '📬 Contact Prince',
          ],
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        },
      ]);
    }, 700);
  };

  const generateAIResponse = (input) => {
    const q = input.toLowerCase();

    // Archivio Research System
    if (q.includes('archivio') || q.includes('research') || q.includes('manuscript')) {
      return {
        text: `**Archivio Research System** is Prince's flagship production application! 🏆\n\n- **Tech Stack:** React 18, Vite, Firebase Cloud Firestore, Tailwind CSS\n- **Live App:** https://archivio-public.web.app/\n- **Key Features:** Multi-tier role permissions (Dean, Adviser, Author), live Firestore subscriptions, manuscript archival & status tracking.\n- **GitHub:** https://github.com/Princejaphet07/Archivio-Research-System`,
        actions: [
          { label: '🌐 Open Live Archivio', url: 'https://archivio-public.web.app/' },
          { label: '📂 View Archivio Repo', url: 'https://github.com/Princejaphet07/Archivio-Research-System' },
        ],
      };
    }

    // Swellbrew Coffee Shop
    if (q.includes('swellbrew') || q.includes('coffee') || q.includes('cafe')) {
      return {
        text: `☕ **Swellbrew Coffee Shop** is an artisanal café digital storefront built by Prince.\n\n- **Tech:** React, Tailwind CSS, Smooth Animations\n- **Highlights:** Interactive beverage menu, flavor profile filtering, responsive mobile cart architecture.\n- **Repo:** https://github.com/Princejaphet07/Swellbrew-Coffee-shop`,
        actions: [
          { label: '📂 View Swellbrew GitHub', url: 'https://github.com/Princejaphet07/Swellbrew-Coffee-shop' },
        ],
      };
    }

    // Dive Cebu
    if (q.includes('dive') || q.includes('cebu') || q.includes('scuba') || q.includes('tourism')) {
      return {
        text: `🤿 **Dive-Cebu** is a premier scuba diving & marine tourism portal.\n\n- **Highlights:** Dynamic dive spot explorer, high-resolution imagery, booking schedule UI.\n- **Repo:** https://github.com/Princejaphet07/Dive-Cebu`,
        actions: [
          { label: '📂 View Dive-Cebu Repo', url: 'https://github.com/Princejaphet07/Dive-Cebu' },
        ],
      };
    }

    // Projects overview
    if (q.includes('project') || q.includes('work') || q.includes('portfolio') || q.includes('build') || q.includes('app')) {
      return {
        text: `Prince has built **${projectsData.length}+ real projects** spanning Full-Stack Web Apps, Mobile Systems, and Games:\n\n1. **Archivio Research System** (Live on Firebase)\n2. **Swellbrew Coffee Shop** (Café Storefront)\n3. **Dive-Cebu** (Marine Tourism Portal)\n4. **TRACE** (Realtime Monitoring)\n5. **GEARGRID** (Inventory Catalog)\n6. **Hyllas-Quest** (Interactive Game in C#)\n7. **FLOURISH-APP** (Wellness Tracker)`,
        actions: [
          {
            label: '👀 Scroll to Projects Section',
            onClick: () => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }),
          },
        ],
        quickReplies: ['🚀 Tell me about Archivio', '☕ Tell me about Swellbrew', '🤿 Tell me about Dive-Cebu'],
      };
    }

    // Skills & Tech Stack
    if (q.includes('skill') || q.includes('stack') || q.includes('tech') || q.includes('react') || q.includes('firebase') || q.includes('node') || q.includes('javascript') || q.includes('tailwind')) {
      return {
        text: `💻 **Prince's Core Technical Matrix:**\n\n- **Frontend:** React, Vite, JavaScript (ES6+), Tailwind CSS, HTML5, Modern CSS, Zustand\n- **Backend & APIs:** Node.js, Express, RESTful APIs, Role-Based Access Control (RBAC), C#\n- **Database & Cloud:** Firebase (Firestore, Auth, Hosting, Storage), SQL\n- **Tools:** Git/GitHub, Firebase CLI, Vite, Postman, VS Code`,
        actions: [
          {
            label: '⚡ View Skills Section',
            onClick: () => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' }),
          },
        ],
      };
    }

    // Contact & Hiring
    if (q.includes('contact') || q.includes('email') || q.includes('hire') || q.includes('call') || q.includes('message') || q.includes('reach') || q.includes('rate') || q.includes('job')) {
      return {
        text: `📬 **Let's Connect with Prince:**\n\n- **Email:** ${personalInfo.email}\n- **GitHub:** @Princejaphet07 (${personalInfo.github})\n- **Location:** ${personalInfo.location} (UTC+8)\n- **Status:** 🟢 Available for full-time roles & project contracts!`,
        actions: [
          {
            label: '📝 Jump to Contact Form',
            onClick: () => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }),
          },
          { label: '📧 Direct Email', url: `mailto:${personalInfo.email}` },
        ],
      };
    }

    // Education / Background
    if (q.includes('education') || q.includes('school') || q.includes('background') || q.includes('study') || q.includes('experience')) {
      return {
        text: `🎓 **Background & Experience:**\n\n- **2024 — Present:** Lead Full Stack Developer for Archivio Research Platform & Web Apps.\n- **2023 — 2024:** Web Application & Frontend Developer on specialized commercial projects.\n- **2021 — 2023:** Computer Studies & Web/App Foundations (algorithms, object-oriented programming in C#/JS, relational databases).`,
        actions: [
          {
            label: '📜 View Experience Timeline',
            onClick: () => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' }),
          },
        ],
      };
    }

    // Surprise / Easter egg
    if (q.includes('surprise') || q.includes('confetti') || q.includes('fun') || q.includes('dance') || q.includes('party')) {
      confetti({
        particleCount: 180,
        spread: 120,
        origin: { y: 0.6 },
        colors: ['#38bdf8', '#818cf8', '#a855f7', '#34d399', '#f59e0b'],
      });
      return {
        text: `🎉 **CYBER CELEBRATION!** ✨\n\nThank you for exploring Prince Japhet Vender's interactive portfolio! Ready to build something extraordinary together?`,
        actions: [
          {
            label: '🚀 Start a Project with Prince',
            onClick: () => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }),
          },
        ],
      };
    }

    // General Greeting / Who are you
    if (q.includes('hi') || q.includes('hello') || q.includes('who') || q.includes('kamusta') || q.includes('hey') || q.includes('kumusta')) {
      return {
        text: `Kumusta! 👋 I am **Japhet-AI**, Prince Japhet Vender's interactive portfolio assistant.\n\nPrince is a **Full Stack Web & App Developer** based in Cebu, Philippines. How can I assist you today?`,
        quickReplies: ['🚀 Tell me about Archivio', '💻 What are his skills?', '📂 Show all projects', '📬 Contact Prince'],
      };
    }

    // Default Fallback
    return {
      text: `Thanks for your inquiry! I can tell you all about Prince's **projects (Archivio, Swellbrew, Dive-Cebu)**, his **technical skills (React, Firebase, Node.js)**, or connect you directly with him.`,
      quickReplies: ['🚀 Tell me about Archivio', '💻 Core Tech Stack', '📂 Show all projects', '📬 How to contact him'],
    };
  };

  const handleClear = () => {
    soundFx.click();
    setMessages([
      {
        id: Date.now(),
        sender: 'bot',
        text: `Chat cleared! What else would you like to know about Prince Japhet Vender? 🤖`,
        timestamp: 'Just now',
        quickReplies: [
          '🚀 Tell me about Archivio',
          '💻 What is his tech stack?',
          '📂 What projects has he built?',
          '📬 How can I contact him?',
        ],
      },
    ]);
  };

  return (
    <>
      {/* Floating Animated Robot Mascot Button (Bottom Right) */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
        
        {/* Dynamic Greeting Bubble when closed */}
        {!isOpen && (showGreetingBubble || isHovered) && (
          <div
            onClick={() => {
              soundFx.click();
              setIsOpen(true);
            }}
            className="mb-3 mr-1 glass-panel px-4 py-3 rounded-2xl border border-brand-cyan/40 text-xs text-slate-100 shadow-neon-cyan animate-bounce max-w-[260px] cursor-pointer hover:border-brand-cyan transition-all relative group"
          >
            <div className="flex items-center gap-2 font-bold text-brand-cyan mb-1">
              <Sparkles className="w-3.5 h-3.5 animate-pulse" />
              <span>Japhet-AI Copilot</span>
            </div>
            <p className="text-slate-200 text-[11px] leading-snug">
              Hi! 👋 Need help exploring Prince's projects or skills? Click me to chat!
            </p>
            {/* Arrow tail */}
            <div className="absolute -bottom-2 right-6 w-3 h-3 bg-dark-900 border-r border-b border-brand-cyan/40 rotate-45"></div>
          </div>
        )}

        {/* The Animated Robot Head Trigger */}
        <button
          onClick={() => {
            soundFx.click();
            setIsOpen(!isOpen);
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className={`relative group p-3 rounded-2xl transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-2xl ${
            isOpen
              ? 'bg-slate-800 text-white border border-slate-700'
              : 'bg-gradient-to-tr from-dark-900 via-dark-850 to-dark-800 text-brand-cyan border-2 border-brand-cyan/50 shadow-neon-cyan'
          }`}
          title={isOpen ? 'Close Chatbot' : 'Chat with Japhet-AI Robot'}
        >
          {isOpen ? (
            <X className="w-7 h-7 text-slate-300 group-hover:text-white" />
          ) : (
            <div className="relative w-11 h-11 flex items-center justify-center">
              
              {/* Cute SVG Animated Robot */}
              <svg viewBox="0 0 64 64" className="w-11 h-11 filter drop-shadow-md">
                {/* Antenna */}
                <line x1="32" y1="14" x2="32" y2="4" stroke="#38bdf8" strokeWidth="2.5" strokeLinecap="round" />
                <circle cx="32" cy="3" r="3.5" fill="#38bdf8" className="animate-antenna-glow" />

                {/* Ears / Head bolts */}
                <rect x="8" y="24" width="4" height="8" rx="2" fill="#64748b" />
                <rect x="52" y="24" width="4" height="8" rx="2" fill="#64748b" />

                {/* Robot Head Outer */}
                <rect x="12" y="14" width="40" height="34" rx="10" fill="#0f172a" stroke="#38bdf8" strokeWidth="2" />

                {/* LED Screen Visor */}
                <rect x="17" y="20" width="30" height="18" rx="6" fill="#020617" stroke="#1e293b" strokeWidth="1" />

                {/* Glowing LED Eyes (Blinking) */}
                <g className="animate-robot-blink">
                  <circle cx="25" cy="28" r="3.2" fill="#38bdf8" className="filter drop-shadow-[0_0_4px_#38bdf8]" />
                  <circle cx="39" cy="28" r="3.2" fill="#38bdf8" className="filter drop-shadow-[0_0_4px_#38bdf8]" />
                </g>

                {/* Robot Smile Matrix */}
                <path d="M 26 34 Q 32 37 38 34" stroke="#38bdf8" strokeWidth="1.8" fill="none" strokeLinecap="round" />

                {/* Waving Robot Arm */}
                <g className="animate-robot-wave">
                  <path d="M 48 38 Q 58 30 56 20" stroke="#38bdf8" strokeWidth="3" fill="none" strokeLinecap="round" />
                  <circle cx="56" cy="19" r="2.5" fill="#38bdf8" />
                </g>
              </svg>

              {/* Status Ping Dot */}
              <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500 border-2 border-dark-950"></span>
              </span>
            </div>
          )}
        </button>
      </div>

      {/* Slide-out Interactive Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-4 sm:right-6 w-[92vw] sm:w-[420px] max-h-[640px] h-[80vh] z-50 flex flex-col rounded-3xl glass-panel border border-brand-cyan/40 shadow-2xl overflow-hidden animate-in fade-in slide-in-from-bottom-6 duration-300">
          
          {/* Chat Header */}
          <div className="p-4 sm:p-4.5 bg-dark-900/90 border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-brand-cyan/20 to-brand-indigo/20 border border-brand-cyan/40 flex items-center justify-center text-brand-cyan shadow-sm">
                <Bot className="w-5 h-5 animate-pulse" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-sm font-bold text-white tracking-tight">Japhet-AI Copilot</h3>
                  <span className="text-[9px] font-mono font-bold text-emerald-400 bg-emerald-950/70 border border-emerald-800/40 px-1.5 py-0.5 rounded">
                    ONLINE
                  </span>
                </div>
                <p className="text-[11px] text-slate-400 font-mono">Prince Japhet Vender's AI Assistant</p>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                onClick={handleClear}
                className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                title="Restart Chat"
              >
                <RefreshCw className="w-4 h-4" />
              </button>
              <button
                onClick={() => {
                  soundFx.click();
                  setIsOpen(false);
                }}
                className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                title="Minimize Chat"
              >
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Messages Container */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 text-xs sm:text-sm">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
              >
                <div className="flex items-end gap-2 max-w-[85%]">
                  {msg.sender === 'bot' && (
                    <div className="w-6 h-6 rounded-lg bg-brand-cyan/10 border border-brand-cyan/30 flex items-center justify-center text-brand-cyan shrink-0 mb-1">
                      <Bot className="w-3.5 h-3.5" />
                    </div>
                  )}

                  <div
                    className={`p-3.5 rounded-2xl whitespace-pre-wrap leading-relaxed ${
                      msg.sender === 'user'
                        ? 'bg-gradient-to-r from-brand-cyan to-brand-electric text-dark-950 font-medium rounded-br-none shadow-md'
                        : 'bg-slate-900/90 text-slate-200 border border-slate-800 rounded-bl-none shadow-sm'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>

                {/* Attached Interactive Action Buttons */}
                {msg.actions && msg.actions.length > 0 && (
                  <div className="mt-2 ml-8 flex flex-wrap gap-1.5">
                    {msg.actions.map((act, idx) => (
                      act.url ? (
                        <a
                          key={idx}
                          href={act.url}
                          target="_blank"
                          rel="noreferrer"
                          onClick={() => soundFx.click()}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-brand-cyan/10 border border-brand-cyan/30 text-brand-cyan hover:bg-brand-cyan/20 text-[11px] font-semibold transition-colors"
                        >
                          <span>{act.label}</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      ) : (
                        <button
                          key={idx}
                          onClick={() => {
                            soundFx.click();
                            act.onClick();
                          }}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-brand-indigo/15 border border-brand-indigo/30 text-indigo-300 hover:bg-brand-indigo/25 text-[11px] font-semibold transition-colors"
                        >
                          <span>{act.label}</span>
                        </button>
                      )
                    ))}
                  </div>
                )}

                {/* Quick Reply Suggestions */}
                {msg.quickReplies && msg.quickReplies.length > 0 && (
                  <div className="mt-2.5 ml-8 flex flex-wrap gap-1.5">
                    {msg.quickReplies.map((qr, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleSend(qr)}
                        className="px-2.5 py-1 rounded-lg bg-dark-950/80 border border-slate-800 hover:border-brand-cyan text-slate-300 hover:text-brand-cyan text-[11px] transition-all hover:scale-[1.02]"
                      >
                        {qr}
                      </button>
                    ))}
                  </div>
                )}

                <span className="text-[10px] text-slate-500 font-mono mt-1 px-1">
                  {msg.timestamp}
                </span>
              </div>
            ))}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex items-center gap-2 text-slate-400 text-xs">
                <div className="w-6 h-6 rounded-lg bg-brand-cyan/10 border border-brand-cyan/30 flex items-center justify-center text-brand-cyan shrink-0">
                  <Bot className="w-3.5 h-3.5 animate-pulse" />
                </div>
                <div className="px-3 py-2 rounded-2xl bg-slate-900 border border-slate-800 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan animate-bounce"></span>
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan animate-bounce [animation-delay:0.2s]"></span>
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan animate-bounce [animation-delay:0.4s]"></span>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Chat Input Bar */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="p-3 bg-dark-900/95 border-t border-slate-800/80 flex items-center gap-2"
          >
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder="Ask anything about Prince's apps, stack, or experience..."
              className="flex-1 px-4 py-2.5 rounded-xl bg-dark-950 border border-slate-700/80 text-white placeholder:text-slate-500 text-xs sm:text-sm focus:outline-none focus:border-brand-cyan transition-colors"
            />
            <button
              type="submit"
              disabled={!inputMessage.trim()}
              className="p-2.5 rounded-xl bg-gradient-to-r from-brand-cyan to-brand-electric text-dark-950 font-bold hover:opacity-90 disabled:opacity-30 transition-all shrink-0 cursor-pointer shadow-sm"
              title="Send Message"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>

        </div>
      )}
    </>
  );
}
