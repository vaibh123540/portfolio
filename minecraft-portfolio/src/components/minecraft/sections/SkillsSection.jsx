// src/components/minecraft/sections/SkillsSection.jsx
import React from 'react';
import { Code2, Cpu, Cloud, Database } from 'lucide-react';

const craftingSkills = [
  { name: 'React', color: '#38BDF8', level: 5 },
  { name: 'TypeScript', color: '#60A5FA', level: 5 },
  { name: 'Node.js', color: '#22C55E', level: 5 },
  { name: 'Python', color: '#0EA5E9', level: 4 },
  { name: 'AWS', color: '#F97316', level: 4 },
  { name: 'Docker', color: '#3B82F6', level: 4 },
  { name: 'MongoDB', color: '#22C55E', level: 3 },
  { name: 'GraphQL', color: '#EC4899', level: 3 },
  { name: 'Next.js', color: '#FFFFFF', level: 5 },
];

const bars = [
  {
    title: 'React & Next.js',
    icon: Code2,
    value: 95,
    color: 'from-sky-400 to-emerald-400',
  },
  {
    title: 'Node.js & APIs',
    icon: Cloud,
    value: 90,
    color: 'from-emerald-400 to-lime-400',
  },
  {
    title: 'Python & ML',
    icon: Cpu,
    value: 85,
    color: 'from-cyan-400 to-sky-400',
  },
  {
    title: 'Databases & DevOps',
    icon: Database,
    value: 88,
    color: 'from-emerald-300 to-amber-300',
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
            Recipe
          </span>
          <span className="text-slate-200">
            Production-ready full-stack app
          </span>
        </div>
      </div>

      {/* Grid + bars directly on the plank texture (no big transparent slab) */}
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
              3×3 CRAFTING GRID
            </h3>
            <span className="text-[11px] font-mono text-slate-200/90">
              each slot = core tool
            </span>
          </div>

          <div className="grid grid-cols-3 gap-2.5 sm:gap-3">
            {craftingSkills.map((skill, index) => (
              <div
                key={skill.name}
                style={{ transitionDelay: `${80 + index * 40}ms` }}
                className={`
                  group relative aspect-square rounded-2xl overflow-hidden
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
                <div className="relative z-10 flex flex-col items-center justify-center h-full px-2 text-center">
                  {/* colored “item” square */}
                  <div
                    className="w-7 h-7 sm:w-8 sm:h-8 rounded-[6px] border border-black/80 shadow-[0_0_0_1px_rgba(0,0,0,0.9)] mb-1.5"
                    style={{ backgroundColor: skill.color }}
                  />

                  <span className="text-[11px] sm:text-xs font-mono font-semibold text-slate-50">
                    {skill.name}
                  </span>

                  <div className="mt-1 flex gap-[3px]">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span
                        key={i}
                        className="h-[7px] w-[7px] rounded-[2px] border border-black/80 bg-black/60"
                        style={
                          i < skill.level
                            ? { backgroundColor: skill.color }
                            : undefined
                        }
                      />
                    ))}
                  </div>

                  <span className="mt-1 text-[10px] sm:text-[11px] font-mono text-slate-200">
                    Lv.{skill.level} / 5
                  </span>
                </div>
              </div>
            ))}
          </div>

          <p className="text-[11px] sm:text-xs font-mono text-slate-200/85 mt-1">
            Pick any row: UI, backend, or infra — each crafts a solid piece of
            the stack.
          </p>
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
              SPECIALIZATIONS
            </h3>
            <span className="text-[11px] font-mono text-slate-300">
              overall proficiency
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
                    backgroundImage: "url('/mc/skills_wood.png')", // your wood asset
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
                  <div className="pointer-events-none absolute inset-0 bg-black/40" />
                  <div className="relative z-10">
                    <div className="flex items-center justify-between gap-3 mb-2">
                      <div className="flex items-center gap-2">
                        <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-black/70 border border-white/10">
                          <Icon className="h-4 w-4 text-emerald-300" />
                        </span>
                        <h4 className="text-xs sm:text-sm font-semibold text-slate-50">
                          {bar.title}
                        </h4>
                      </div>
                      <span className="text-[11px] font-mono text-slate-200">
                        {bar.value}%
                      </span>
                    </div>

                    <div className="h-2.5 rounded-full bg-black/70 border border-black/80 overflow-hidden">
                      <div
                        className={`
                          h-full rounded-full bg-gradient-to-r ${bar.color}
                          shadow-[0_0_10px_rgba(34,197,94,0.6)]
                          transition-all duration-700
                        `}
                        style={{ width: mounted ? `${bar.value}%` : '0%' }}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <p className="text-[11px] sm:text-xs font-mono text-emerald-300/90">
            combine all 3 rows → full-stack build unlocked ✨
          </p>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
