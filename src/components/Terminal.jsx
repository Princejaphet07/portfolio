import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, CornerDownLeft, Play, Trash2, Copy, Check } from 'lucide-react';
import confetti from 'canvas-confetti';
import { terminalCommands } from '../data/portfolioData';
import { soundFx } from '../utils/sound';

export default function Terminal({ isOpen = true }) {
  const [history, setHistory] = useState([
    {
      type: 'system',
      text: 'Prince Japhet Vender Interactive CLI Shell [Version 2.4.0]\nType "help" to see available commands or click quick chips below.',
    },
    {
      type: 'command',
      cmd: 'whoami',
      output: terminalCommands.whoami,
    },
  ]);
  const [inputVal, setInputVal] = useState('');
  const [cmdHistory, setCmdHistory] = useState(['whoami']);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [copied, setCopied] = useState(false);

  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const executeCommand = (cmdStr) => {
    const trimmed = cmdStr.trim().toLowerCase();
    if (!trimmed) return;

    soundFx.type();

    if (trimmed === 'clear') {
      setHistory([]);
      setInputVal('');
      return;
    }

    if (trimmed === 'sudo hire' || trimmed === 'hire') {
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#38bdf8', '#818cf8', '#a855f7', '#34d399', '#f59e0b'],
      });
      soundFx.success();

      setHistory((prev) => [
        ...prev,
        {
          type: 'command',
          cmd: cmdStr,
          output: `🎉 ACCESS GRANTED! Hiring Priority Protocol Initialized.
Thank you for your interest! Let's build something remarkable together.
Direct Email: princejaphetvender@gmail.com
Or scroll down to the Contact form below to send an instant message!`,
        },
      ]);
      setCmdHistory((prev) => [...prev, cmdStr]);
      setInputVal('');
      return;
    }

    const output = terminalCommands[trimmed] || `command not found: "${cmdStr}". Type "help" for a list of available commands.`;

    setHistory((prev) => [
      ...prev,
      {
        type: 'command',
        cmd: cmdStr,
        output,
      },
    ]);
    setCmdHistory((prev) => [...prev, cmdStr]);
    setHistoryIndex(-1);
    setInputVal('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      executeCommand(inputVal);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (cmdHistory.length > 0) {
        const nextIdx = historyIndex === -1 ? cmdHistory.length - 1 : Math.max(0, historyIndex - 1);
        setHistoryIndex(nextIdx);
        setInputVal(cmdHistory[nextIdx]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex !== -1) {
        const nextIdx = historyIndex + 1;
        if (nextIdx < cmdHistory.length) {
          setHistoryIndex(nextIdx);
          setInputVal(cmdHistory[nextIdx]);
        } else {
          setHistoryIndex(-1);
          setInputVal('');
        }
      }
    }
  };

  const quickCommands = ['whoami', 'skills', 'projects', 'stats', 'cat resume', 'sudo hire', 'clear'];

  const copyTerminalOutput = () => {
    soundFx.click();
    const fullText = history
      .map((item) => (item.type === 'system' ? item.text : `$ ${item.cmd}\n${item.output}`))
      .join('\n\n');
    navigator.clipboard.writeText(fullText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full rounded-2xl glass-panel border border-slate-700/80 shadow-2xl overflow-hidden font-mono text-xs sm:text-sm">
      {/* Terminal Title Bar */}
      <div className="bg-dark-900/90 px-4 py-3 border-b border-slate-800 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
          </div>
          <span className="text-slate-400 font-medium text-xs ml-2 flex items-center gap-1.5">
            <TerminalIcon className="w-3.5 h-3.5 text-brand-cyan" />
            prince@vender-devbox:~ (zsh)
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={copyTerminalOutput}
            className="p-1.5 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-slate-200 transition-colors"
            title="Copy Terminal Logs"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
          </button>
          <button
            onClick={() => {
              soundFx.click();
              setHistory([]);
            }}
            className="p-1.5 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-slate-200 transition-colors"
            title="Clear Terminal"
          >
            <Trash2 className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Quick Command Action Chips */}
      <div className="bg-dark-950/60 px-4 py-2 border-b border-slate-800/60 flex items-center gap-2 overflow-x-auto no-scrollbar">
        <span className="text-[11px] text-slate-400 flex items-center gap-1 shrink-0">
          <Play className="w-2.5 h-2.5 text-brand-cyan fill-brand-cyan" /> Quick run:
        </span>
        {quickCommands.map((cmd) => (
          <button
            key={cmd}
            onClick={() => {
              soundFx.click();
              executeCommand(cmd);
            }}
            className={`px-2.5 py-1 rounded-md text-[11px] font-mono border transition-all duration-150 shrink-0 ${
              cmd === 'sudo hire'
                ? 'border-brand-cyan/40 bg-brand-cyan/15 text-brand-cyan hover:bg-brand-cyan/25 font-semibold'
                : 'border-slate-800 bg-slate-900/80 text-slate-400 hover:text-white hover:border-slate-700'
            }`}
          >
            {cmd}
          </button>
        ))}
      </div>

      {/* Terminal Screen & Output Buffer */}
      <div
        className="p-4 sm:p-5 min-h-[260px] max-h-[380px] overflow-y-auto space-y-4 bg-dark-950/90"
        onClick={() => inputRef.current?.focus()}
      >
        {history.map((item, idx) => (
          <div key={idx} className="space-y-1">
            {item.type === 'system' ? (
              <div className="text-slate-400 whitespace-pre-wrap leading-relaxed">{item.text}</div>
            ) : (
              <div>
                <div className="flex items-center gap-2 text-slate-300">
                  <span className="text-brand-cyan font-bold">prince@portfolio:~$</span>
                  <span className="text-white font-semibold">{item.cmd}</span>
                </div>
                <div className="text-slate-300 whitespace-pre-wrap pl-4 border-l-2 border-slate-800/80 mt-1 leading-relaxed text-xs sm:text-[13px]">
                  {item.output}
                </div>
              </div>
            )}
          </div>
        ))}

        {/* Live Input Line */}
        <div className="flex items-center gap-2 pt-1">
          <span className="text-brand-cyan font-bold shrink-0">prince@portfolio:~$</span>
          <input
            ref={inputRef}
            type="text"
            value={inputVal}
            onChange={(e) => {
              soundFx.type();
              setInputVal(e.target.value);
            }}
            onKeyDown={handleKeyDown}
            placeholder="Type 'help' or any command..."
            className="flex-1 bg-transparent border-none outline-none text-white font-mono text-xs sm:text-sm focus:ring-0 placeholder:text-slate-600"
            autoComplete="off"
            spellCheck="false"
          />
          <button
            onClick={() => executeCommand(inputVal)}
            className="p-1 rounded text-slate-500 hover:text-brand-cyan"
            title="Execute"
          >
            <CornerDownLeft className="w-3.5 h-3.5" />
          </button>
        </div>

        <div ref={bottomRef} />
      </div>
    </div>
  );
}
