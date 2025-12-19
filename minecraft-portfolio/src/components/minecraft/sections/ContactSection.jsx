// src/components/minecraft/sections/ContactSection.jsx
import React, { useState, useEffect } from 'react';
import { Mail, Github, Linkedin, Book } from 'lucide-react';

const blackstoneStyle = {
  backgroundImage: "url('/mc/portal.png')",
  backgroundSize: '96px 96px',
  backgroundRepeat: 'repeat',
  imageRendering: 'pixelated',
  // make the portal texture brighter & more vivid
  filter: 'brightness(1.35) saturate(1.35)',
};

const cryingTextureStyle = {
  backgroundImage: "url('/mc/crying_obsidian.png')",
  backgroundSize: '96px 96px',
  backgroundRepeat: 'repeat',
  imageRendering: 'pixelated',
};

// Small Minecraft-style label
const MinecraftLabel = ({ children }) => (
  <span
    className="
      block
      font-mono
      text-[11px] sm:text-xs
      tracking-[0.22em]
      uppercase
      text-emerald-300/85
      mb-0.5
    "
    style={{
      fontFamily:
        '"Press Start 2P", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
    }}
  >
    {children}
  </span>
);

const ContactSection = () => {
  const [mounted, setMounted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleSend = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill out all fields to cast the spell!");
      return;
    }
    
    const subject = `Quest Inquiry from ${formData.name}`;
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
    
    // Open default mail client
    window.location.href = `mailto:vjain3@ualberta.ca?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section
      className={`
        relative
        transform transition-all duration-700
        ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}
      `}
    >
      {/* Ambient sparkles */}
      <div className="pointer-events-none absolute inset-0 opacity-70">
        <div className="absolute top-6 left-10 w-2 h-2 rounded-full bg-cyan-300/80 blur-[2px] animate-pulse" />
        <div className="absolute bottom-8 right-8 w-2 h-2 rounded-full bg-fuchsia-400/80 blur-[2px] animate-pulse" />
        <div className="absolute top-1/3 right-1/4 w-1.5 h-1.5 rounded-full bg-emerald-300/80 blur-[1px] animate-pulse" />
        <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 rounded-full bg-sky-300/80 blur-[1px] animate-pulse" />
      </div>

      {/* Main layout */}
      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-6 p-5 sm:p-6 md:p-7">
        {/* LEFT: Let’s Team Up */}
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <div className="shrink-0">
              <div
                className="
                  relative
                  w-9 sm:w-10
                  aspect-square
                  rounded-full
                  bg-gradient-to-br from-purple-500 to-cyan-400
                  shadow-[0_0_18px_rgba(56,189,248,0.9)]
                  flex items-center justify-center
                "
              >
                {/* optional dark inner circle for a nicer minecrafty badge look */}
                <div className="absolute inset-[3px] rounded-full bg-black/85" />
                <Mail className="relative z-10 h-4 w-4 sm:h-5 sm:w-5 text-slate-50" />
              </div>
            </div>
            <div>
              {/* Minecraft-style label */}
              <MinecraftLabel>COMMUNICATION HUB</MinecraftLabel>

              {/* Header */}
              <h3
                className="text-[13px] sm:text-sm md:text-base text-cyan-200 mt-1"
                style={{
                  textShadow: '0 0 8px rgba(8,145,178,0.9)',
                  fontFamily:
                    '"Press Start 2P", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                  letterSpacing: '0.08em',
                }}
              >
                LET&apos;S TEAM UP
              </h3>

              <p
                className="mt-3 text-sm sm:text-base text-slate-100 leading-relaxed"
                style={{ textShadow: '0 0 4px rgba(0,0,0,0.7)' }}
              >
                You&apos;ve reached the final section of the portfolio. Whether it's a Full Stack role, an AI collaboration, or just a chat - I&apos;m always ready for a new experience. Just enter through the nether portal :D
              </p>
            </div>
          </div>

          <div className="space-y-3 text-sm sm:text-base">
            <a
              href="mailto:vjain3@ualberta.ca"
              className="group flex items-center gap-3 text-slate-100 transition-transform hover:translate-x-0.5"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-black/70 border border-cyan-400/70 shadow-[0_0_12px_rgba(34,211,238,0.7)]">
                <Mail className="h-4 w-4 text-cyan-300" />
              </span>
              <span
                className="font-mono text-xs sm:text-sm group-hover:text-cyan-200 transition-colors"
                style={{ textShadow: '0 0 4px rgba(0,0,0,0.7)' }}
              >
                vjain3@ualberta.ca
              </span>
            </a>

            <a
              href="https://github.com/vaibh123540"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 text-slate-100 transition-transform hover:translate-x-0.5"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-black/70 border border-emerald-400/70 shadow-[0_0_12px_rgba(52,211,153,0.7)]">
                <Github className="h-4 w-4 text-emerald-300" />
              </span>
              <span
                className="font-mono text-xs sm:text-sm group-hover:text-emerald-200 transition-colors"
                style={{ textShadow: '0 0 4px rgba(0,0,0,0.7)' }}
              >
                github.com/vaibh123540
              </span>
            </a>

            <a
              href="https://www.linkedin.com/in/vjain3/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 text-slate-100 transition-transform hover:translate-x-0.5"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-black/70 border border-sky-400/70 shadow-[0_0_12px_rgba(56,189,248,0.7)]">
                <Linkedin className="h-4 w-4 text-sky-300" />
              </span>
              <span
                className="font-mono text-xs sm:text-sm group-hover:text-sky-200 transition-colors"
                style={{ textShadow: '0 0 4px rgba(0,0,0,0.7)' }}
              >
                linkedin.com/in/vjain3
              </span>
            </a>
          </div>

          <p
            className="mt-2 text-[11px] sm:text-xs text-slate-300/85 flex items-center gap-1"
            style={{ textShadow: '0 0 4px rgba(0,0,0,0.7)' }}
          >
            <Book className="h-3.5 w-3.5 text-fuchsia-300" />
            <span>
              Bonus: mention your favorite Minecraft block in the message.
            </span>
          </p>
        </div>

        {/* RIGHT: Quick Message – portal panel with glow */}
        <div className="relative">
          {/* Glowing outline around the panel */}
          <div className="pointer-events-none absolute -inset-[2px] rounded-2xl bg-gradient-to-r from-cyan-500/60 via-fuchsia-500/50 to-violet-500/60 opacity-80 blur-sm animate-pulse" />

          {/* Main portal panel */}
          <div
            className="relative rounded-2xl border border-slate-950/90 shadow-[0_18px_32px_rgba(0,0,0,0.95)] p-5 sm:p-6 overflow-hidden"
            style={blackstoneStyle}
          >
            {/* dark overlay for readability */}
            <div className="pointer-events-none absolute inset-0 bg-black/55" />

            {/* portal shimmer / ripple */}
            <div className="pointer-events-none absolute -inset-10 opacity-35 mix-blend-screen">
              <div className="w-full h-full bg-radial from-purple-500/40 to-transparent blur-3xl animate-pulse" />
            </div>

            {/* CONTENT */}
            <div className="relative z-10 space-y-4">
              {/* Header with Minecraft-style font */}
              <div className="flex flex-col">
                <MinecraftLabel>CONTACT SPELL</MinecraftLabel>
                <h3
                  className="text-[13px] sm:text-sm md:text-base text-slate-50 mt-1"
                  style={{
                    textShadow: '0 0 4px rgba(0,0,0,0.9)',
                    fontFamily:
                      '"Press Start 2P", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                    letterSpacing: '0.08em',
                  }}
                >
                  QUICK MESSAGE
                </h3>
              </div>

              <form
                onSubmit={handleSend}
                className="space-y-3 sm:space-y-4 text-sm sm:text-base"
              >
                <div className="space-y-1">
                  <label
                    className="text-slate-100 text-xs sm:text-sm"
                    style={{ textShadow: '0 0 4px rgba(0,0,0,0.7)' }}
                  >
                    Name
                  </label>
                  <input
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="
                      w-full rounded-xl px-3 py-2
                      bg-black/70 border border-slate-700
                      text-slate-50 placeholder:text-slate-500
                      focus:outline-none
                      focus:ring-2 focus:ring-cyan-400/90 focus:border-cyan-300
                      focus:shadow-[0_0_12px_rgba(56,189,248,0.9)]
                      transition-colors transition-shadow
                    "
                    placeholder="Alex/Steve"
                  />
                </div>

                <div className="space-y-1">
                  <label
                    className="text-slate-100 text-xs sm:text-sm"
                    style={{ textShadow: '0 0 4px rgba(0,0,0,0.7)' }}
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="
                      w-full rounded-xl px-3 py-2
                      bg-black/70 border border-slate-700
                      text-slate-50 placeholder:text-slate-500
                      focus:outline-none
                      focus:ring-2 focus:ring-cyan-400/90 focus:border-cyan-300
                      focus:shadow-[0_0_12px_rgba(56,189,248,0.9)]
                      transition-colors transition-shadow
                    "
                    placeholder="your@email.com"
                  />
                </div>

                <div className="space-y-1">
                  <label
                    className="text-slate-100 text-xs sm:text-sm"
                    style={{ textShadow: '0 0 4px rgba(0,0,0,0.7)' }}
                  >
                    Message
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="
                      w-full rounded-xl px-3 py-2
                      bg-black/70 border border-slate-700
                      text-slate-50 placeholder:text-slate-500
                      focus:outline-none
                      focus:ring-2 focus:ring-cyan-400/90 focus:border-cyan-300
                      focus:shadow-[0_0_12px_rgba(56,189,248,0.9)]
                      transition-colors transition-shadow
                      resize-none
                    "
                    placeholder="Send me a message to receive GTA 6. Trust."
                  />
                </div>

                {/* Button on crying obsidian with overlay + text shadow */}
                <button
                  type="submit"
                  className="
                    relative
                    w-full mt-2
                    rounded-xl py-2.5
                    text-slate-50 font-bold text-sm sm:text-base
                    shadow-[0_0_14px_rgba(192,132,252,0.9)]
                    hover:scale-[1.03] active:scale-[0.98]
                    transition-transform transition-shadow
                    hover:shadow-[0_0_22px_rgba(216,180,254,1)]
                    overflow-hidden
                  "
                  style={cryingTextureStyle}
                >
                  <span className="absolute inset-0 bg-black/40 pointer-events-none" />
                  <span
                    className="relative z-10"
                    style={{ textShadow: '0 0 4px rgba(0,0,0,0.95)' }}
                  >
                    Cast Message
                  </span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;