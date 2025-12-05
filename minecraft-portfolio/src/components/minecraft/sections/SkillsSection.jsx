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
    color: 'from-amber-400 to-orange-400',
  },
];

const SkillsSection = () => {
  return (
    <section className="space-y-6 md:space-y-8">
      {/* Crafting table grid */}
      <div className="relative rounded-[32px] overflow-hidden border border-black/70 shadow-[0_20px_40px_rgba(0,0,0,0.85)]">
        {/* Crafting table texture */}
        <div
          className="
            absolute inset-0
            bg-[url('/mc/block_crafting_table.png')]
            bg-[length:160px_160px]
            bg-repeat
            brightness-[1.25] saturate-125
          "
        />
        {/* Soft dark overlay just to keep text readable */}
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 p-5 sm:p-7 md:p-8 space-y-4 md:space-y-6">
          <div className="flex items-center justify-between gap-4">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold tracking-[0.15em] uppercase text-slate-50 drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]">
              Crafting&nbsp;&nbsp;Table
            </h2>
            <span className="inline-flex items-center rounded-full bg-emerald-600 px-4 py-1.5 text-xs sm:text-sm font-mono tracking-[0.18em] uppercase text-emerald-50 shadow-[0_10px_25px_rgba(16,185,129,0.75)] border border-emerald-300/60">
              Full–stack recipe
            </span>
          </div>

          <div className="rounded-[24px] border border-white/5 bg-black/40 p-4 md:p-5">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
              {craftingSkills.map((skill) => (
                <div
                  key={skill.name}
                  className="relative rounded-2xl border border-white/10 bg-black/45 px-4 py-3 flex flex-col gap-2 shadow-[0_10px_22px_rgba(0,0,0,0.8)]"
                >
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2">
                      <span
                        className="inline-block h-3 w-3 rounded-sm shadow-[0_0_0_2px_rgba(0,0,0,0.8)]"
                        style={{ backgroundColor: skill.color }}
                      />
                      <span className="text-sm font-semibold text-slate-50 font-mono">
                        {skill.name}
                      </span>
                    </div>
                  </div>
                  <div className="flex gap-[3px]">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span
                        key={i}
                        className="h-3 w-3 rounded-[3px] bg-black/40 border border-black/70 shadow-[0_0_0_1px_rgba(0,0,0,0.9)]"
                        style={
                          i < skill.level
                            ? {
                                backgroundColor: skill.color,
                                boxShadow:
                                  '0 0 10px rgba(56,189,248,0.6), 0 0 0 1px rgba(0,0,0,0.9)',
                              }
                            : undefined
                        }
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4 text-[11px] sm:text-xs font-mono text-slate-200/80 flex items-center justify-between">
              <span>3×3 grid • Minecraft color palette</span>
              <span className="text-emerald-300">
                result: full–stack dev (enchanted ✨)
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Skill progress bars on slightly darker overlay, no giant slab */}
      <div className="grid gap-4 md:grid-cols-2">
        {bars.map((bar) => (
          <div
            key={bar.title}
            className="relative rounded-2xl overflow-hidden border border-black/70 bg-black/55 shadow-[0_16px_32px_rgba(0,0,0,0.9)]"
          >
            <div className="relative z-10 p-4 sm:p-5 space-y-3">
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-black/50 border border-white/10">
                    <bar.icon className="h-4 w-4 text-sky-300" />
                  </span>
                  <h3 className="text-sm sm:text-base font-semibold text-slate-50">
                    {bar.title}
                  </h3>
                </div>
                <span className="text-xs font-mono text-slate-200">
                  {bar.value}%
                </span>
              </div>

              <div className="h-3 rounded-full bg-black/60 border border-black/80 overflow-hidden">
                <div
                  className={`h-full rounded-full bg-gradient-to-r ${bar.color} shadow-[0_0_12px_rgba(56,189,248,0.7)]`}
                  style={{ width: `${bar.value}%` }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
