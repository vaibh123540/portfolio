// src/components/minecraft/ui/CraftingGrid.jsx
import React from 'react';

const SKILLS = [
  { name: 'React', color: '#4FC3F7', level: 5 },
  { name: 'TypeScript', color: '#3178C6', level: 5 },
  { name: 'Node.js', color: '#3C873A', level: 4 },
  { name: 'Python', color: '#3776AB', level: 4 },
  { name: 'AWS', color: '#FF9900', level: 4 },
  { name: 'Docker', color: '#2496ED', level: 4 },
  { name: 'MongoDB', color: '#47A248', level: 3 },
  { name: 'GraphQL', color: '#E10098', level: 3 },
  { name: 'Next.js', color: '#FFFFFF', level: 5 },
];

const CraftingGrid = () => {
  return (
    <div className="relative">
      {/* Subtle dark grid background, no explicit crafting-table texture */}
      <div
        className="absolute inset-0 rounded-2xl overflow-hidden"
        style={{
          backgroundImage: `
            radial-gradient(circle at 0 0, #1E293B 0, #020617 65%),
            linear-gradient(90deg, rgba(30,64,175,0.22) 1px, transparent 1px),
            linear-gradient(180deg, rgba(30,64,175,0.22) 1px, transparent 1px)
          `,
          backgroundSize: 'auto, 40px 40px, 40px 40px',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-[#020617]/80 via-[#020617]/40 to-[#020617]/95" />

      <div className="relative border border-[#3F3F46] rounded-2xl p-5 sm:p-6 shadow-[0_20px_40px_rgba(0,0,0,0.65)]">
        <div className="flex items-center justify-between mb-4 sm:mb-5">
          <h3
            className="text-xl sm:text-2xl font-bold text-[#E5F3FF]"
            style={{ fontFamily: 'monospace' }}
          >
            CRAFTING&nbsp;&nbsp;TABLE
          </h3>
          <span className="px-3 py-1 rounded-md bg-[#166534] text-xs font-mono uppercase tracking-wide text-emerald-100">
            full-stack recipe
          </span>
        </div>

        <div className="grid grid-cols-3 gap-2 sm:gap-3 bg-black/40 border border-[#3F3F46] rounded-xl p-4">
          {SKILLS.map((skill) => (
            <div
              key={skill.name}
              className="relative bg-[#020617]/90 border border-[#27272A] rounded-lg p-3 flex flex-col gap-2 hover:border-[#22C55E] hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200"
            >
              <div className="flex items-center gap-2">
                <div
                  className="w-4 h-4 rounded-sm shadow-md"
                  style={{
                    backgroundColor: skill.color,
                    boxShadow: `0 0 10px ${skill.color}66`,
                  }}
                />
                <span className="text-[11px] font-mono text-gray-100 truncate">
                  {skill.name}
                </span>
              </div>

              <div className="flex gap-0.5 mt-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <div
                    key={i}
                    className={`w-3 h-3 border border-[#3F3F46] rounded-[3px] ${
                      i < skill.level ? 'bg-[#22C55E]' : 'bg-[#020617]'
                    }`}
                    style={{ imageRendering: 'pixelated' }}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4 sm:mt-5 flex items-center justify-between text-xs text-gray-300">
          <span className="font-mono text-[11px] text-gray-400">
            3×3 grid • Minecraft color palette
          </span>
          <span className="font-mono text-[11px] text-[#22C55E]">
            result: full-stack dev (enchanted ✨)
          </span>
        </div>
      </div>
    </div>
  );
};

export default CraftingGrid;
