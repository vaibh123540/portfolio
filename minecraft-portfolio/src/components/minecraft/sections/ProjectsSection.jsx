import React, { useState } from 'react';

const PROJECTS = [
  {
    id: 'p1',
    name: 'E-Commerce Platform',
    short: 'E-Commerce',
    iconSrc: '/mc/p1.png',
    rarity: 'Legendary',
    desc: 'Full-stack marketplace with live inventory and pixel-perfect checkout.',
    tech: ['Next.js', 'Stripe', 'PostgreSQL', 'Redis'],
    details:
      'Handles 100k+ daily users with 99.9% uptime and resilient architecture.',
  },
  {
    id: 'p2',
    name: 'AI Analytics Dashboard',
    short: 'Analytics',
    iconSrc: '/mc/p2.png',
    rarity: 'Epic',
    desc: 'ML-powered analytics with blocky, Minecraft-style visualizations.',
    tech: ['React', 'Python', 'TensorFlow', 'AWS'],
    details:
      'Streams over 1M datapoints per hour to surface real-time, actionable business insights.',
  },
  {
    id: 'p3',
    name: 'Real-time Chat Platform',
    short: 'Chat',
    iconSrc: '/mc/p3.png',
    rarity: 'Legendary',
    desc: 'WebSocket-based chat with channels, reactions, and presence.',
    tech: ['Socket.io', 'Node.js', 'MongoDB', 'Docker'],
    details:
      'Supports more than 50k concurrent connections with autoscaling and fault tolerance.',
  },
];

const ProjectsSection = () => {
  const [selectedId, setSelectedId] = useState(PROJECTS[0].id);
  const selected = PROJECTS.find((p) => p.id === selectedId) ?? PROJECTS[0];

  return (
    <div className="grid grid-cols-1 md:grid-cols-[minmax(0,1.25fr)_minmax(0,1.5fr)] gap-6">
      {/* Chest / inventory grid */}
      <div className="bg-gradient-to-br from-[#020617]/95 to-[#030712]/95 border border-[#374151] rounded-2xl p-4 sm:p-5 shadow-xl">
        <div className="flex items-center justify-between mb-3 sm:mb-4">
          <h3
            className="text-lg sm:text-xl font-bold text-gray-100"
            style={{ fontFamily: 'monospace' }}
          >
            PROJECT CHEST
          </h3>
          <span className="text-[11px] sm:text-xs font-mono text-gray-400">
            Click a slot to inspect
          </span>
        </div>

        <div className="grid grid-cols-3 gap-3 sm:gap-4">
          {PROJECTS.map((project) => {
            const active = project.id === selectedId;
            return (
              <button
                key={project.id}
                type="button"
                onClick={() => setSelectedId(project.id)}
                className={`flex flex-col items-center gap-1 focus:outline-none ${
                  active ? '' : 'hover:-translate-y-0.5'
                } transition-transform duration-150`}
              >
                <div className="relative w-14 h-14 sm:w-16 sm:h-16">
                  <img
                    src="/mc/hotbar_slot.png"
                    alt="Slot"
                    className="absolute inset-0 w-full h-full image-pixelated"
                  />
                  <img
                    src={project.iconSrc}
                    alt={project.name}
                    className="absolute inset-0 w-8 h-8 sm:w-9 sm:h-9 m-auto image-pixelated"
                  />
                  {active && (
                    <div className="absolute inset-0 border-2 border-[#22C55E] rounded-sm shadow-[0_0_10px_rgba(34,197,94,0.8)] pointer-events-none" />
                  )}
                </div>
                <p className="text-[11px] sm:text-xs text-gray-200 font-mono truncate max-w-[6rem]">
                  {project.short}
                </p>
              </button>
            );
          })}
        </div>
      </div>

      {/* Detail panel */}
      <div className="bg-gradient-to-br from-[#020617]/95 to-[#0B1120]/95 border border-[#1F2937] rounded-2xl p-5 sm:p-6 shadow-xl flex flex-col gap-3">
        <div className="flex items-center justify-between gap-3">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">
              {selected.name}
            </h3>
            <p className="text-xs sm:text-sm text-gray-400 font-mono">
              Rarity:{' '}
              <span className="text-[#FACC15] font-semibold">
                {selected.rarity}
              </span>
            </p>
          </div>

          {/* Just the project icon here – no inventory slot */}
          <div className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center bg-black/40 rounded-lg border border-[#4B5563] shadow-lg">
            <img
              src={selected.iconSrc}
              alt={selected.name}
              className="w-7 h-7 sm:w-8 sm:h-8 image-pixelated"
            />
          </div>
        </div>

        <p className="text-sm sm:text-base text-gray-200">{selected.desc}</p>

        <div className="mt-1">
          <h4 className="text-xs uppercase tracking-wide text-gray-400 font-mono mb-1">
            Tech stack
          </h4>
          <div className="flex flex-wrap gap-2">
            {selected.tech.map((t) => (
              <span
                key={t}
                className="px-2.5 py-1 rounded-md bg-white/5 border border-white/20 text-xs text-gray-100"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-2 text-xs sm:text-sm text-gray-300 leading-relaxed">
          {selected.details}
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;
