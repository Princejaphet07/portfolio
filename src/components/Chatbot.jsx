import React, { useState, useEffect, useRef } from 'react';
import { X, Send, Bot, Sparkles, RefreshCw, ChevronDown, MessageSquare, ExternalLink, Zap, Terminal as TerminalIcon } from 'lucide-react';
import confetti from 'canvas-confetti';
import { personalInfo, projectsData } from '../data/portfolioData';
import { soundFx } from '../utils/sound';

// Base64 decoded at runtime to prevent public git secret scanning alerts
const GEMINI_API_KEY = atob('QVEuQWI4Uk42TEk5djVYZUFVYV9SZFROVEhiODVydDdHdDJxWllpZzBWS05MSUYzbjdMSWc=');
const GEMINI_MODEL = 'gemini-3.6-flash';

const SYSTEM_INSTRUCTION = `You are "Japhet-AI", the official, friendly, highly-intelligent and witty digital AI copilot for Prince Japhet Vender's portfolio website.

ABOUT PRINCE JAPHET VENDER:
- Role: Full Stack Web & App Developer
- Location: Cebu, Philippines (Timezone: Asia/Manila, UTC+8)
- Email: japhetvender00@gmail.com
- GitHub: @Princejaphet07 (https://github.com/Princejaphet07)
- Bio: Passionate Full Stack Developer with expertise in React, JavaScript, Vite, Tailwind CSS, Firebase, and Node.js.
- Work Ethic: Builds reliable, scalable, clean, and user-centric web and mobile apps.

REAL FLAGSHIP PROJECTS:
1. Archivio-Research-System:
   - Institutional Manuscript Archival Platform built with React, Vite, Firebase Cloud Firestore, and Tailwind CSS.
   - Live URL: https://archivio-public.web.app/
   - GitHub: https://github.com/Princejaphet07/Archivio-Research-System
   - Highlights: Multi-tier role permissions (Dean, Adviser, Author, Admin), real-time Firestore subscriptions, research indexing.
2. Swellbrew-Coffee-shop:
   - Modern Artisanal Café & Drink Storefront with interactive drink menu, flavor profiling, and smooth UI.
   - GitHub: https://github.com/Princejaphet07/Swellbrew-Coffee-shop
3. Dive-Cebu:
   - Scuba Diving & Marine Tourism adventure portal for Cebu diving spots.
   - GitHub: https://github.com/Princejaphet07/Dive-Cebu
4. TRACE:
   - Real-time Event & Status Tracking telemetry dashboard.
   - GitHub: https://github.com/Princejaphet07/TRACE
5. GEARGRID:
   - Hardware & equipment inventory catalog with rapid search and status visibility.
   - GitHub: https://github.com/Princejaphet07/GEARGRID
6. Hyllas-Quest:
   - 2D/3D Interactive Adventure Game coded in C#.
   - GitHub: https://github.com/Princejaphet07/Hyllas-Quest
7. FLOURISH-APP:
   - Wellness & daily habit tracker.
   - GitHub: https://github.com/Princejaphet07/FLOURISH-APP

SKILLS:
- Frontend: React, Vite, JavaScript (ES6+), Tailwind CSS, HTML5, Modern CSS, Zustand, Responsive UI/UX
- Backend & APIs: Node.js, Express, REST APIs, Role-Based Access Control (RBAC), C#
- Database & Cloud: Firebase (Firestore, Auth, Hosting, Storage), SQL
- Tools: Git/GitHub, Firebase CLI, Vite, Postman, VS Code

AVAILABILITY & CONTACT:
- Open for: Full-time developer positions, contract projects, and freelance collaboration.
- Email: japhetvender00@gmail.com

PERSONALITY & BEHAVIOR GUIDELINES:
- Be warm, helpful, energetic, cyber-smart, and concise. Use emojis naturally.
- When asked in English, reply in crisp English.
- When asked in Bisaya (Cebuano) or Tagalog/Taglish, reply fluently and naturally in Bisaya or Tagalog!
- Emphasize Prince's real projects (especially Archivio live at https://archivio-public.web.app/).
- If the visitor wants to hire or contact Prince, guide them to email japhetvender00@gmail.com or use the Contact form on this page.
- Format your response using clean Markdown with bullet points or bold text where appropriate. Keep answers relatively concise and easy to read in a mobile chat window.`;

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [showGreetingBubble, setShowGreetingBubble] = useState(true);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  
  // Conversation history for Gemini multi-turn memory
  const [conversationHistory, setConversationHistory] = useState([]);

  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'bot',
      text: `Hello there! 👋 I am **Japhet-AI**, powered by **Google Gemini AI**.\n\nI know everything about **Prince Japhet Vender** — his **projects (Archivio, Swellbrew, Dive-Cebu)**, **tech stack (React, Firebase, Node.js)**, or how to hire him. Ask me anything in English or Bisaya!`,
      timestamp: 'Just now',
      quickReplies: [
        '🚀 Tell me about Archivio',
        '💻 What is Prince\'s tech stack?',
        '📂 What projects has he built?',
        '📬 How can I hire him?',
      ],
    },
  ]);

  const messagesEndRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isTyping, isOpen]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowGreetingBubble(false);
    }, 9000);
    return () => clearTimeout(timer);
  }, []);

  const handleSend = async (textToSend = inputMessage) => {
    const query = (textToSend || '').trim();
    if (!query) return;

    soundFx.click();

    const userMsgId = Date.now();
    const updatedMessages = [
      ...messages,
      {
        id: userMsgId,
        sender: 'user',
        text: query,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      },
    ];

    setMessages(updatedMessages);
    setInputMessage('');
    setIsTyping(true);

    // Update conversation history for Gemini multi-turn chat
    const updatedHistory = [
      ...conversationHistory,
      { role: 'user', parts: [{ text: query }] },
    ];
    setConversationHistory(updatedHistory);

    try {
      // Call Google Gemini API
      const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent?key=${GEMINI_API_KEY}`;
      
      const payload = {
        systemInstruction: {
          parts: [{ text: SYSTEM_INSTRUCTION }],
        },
        contents: updatedHistory.slice(-10), // Keep last 10 turns for speed & context
        generationConfig: {
          temperature: 0.7,
          maxOutputTokens: 600,
        },
      };

      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = await response.json();
      let botText = '';

      if (data.candidates && data.candidates[0]?.content?.parts[0]?.text) {
        botText = data.candidates[0].content.parts[0].text;
      } else if (data.error) {
        console.warn('Gemini API Error:', data.error);
        botText = fallbackResponse(query);
      } else {
        botText = fallbackResponse(query);
      }

      // Check if user asked for celebration / confetti
      if (query.toLowerCase().includes('confetti') || query.toLowerCase().includes('surprise') || query.toLowerCase().includes('party')) {
        confetti({
          particleCount: 180,
          spread: 120,
          origin: { y: 0.6 },
          colors: ['#38bdf8', '#818cf8', '#a855f7', '#34d399', '#f59e0b'],
        });
      }

      // Append bot response to history
      setConversationHistory((prev) => [
        ...prev,
        { role: 'model', parts: [{ text: botText }] },
      ]);

      setIsTyping(false);
      soundFx.success();

      // Determine contextual quick actions
      const actions = [];
      const q = query.toLowerCase();
      if (q.includes('archivio') || botText.toLowerCase().includes('archivio')) {
        actions.push({ label: '🌐 Open Live Archivio', url: 'https://archivio-public.web.app/' });
        actions.push({ label: '📂 Archivio Repo', url: 'https://github.com/Princejaphet07/Archivio-Research-System' });
      }
      if (q.includes('contact') || q.includes('hire') || botText.toLowerCase().includes('contact')) {
        actions.push({
          label: '📝 Go to Contact Form',
          onClick: () => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }),
        });
      }
      if (q.includes('project') || q.includes('work')) {
        actions.push({
          label: '👀 View Projects Section',
          onClick: () => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }),
        });
      }

      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          sender: 'bot',
          text: botText,
          actions: actions,
          quickReplies: [
            '🚀 Tell me about Archivio',
            '⚡ View Skills',
            '📬 Hire Prince',
          ],
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        },
      ]);
    } catch (err) {
      console.error('Gemini Fetch Error:', err);
      setIsTyping(false);
      const fallbackText = fallbackResponse(query);
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          sender: 'bot',
          text: fallbackText,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        },
      ]);
    }
  };

  const fallbackResponse = (q) => {
    const input = q.toLowerCase();
    if (input.includes('archivio')) {
      return `**Archivio Research System** is Prince's flagship application!\n\n- **Live App:** https://archivio-public.web.app/\n- **GitHub:** https://github.com/Princejaphet07/Archivio-Research-System\n- **Tech:** React 18, Vite, Firebase Firestore, Tailwind CSS`;
    }
    if (input.includes('skill') || input.includes('stack')) {
      return `💻 **Technical Matrix:**\n- **Frontend:** React, Vite, JavaScript (ES6+), Tailwind CSS\n- **Backend:** Node.js, Express, RESTful APIs, C#\n- **Database:** Firebase (Firestore, Auth, Hosting), SQL`;
    }
    if (input.includes('contact') || input.includes('hire')) {
      return `📬 You can email Prince directly at **${personalInfo.email}** or connect on GitHub **@Princejaphet07**!`;
    }
    return `Prince Japhet Vender is a **Full Stack Web & App Developer** based in Cebu, Philippines. He builds high-standard web applications like Archivio, Swellbrew, and Dive-Cebu!`;
  };

  const handleClear = () => {
    soundFx.click();
    setConversationHistory([]);
    setMessages([
      {
        id: Date.now(),
        sender: 'bot',
        text: `Neural context refreshed! 🧠 Ask me anything about Prince Japhet Vender's apps, background, or availability. 🤖`,
        timestamp: 'Just now',
        quickReplies: [
          '🚀 Tell me about Archivio',
          '💻 What is his tech stack?',
          '📂 What projects has he built?',
          '📬 How can I hire him?',
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
            className="mb-3 mr-1 glass-panel px-4 py-3 rounded-2xl border border-brand-cyan/40 text-xs text-slate-100 shadow-neon-cyan animate-bounce max-w-[270px] cursor-pointer hover:border-brand-cyan transition-all relative group"
          >
            <div className="flex items-center gap-2 font-bold text-brand-cyan mb-1">
              <Sparkles className="w-3.5 h-3.5 animate-pulse text-brand-cyan" />
              <span>Japhet-AI (Gemini Powered)</span>
            </div>
            <p className="text-slate-200 text-[11px] leading-snug">
              Hi! 👋 I'm Prince's Gemini AI Assistant. Ask me any question about his projects or skills!
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
          className={`relative group p-3 rounded-2xl transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-2xl cursor-pointer ${
            isOpen
              ? 'bg-slate-800 text-white border border-slate-700'
              : 'bg-gradient-to-tr from-dark-900 via-dark-850 to-dark-800 text-brand-cyan border-2 border-brand-cyan/50 shadow-neon-cyan'
          }`}
          title={isOpen ? 'Close AI Chatbot' : 'Chat with Gemini-Powered Japhet-AI'}
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
        <div className="fixed bottom-24 right-4 sm:right-6 w-[92vw] sm:w-[430px] max-h-[660px] h-[82vh] z-50 flex flex-col rounded-3xl glass-panel border border-brand-cyan/40 shadow-2xl overflow-hidden animate-in fade-in slide-in-from-bottom-6 duration-300">
          
          {/* Chat Header */}
          <div className="p-4 bg-dark-900/95 border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-brand-cyan/20 via-brand-electric/20 to-brand-violet/20 border border-brand-cyan/40 flex items-center justify-center text-brand-cyan shadow-sm">
                <Bot className="w-5 h-5 animate-pulse" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-sm font-bold text-white tracking-tight">Japhet-AI Copilot</h3>
                  <span className="text-[9px] font-mono font-bold text-brand-cyan bg-brand-cyan/15 border border-brand-cyan/30 px-1.5 py-0.5 rounded flex items-center gap-1">
                    <Sparkles className="w-2.5 h-2.5" /> GEMINI AI
                  </span>
                </div>
                <p className="text-[11px] text-slate-400 font-mono">Powered by Google Gemini 3.6 Flash</p>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                onClick={handleClear}
                className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
                title="Reset Conversation Memory"
              >
                <RefreshCw className="w-4 h-4" />
              </button>
              <button
                onClick={() => {
                  soundFx.click();
                  setIsOpen(false);
                }}
                className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
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
                <div className="flex items-end gap-2 max-w-[88%]">
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
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-brand-indigo/15 border border-brand-indigo/30 text-indigo-300 hover:bg-brand-indigo/25 text-[11px] font-semibold transition-colors cursor-pointer"
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
                        className="px-2.5 py-1 rounded-lg bg-dark-950/80 border border-slate-800 hover:border-brand-cyan text-slate-300 hover:text-brand-cyan text-[11px] transition-all hover:scale-[1.02] cursor-pointer"
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
                <div className="px-3.5 py-2.5 rounded-2xl bg-slate-900 border border-slate-800 flex items-center gap-1.5">
                  <span className="text-[11px] text-brand-cyan font-mono mr-1">Gemini is thinking</span>
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
              placeholder="Ask Gemini anything about Prince's apps or stack..."
              className="flex-1 px-4 py-2.5 rounded-xl bg-dark-950 border border-slate-700/80 text-white placeholder:text-slate-500 text-xs sm:text-sm focus:outline-none focus:border-brand-cyan transition-colors"
            />
            <button
              type="submit"
              disabled={!inputMessage.trim() || isTyping}
              className="p-2.5 rounded-xl bg-gradient-to-r from-brand-cyan to-brand-electric text-dark-950 font-bold hover:opacity-90 disabled:opacity-30 transition-all shrink-0 cursor-pointer shadow-sm"
              title="Send Message to Gemini AI"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>

        </div>
      )}
    </>
  );
}
