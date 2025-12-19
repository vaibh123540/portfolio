// src/components/minecraft/sections/ProjectsSection.jsx
import React, { useState, useEffect, useRef } from 'react';
import { ExternalLink } from 'lucide-react';

const PROJECTS = [
  {
    id: 'summarify',
    name: 'SummarifyAI',
    short: 'SummarifyAI',
    iconSrc: '/mc/summarify.png', 
    rarity: 'Legendary',
    desc: 'Chrome extension & dashboard that records, transcribes, and summarizes Google Meet sessions in real-time.',
    tech: ['Next.js', 'Supabase', 'Gemini', 'Chrome API', 'Espresso'],
    details: 'Reduced manual note-taking by 70%. Features row-level security, vector search for transcripts, and a live caption streamer.',
    link: 'https://summarifyai.vercel.app'
  },
  {
    id: 'tartan',
    name: 'Tartan Smart Home',
    short: 'Tartan',
    iconSrc: '/mc/docker.png', 
    rarity: 'Epic',
    desc: 'Improved a Java IoT architecture for smart home simulation with testing and mutation coverages, CI/CD and technical debt analysis.',
    tech: ['Java', 'Python', 'Docker', 'PiTest', 'JaCoCo', 'CI/CD'],
    details: 'Pushed the code test coverage to 90%+ and built a resilient CI/CD pipeline for single-click rollbacks.',
    link: 'https://github.com/vaibh123540/Tartan'
  },
  {
    id: 'android',
    name: 'Social Media App',
    short: 'Android App',
    iconSrc: '/mc/android.png', 
    rarity: 'Rare',
    desc: 'Twitter-style Android app featuring real-time feeds, auth, and encrypted messaging.',
    tech: ['Java', 'Firebase', 'Android SDK', 'MVC'],
    details: 'Led a 6-person Agile team to architect a full social media app just from user stories. Achieved 93% code coverage with comprehensive JUnit test suites.',
    link: 'https://github.com/cmput301-w25/project-an-droids'
  },
  {
    id: 'unity',
    name: 'Interactive Portfolio',
    short: 'Game Dev',
    iconSrc: '/mc/unity.png', 
    rarity: 'Epic',
    desc: 'WebGL-based gaming portfolio with custom RPG levels and physics-based mini-games.',
    tech: ['Unity', 'C#', 'WebGL', 'Game Physics'],
    details: 'Showcases scene management, lighting, and particle effects. Consists of a main RPG level and a 2D mini game.',
    link: 'https://play.unity.com/en/games/4cba5f89-90b2-4b27-850d-e8ce5a7f524f/my-game-portfolio'
  },
  {
    id: 'lumina',
    name: 'Lumina Data Platform',
    short: 'Lumina',
    iconSrc: '/mc/lumina.png', 
    rarity: 'Rare',
    desc: 'Full-stack analytics tool for uploading and visualizing CSV datasets up to 100k rows.',
    tech: ['React', 'Flask', 'Python', 'Chart.js'],
    details: 'Includes a robust data validation pipeline and interactive histograms/correlation matrices for instant insights.',
    link: 'https://devpost.com/software/lumina-data-assistant'
  },
  {
    id: 'mod',
    name: 'Auto-Moderation Tool',
    short: 'Moderation',
    iconSrc: '/mc/moderation.png', 
    rarity: 'Uncommon',
    desc: 'Mobile app that uses OpenAI to detect and flag harmful comments across social platforms.',
    tech: ['Flutter', 'Dart', 'OpenAI API', 'Mobile'],
    details: 'Built in 24 hours at HackED 2024. Provides a clean interface for content reviewers to efficiently process flagged posts.',
    link: 'https://devpost.com/software/flutter-social-media-moderation-and-analysis-app'
  },
];

const rarityAccent = {
  Legendary: '#FACC15', // Gold
  Epic: '#A855F7',      // Purple
  Rare: '#38BDF8',      // Blue
  Uncommon: '#22C55E',  // Green
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

  // init UI click sound on client
  useEffect(() => {
    if (typeof window === 'undefined') return;
    try {
        const audio = new Audio('/sounds/ui_click.mp3');
        audio.volume = 0.45;
        clickAudioRef.current = audio;
    } catch(e) {
        console.error("Audio init failed", e);
    }
  }, []);

  const handleSelectProject = (id) => {
    if (id === selectedId) return;

    setSelectedId(id);

    const audio = clickAudioRef.current;
    if (audio) {
      try {
        audio.currentTime = 0;
        audio.play().catch(() => {});
      } catch (e) {
         // ignore
      }
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
              {PROJECTS.length} items
            </span>
          </div>

          <div className="grid grid-cols-3 gap-3 sm:gap-4">
            {PROJECTS.map((project) => {
              const active = project.id === selectedId;
              const color = rarityAccent[project.rarity] ?? '#ffffff';
              
              return (
                <button
                  key={project.id}
                  type="button"
                  onClick={() => handleSelectProject(project.id)}
                  className={`flex flex-col items-center gap-1 focus:outline-none transition-transform duration-150 ${
                    active ? 'scale-105' : 'hover:-translate-y-0.5'
                  }`}
                >
                  <div className="relative w-14 h-14 sm:w-16 sm:h-16 group">
                    {/* Slot Background */}
                    <img
                      src="/mc/hotbar_slot.png"
                      alt="Slot"
                      className="absolute inset-0 w-full h-full image-pixelated opacity-90"
                    />
                    
                    {/* Project Icon */}
                    <div className="absolute inset-0 flex items-center justify-center p-2.5">
                      <img
                        src={project.iconSrc}
                        alt={project.name}
                        className="w-full h-full object-contain image-pixelated drop-shadow-[0_4px_4px_rgba(0,0,0,0.6)]"
                      />
                    </div>

                    {/* Active/Hover Border */}
                    {active && (
                      <div
                        className="absolute inset-0 rounded-sm shadow-[inset_0_0_8px_rgba(0,0,0,0.5)] pointer-events-none"
                        style={{
                          border: `3px solid ${color}`,
                          boxShadow: `0 0 12px ${color}88`,
                        }}
                      />
                    )}
                  </div>
                  <p className={`text-[10px] sm:text-[11px] font-mono truncate max-w-[6rem] drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)] ${active ? 'text-white font-bold' : 'text-slate-300'}`}>
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
            <div className="flex-1">
              {/* UPDATED: Link is visible by default (slate-400 icon) and turns blue on hover */}
              <a 
                href={selected.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group/link inline-flex items-center gap-2 text-lg sm:text-xl md:text-2xl font-bold text-slate-50 mb-1 drop-shadow-[0_4px_10px_rgba(0,0,0,0.9)] hover:text-[#38BDF8] transition-colors decoration-slate-400/0 underline-offset-4 hover:underline decoration-2"
              >
                {selected.name}
                <ExternalLink className="w-5 h-5 text-slate-300 group-hover/link:text-[#38BDF8] transition-colors duration-300" />
              </a>
              
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
              <div className="absolute inset-0 flex items-center justify-center p-2">
                 <img
                  src={selected.iconSrc}
                  alt={selected.name}
                  className="w-full h-full object-contain image-pixelated"
                />
              </div>
              <div
                className="absolute inset-0 rounded-sm pointer-events-none mix-blend-screen"
                style={{ boxShadow: `inset 0 0 12px ${rarityColor}66` }}
              />
            </div>
          </div>

          <p className="text-sm sm:text-base text-slate-50 leading-relaxed drop-shadow-[0_3px_8px_rgba(0,0,0,0.9)] font-medium">
            {selected.desc}
          </p>

          <div>
            <h4 className="text-xs uppercase tracking-wide text-slate-200 font-mono mb-1.5 drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)] opacity-90">
              Enchanted With
            </h4>
            <div className="flex flex-wrap gap-2">
              {selected.tech.map((t) => (
                <span
                  key={t}
                  className="px-2.5 py-1 rounded-md border border-black/60 text-xs text-white font-mono shadow-[0_4px_8px_rgba(0,0,0,0.6)]"
                  style={strippedWoodStyle}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-auto pt-2 border-t border-black/20">
            <p className="text-xs sm:text-sm text-slate-100 leading-relaxed drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)] italic">
              "{selected.details}"
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;