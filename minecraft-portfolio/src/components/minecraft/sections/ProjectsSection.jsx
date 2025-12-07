import React, { useState, useEffect, useRef } from 'react';

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

const rarityAccent = {
  Legendary: '#FACC15',
  Epic: '#A855F7',
  Rare: '#38BDF8',
};

const jungleWoodStyle = {
  backgroundImage: "url('/mc/oak_wood.png')",
  backgroundSize: '96px 96px',
  backgroundRepeat: 'repeat',
  imageRendering: 'pixelated',
};

const strippedWoodStyle = {
  backgroundImage: "url('/mc/stripped_wood.png')",
  backgroundSize: '96px 96px',
  backgroundRepeat: 'repeat',
  imageRendering: 'pixelated',
};

const ProjectsSection = () => {
  const [selectedId, setSelectedId] = useState(PROJECTS[0].id);
  const [mounted, setMounted] = useState(false);
  const clickAudioRef = useRef(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  // init UI click sound on client, match MinecraftPortfolio volume
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const audio = new Audio('/sounds/ui_click.mp3');
    audio.volume = 0.45; // same volume as in MinecraftPortfolio.jsx
    clickAudioRef.current = audio;
  }, []);

  const handleSelectProject = (id) => {
    if (id === selectedId) return;

    setSelectedId(id);

    const audio = clickAudioRef.current;
    if (audio) {
      audio.currentTime = 0;
      audio.play().catch(() => {
        // ignore autoplay / gesture errors
      });
    }
  };

  const selected = PROJECTS.find((p) => p.id === selectedId) ?? PROJECTS[0];
  const rarityColor = rarityAccent[selected.rarity] ?? '#FACC15';

  return (
    <div
      className={`
        relative rounded-3xl border-[4px] border-black
        -m-4 sm:-m-6 md:-m-8
        transform transition-all duration-700
        ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}
      `}
    >
      <div className="grid grid-cols-1 md:grid-cols-[minmax(0,1.25fr)_minmax(0,1.5fr)] gap-4 md:gap-6 p-4 sm:p-5">
        {/* LEFT: Project chest grid */}
        <div>
          <div className="flex items-center justify-between mb-3 sm:mb-4">
            <h3
              className="text-[13px] sm:text-sm md:text-base font-bold text-slate-50 tracking-[0.18em] whitespace-nowrap drop-shadow-[0_3px_8px_rgba(0,0,0,0.9)]"
              style={{
                fontFamily:
                  '"Press Start 2P", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
              }}
            >
              PROJECT CHEST
            </h3>
            <span className="text-[11px] sm:text-xs font-mono text-slate-200 drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)]">
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
                  onClick={() => handleSelectProject(project.id)}
                  className={`flex flex-col items-center gap-1 focus:outline-none transition-transform duration-150 ${
                    active ? 'scale-105' : 'hover:-translate-y-0.5'
                  }`}
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
                      <div
                        className="absolute inset-0 rounded-sm shadow-[0_0_10px_rgba(34,197,94,0.9)] pointer-events-none"
                        style={{
                          border: `2px solid ${
                            rarityAccent[project.rarity] ?? '#22C55E'
                          }`,
                        }}
                      />
                    )}
                  </div>
                  <p className="text-[11px] sm:text-xs text-slate-100 font-mono truncate max-w-[6rem] drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]">
                    {project.short}
                  </p>
                </button>
              );
            })}
          </div>
        </div>

        {/* RIGHT: Project info inside oak-wood panel */}
        <div
          className="rounded-2xl border border-black/85 shadow-[0_14px_28px_rgba(0,0,0,0.9)] p-4 sm:p-5 flex flex-col gap-3"
          style={jungleWoodStyle}
        >
          <div className="flex items-start justify-between gap-3">
            <div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-50 mb-1 drop-shadow-[0_4px_10px_rgba(0,0,0,0.9)]">
                {selected.name}
              </h3>
              <p className="text-xs sm:text-sm text-slate-100 font-mono drop-shadow-[0_2px_6px_rgba(0,0,0,0.85)]">
                Rarity:{' '}
                <span className="font-semibold" style={{ color: rarityColor }}>
                  {selected.rarity}
                </span>
              </p>
            </div>

            <div className="relative w-12 h-12 sm:w-14 sm:h-14 shrink-0">
              <img
                src="/mc/hotbar_slot.png"
                alt="Slot"
                className="absolute inset-0 w-full h-full image-pixelated"
              />
              <img
                src={selected.iconSrc}
                alt={selected.name}
                className="absolute inset-0 w-7 h-7 sm:w-8 sm:h-8 m-auto image-pixelated"
              />
              <div
                className="absolute inset-0 rounded-sm pointer-events-none"
                style={{ boxShadow: `0 0 12px ${rarityColor}AA` }}
              />
            </div>
          </div>

          <p className="text-sm sm:text-base text-slate-50 leading-relaxed drop-shadow-[0_3px_8px_rgba(0,0,0,0.9)]">
            {selected.desc}
          </p>

          <div>
            <h4 className="text-xs uppercase tracking-wide text-slate-100 font-mono mb-1 drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)]">
              Tech stack
            </h4>
            <div className="flex flex-wrap gap-2">
              {selected.tech.map((t) => (
                <span
                  key={t}
                  className="px-2.5 py-1 rounded-md border border-black/80 text-xs text-slate-50 font-mono shadow-[0_4px_8px_rgba(0,0,0,0.85)]"
                  style={strippedWoodStyle}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          <p className="mt-1 text-xs sm:text-sm text-slate-50 leading-relaxed drop-shadow-[0_3px_8px_rgba(0,0,0,0.9)]">
            {selected.details}
          </p>

          <p className="mt-1 text-[11px] sm:text-xs font-mono text-emerald-200 drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]">
            Tip: Treat each project like a unique drop — code, infra, and UX all level up here.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;
