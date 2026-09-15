import React from 'react';

// Official & Colorful SVG Icons for Tech Stack and Brands

export function Github({ className = "w-4 h-4", colored = false }) {
  if (colored) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="11" fill="url(#gh-grad)" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
          fill="#ffffff"
        />
        <defs>
          <linearGradient id="gh-grad" x1="2" y1="2" x2="22" y2="22" gradientUnits="userSpaceOnUse">
            <stop stopColor="#6366f1" />
            <stop offset="0.5" stopColor="#a855f7" />
            <stop offset="1" stopColor="#ec4899" />
          </linearGradient>
        </defs>
      </svg>
    );
  }

  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      />
    </svg>
  );
}

export function Linkedin({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="#0A66C2">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
    </svg>
  );
}

export function ReactIcon({ className = "w-5 h-5" }) {
  return (
    <svg className={className} viewBox="-11.5 -10.23174 23 20.46348" fill="none">
      <circle cx="0" cy="0" r="2.05" fill="#61DAFB" />
      <g stroke="#61DAFB" strokeWidth="1" fill="none">
        <ellipse rx="11" ry="4.2" />
        <ellipse rx="11" ry="4.2" transform="rotate(60)" />
        <ellipse rx="11" ry="4.2" transform="rotate(120)" />
      </g>
    </svg>
  );
}

export function JavaScriptIcon({ className = "w-5 h-5" }) {
  return (
    <svg className={className} viewBox="0 0 32 32">
      <rect width="32" height="32" rx="6" fill="#F7DF1E" />
      <path d="M19.5 12h3v11c0 2.2-1.3 3.5-3.5 3.5-1.5 0-2.8-.7-3.4-1.8l2.2-1.3c.3.6.8.9 1.4.9.8 0 1.3-.4 1.3-1.3v-11zm-8.8 6.6c.5.8 1.1 1.3 2 1.3.8 0 1.3-.4 1.3-1 0-.7-.5-1-1.6-1.5-2.1-.9-3.2-1.9-3.2-3.8 0-1.9 1.5-3.4 3.7-3.4 1.6 0 2.8.6 3.6 2l-2.1 1.4c-.4-.7-.9-1-1.5-1-.7 0-1.1.4-1.1.9 0 .6.4.9 1.4 1.3 2.3 1 3.4 2 3.4 4 0 2.3-1.8 3.6-4.1 3.6-2.1 0-3.6-1-4.3-2.6l2.5-1.2z" fill="#000000" />
    </svg>
  );
}

export function TailwindIcon({ className = "w-5 h-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="#38BDF8">
      <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />
    </svg>
  );
}

export function FirebaseIcon({ className = "w-5 h-5" }) {
  return (
    <svg className={className} viewBox="0 0 32 32">
      <path d="M5.6 24.3L12.4 4.8a1.2 1.2 0 0 1 2.3.2l2.9 8.6-12 10.7z" fill="#FFA000" />
      <path d="M19.8 10.4L17.6 3.8a1.2 1.2 0 0 0-2.3 0L5.6 24.3l14.2-13.9z" fill="#F57C00" />
      <path d="M5.6 24.3l10.4 5.9a1.2 1.2 0 0 0 1.2 0l9.2-5.9-20.8 0z" fill="#FFCA28" />
      <path d="M26.4 24.3L22.6 9.8a1.2 1.2 0 0 0-2.2-.4L5.6 24.3l10.4 5.9a1.2 1.2 0 0 0 1.2 0l9.2-5.9z" fill="#FFA000" />
    </svg>
  );
}

export function NodeIcon({ className = "w-5 h-5" }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="#5FA04E">
      <path d="M16 2.5l12 6.9v13.8l-12 6.9-12-6.9v-13.8l12-6.9zm0 3.2l-9.2 5.3v10.6l9.2 5.3 9.2-5.3v-10.6l-9.2-5.3z" />
    </svg>
  );
}

export function ViteIcon({ className = "w-5 h-5" }) {
  return (
    <svg className={className} viewBox="0 0 32 32">
      <path d="M29.5 5.5l-13 23a1 1 0 0 1-1.7 0l-13-23a1 1 0 0 1 .9-1.5h26a1 1 0 0 1 .8 1.5z" fill="url(#vite-grad)" />
      <path d="M18.8 3.5L11.5 16h4.8l-3.2 8.5 10.2-12.8h-5.2l3.7-8.2z" fill="#FFD62E" />
      <defs>
        <linearGradient id="vite-grad" x1="4" y1="4" x2="28" y2="28" gradientUnits="userSpaceOnUse">
          <stop stopColor="#41D1FF" />
          <stop offset="1" stopColor="#BD34FE" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function HTMLIcon({ className = "w-5 h-5" }) {
  return (
    <svg className={className} viewBox="0 0 32 32">
      <path d="M4 2.5l2.6 25 9.4 3 9.4-3 2.6-25h-24zm19.8 6.5h-15.6l.4 4.5h14.8l-1 11-6.4 1.8-6.4-1.8-.4-5h3.6l.2 2.3 2.6.7 2.6-.7.3-3.6h-9.8l-.8-9.2h16.5v-.0z" fill="#E34F26" />
    </svg>
  );
}

export function CSSIcon({ className = "w-5 h-5" }) {
  return (
    <svg className={className} viewBox="0 0 32 32">
      <path d="M4 2.5l2.6 25 9.4 3 9.4-3 2.6-25h-24zm19.8 6.5h-15.6l.4 4.5h14.8l-1 11-6.4 1.8-6.4-1.8-.4-5h3.6l.2 2.3 2.6.7 2.6-.7.3-3.6h-9.8l-.8-9.2h16.5v-.0z" fill="#1572B6" />
    </svg>
  );
}

export function CSharpIcon({ className = "w-5 h-5" }) {
  return (
    <svg className={className} viewBox="0 0 32 32">
      <circle cx="16" cy="16" r="14" fill="#9B4993" />
      <path d="M19 10.5c-3.6 0-6.5 2.5-6.5 5.5s2.9 5.5 6.5 5.5c1.8 0 3.3-.6 4.4-1.7l-1.8-1.5c-.7.7-1.6 1.1-2.6 1.1-2.2 0-4-1.5-4-3.4s1.8-3.4 4-3.4c1 0 1.9.4 2.6 1.1l1.8-1.5c-1.1-1.1-2.6-1.7-4.4-1.7zm5.5 2.5h1.2v2h2v1.2h-2v2h2v1.2h-2v2h-1.2v-2h-2v-1.2h2v-2h-2V13h2v-2zm0 3.2v2h2v-2h-2z" fill="#ffffff" />
    </svg>
  );
}

// Master Tech Icon Selector
export function TechIcon({ name, className = "w-5 h-5" }) {
  const iconKey = (name || '').toLowerCase();

  if (iconKey.includes('react')) return <ReactIcon className={className} />;
  if (iconKey.includes('javascript') || iconKey === 'js') return <JavaScriptIcon className={className} />;
  if (iconKey.includes('tailwind')) return <TailwindIcon className={className} />;
  if (iconKey.includes('firebase') || iconKey.includes('firestore')) return <FirebaseIcon className={className} />;
  if (iconKey.includes('node') || iconKey.includes('express')) return <NodeIcon className={className} />;
  if (iconKey.includes('vite')) return <ViteIcon className={className} />;
  if (iconKey.includes('html')) return <HTMLIcon className={className} />;
  if (iconKey.includes('css')) return <CSSIcon className={className} />;
  if (iconKey.includes('c#') || iconKey.includes('csharp')) return <CSharpIcon className={className} />;
  if (iconKey.includes('git') || iconKey.includes('github')) return <Github className={className} colored={true} />;

  return (
    <div className={`${className} rounded-md bg-gradient-to-tr from-brand-cyan to-brand-violet flex items-center justify-center text-[10px] font-bold text-dark-950`}>
      {name?.substring(0, 2).toUpperCase() || '<>'}
    </div>
  );
}
