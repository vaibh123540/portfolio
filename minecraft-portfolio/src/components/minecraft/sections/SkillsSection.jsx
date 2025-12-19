// src/components/minecraft/sections/SkillsSection.jsx
import React from 'react';
import { Code2, Cpu, Globe, Database, Terminal, Layers } from 'lucide-react';

const craftingSkills = [
  // Row 1: Frontend Core
  { name: 'React', icon: '/mc/react.png', level: 5 },
  { name: 'Git', icon: '/mc/git.png', level: 5 },
  { name: 'TypeScript', icon: '/mc/typescript.png', level: 4 },
  
  // Row 2: Backend & Systems
  { name: 'Node.js', icon: '/mc/nodejs.png', level: 5 },
  { name: 'Python', icon: '/mc/python.png', level: 4 },
  { name: 'C / C++', icon: '/mc/c.png', level: 4 },
  
  // Row 3: App & Infra
  { name: 'Java', icon: '/mc/java.png', level: 4 },
  { name: 'SQL', icon: '/mc/sql.png', level: 4 },
  { name: 'Docker', icon: '/mc/docker.png', level: 3 },
];

const bars = [
  {
    title: 'Frontend & UI',
    subtitle: 'React, Next.js, Tailwind, Flutter',
    icon: Globe,
    value: 95,
    color: 'from-sky-400 to-indigo-400',
  },
  {
    title: 'Backend & Cloud',
    subtitle: 'Node, Express, Supabase, Firebase',
    icon: Database,
    value: 90,
    color: 'from-emerald-400 to-teal-400',
  },
  {
    title: 'Systems & ML',
    subtitle: 'C, Python, Ray Tracing, RL',
    icon: Cpu,
    value: 85,
    color: 'from-amber-400 to-orange-500',
  },
  {
    title: 'Mobile & DevOps',
    subtitle: 'Android (Java), Docker, Git',
    icon: Layers,
    value: 88,
    color: 'from-purple-400 to-pink-400',
  },
];

// shared heading style for the Minecraft-y font
const mcHeadingFont = {
  fontFamily:
    '"Press Start 2P", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
};

const SkillsSection = () => {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section
      className={`
        space-y-4 md:space-y-5
        transform transition-all duration-700
        ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}
      `}
    >
      {/* Header row */}
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3">
        <div>
          {/* small label in MC font */}
          <p
            className="text-[9px] sm:text-[10px] uppercase tracking-[0.22em] text-emerald-300/80"
            style={{
              ...mcHeadingFont,
              textShadow: '0 0 6px rgba(16,185,129,0.9)',
            }}
          >
            SKILLS & STACK
          </p>

          <h2 className="mt-1 flex items-center gap-2 text-slate-50 drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-black/60 border border-emerald-400/70 shadow-[0_0_18px_rgba(34,197,94,0.5)]">
              <Code2 className="h-4 w-4 text-emerald-300" />
            </span>
            {/* main heading in MC font */}
            <span
              className="text-[15px] sm:text-[18px] md:text-[20px] uppercase tracking-[0.18em]"
              style={{
                ...mcHeadingFont,
                textShadow: '0 0 8px rgba(16,185,129,0.95)',
              }}
            >
              CRAFTING TABLE
            </span>
          </h2>
        </div>

        {/* Recipe text – keep normal font, acts as subtitle */}
        <div className="flex items-center gap-2 text-[11px] sm:text-xs font-mono text-slate-100">
          <span className="text-emerald-300 uppercase tracking-[0.22em]">
            Recipe:
          </span>
          <span className="text-slate-200">
            Software Development Intern
          </span>
        </div>
      </div>

      {/* Grid + bars directly on the plank texture */}
      <div className="grid gap-5 md:gap-6 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] items-start">
        {/* Left: 3x3 crafting grid using hotbar slots */}
        <div className="space-y-3">
          <div className="flex items-center justify-between gap-3">
            {/* section label in MC font */}
            <h3
              className="text-[11px] sm:text-xs font-semibold text-slate-50 uppercase tracking-[0.16em]"
              style={{
                ...mcHeadingFont,
                textShadow: '0 0 6px rgba(0,0,0,0.9)',
              }}
            >
              3×3 GRID
            </h3>
          </div>

          <div className="grid grid-cols-3 gap-2.5 sm:gap-3">
            {craftingSkills.map((skill, index) => (
              <div
                key={skill.name}
                style={{ transitionDelay: `${80 + index * 40}ms` }}
                className={`
                  group relative aspect-square rounded-xl overflow-hidden
                  border border-black/80
                  shadow-[0_12px_24px_rgba(0,0,0,0.9)]
                  transform transition-all duration-500
                  hover:-translate-y-1 hover:shadow-[0_18px_28px_rgba(0,0,0,0.95)]
                  ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}
                `}
              >
                {/* Hotbar slot background */}
                <div
                  className="
                    absolute inset-0
                    bg-[url('/mc/hotbar_slot.png')]
                    bg-[length:100%_100%]
                    image-pixelated
                    opacity-95
                  "
                />

                {/* Content */}
                <div className="relative z-10 flex flex-col items-center justify-center h-full p-2 text-center">
                  
                  {/* LOGO IMAGE HERE */}
                  <div className="relative w-8 h-8 sm:w-10 sm:h-10 mb-1.5 transition-transform group-hover:scale-110 duration-300">
                    <img 
                      src={skill.icon} 
                      alt={skill.name}
                      className="w-full h-full object-contain drop-shadow-[0_4px_4px_rgba(0,0,0,0.5)]" 
                    />
                  </div>

                  <span className="text-[10px] sm:text-[11px] font-mono font-bold text-slate-100/90 leading-tight">
                    {skill.name}
                  </span>

                  {/* Level dots */}
                  <div className="mt-1.5 flex gap-[2px]">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span
                        key={i}
                        className={`
                          h-[3px] w-[3px] sm:h-[4px] sm:w-[4px] rounded-full 
                          ${i < skill.level ? 'bg-emerald-400 shadow-[0_0_4px_#34d399]' : 'bg-slate-700'}
                        `}
                      />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Specialization bars (wood texture background) */}
        <div className="space-y-4">
          <div className="flex items-center justify-between gap-3">
            {/* section label in MC font */}
            <h3
              className="text-[11px] sm:text-xs font-semibold text-slate-50 uppercase tracking-[0.16em]"
              style={{
                ...mcHeadingFont,
                textShadow: '0 0 6px rgba(0,0,0,0.9)',
              }}
            >
              STATS
            </h3>
            <span className="text-[11px] font-mono text-slate-300">
              experience points
            </span>
          </div>

          <div className="space-y-3.5">
            {bars.map((bar, index) => {
              const Icon = bar.icon;
              return (
                <div
                  key={bar.title}
                  style={{
                    transitionDelay: `${140 + index * 80}ms`,
                    backgroundImage: "url('/mc/skills_wood.png')", // ensure this asset exists or use oak_planks
                    backgroundSize: '128px 128px',
                    backgroundRepeat: 'repeat',
                    imageRendering: 'pixelated',
                  }}
                  className={`
                    relative overflow-hidden rounded-xl
                    border border-black/80
                    shadow-[0_14px_26px_rgba(0,0,0,0.9)]
                    px-3.5 py-3
                    transform transition-all duration-500
                    hover:-translate-y-0.5 hover:shadow-[0_18px_30px_rgba(0,0,0,0.95)]
                    ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}
                  `}
                >
                  <div className="pointer-events-none absolute inset-0 bg-black/50" />
                  <div className="relative z-10">
                    <div className="flex items-center justify-between gap-3 mb-1">
                      <div className="flex items-center gap-2">
                        <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-black/40 border border-white/10">
                          <Icon className="h-3.5 w-3.5 text-emerald-300" />
                        </span>
                        <div>
                          <h4 className="text-xs sm:text-sm font-bold text-slate-50 leading-none">
                            {bar.title}
                          </h4>
                          <p className="text-[10px] text-slate-300 font-mono mt-0.5">
                            {bar.subtitle}
                          </p>
                        </div>
                      </div>
                      <span className="text-[11px] font-mono text-emerald-300 font-bold">
                        {bar.value}%
                      </span>
                    </div>

                    <div className="mt-2 h-2 rounded-full bg-black/60 border border-white/5 overflow-hidden">
                      <div
                        className={`
                          h-full rounded-full bg-gradient-to-r ${bar.color}
                          shadow-[0_0_10px_rgba(52,211,153,0.5)]
                          transition-all duration-1000 ease-out
                        `}
                        style={{ width: mounted ? `${bar.value}%` : '0%' }}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <p className="text-[11px] sm:text-xs font-mono text-emerald-300/90 text-center">
            Tip: Combine 3x3 grid to craft complex systems.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;