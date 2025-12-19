// src/components/MinecraftPortfolio.jsx
import React, { useState, useEffect, useRef } from 'react';
import AboutSection from './minecraft/sections/AboutSection.jsx';
import SkillsSection from './minecraft/sections/SkillsSection.jsx';
import ProjectsSection from './minecraft/sections/ProjectsSection.jsx';
import ExperienceSection from './minecraft/sections/ExperienceSection.jsx';
import AchievementsSection from './minecraft/sections/AchievementsSection.jsx';
import ContactSection from './minecraft/sections/ContactSection.jsx';
import AchievementToast from './minecraft/ui/AchievementToast.jsx';

// --- LOADING SCREEN COMPONENT (Unchanged) ---
const LoadingOverlay = ({ visible }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!visible) return;
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        const jump = Math.floor(Math.random() * 15) + 2; 
        return Math.min(prev + jump, 100);
      });
    }, 150);
    return () => clearInterval(interval);
  }, [visible]);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-[#1a0f0a] flex flex-col items-center justify-center pointer-events-none">
      <div 
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: 'url(/mc/dirt_bg.png)',
          backgroundColor: '#2a1911',
          backgroundSize: '128px 128px',
          imageRendering: 'pixelated'
        }}
      />
      <div className="relative z-10 flex flex-col items-center gap-4 w-full max-w-md px-6">
        <h2 className="text-xl sm:text-2xl text-[#fcfc00] drop-shadow-[0_2px_0_rgba(0,0,0,0.7)]" 
            style={{ fontFamily: '"Press Start 2P", monospace' }}>
          Building Terrain
        </h2>
        <div className="w-full h-5 bg-[#3a3a3a] border-[2px] border-[#fff] outline outline-[2px] outline-[#000]">
          <div 
            className="h-full bg-[#17d817] shadow-[inset_0_2px_0_rgba(255,255,255,0.4)] transition-all duration-200 ease-linear"
            style={{ width: `${progress}%` }} 
          />
        </div>
      </div>
    </div>
  );
};

// --- PANEL COMPONENT ---
const PixelPanel = ({ children, texture = 'stone' }) => {
  const textureMap = {
    stone: '/mc/stone_bricks.png',
    crafting: '/mc/crafting_table.png',
    chest: '/mc/chest.png',
    deepslate: '/mc/deepslate_tiles.png',
    amethyst: '/mc/amethyst_block.png',
    planks: '/mc/spruce_planks.png',
    crying: '/mc/obsidian.png',
  };

  const textureSrc = textureMap[texture] ?? textureMap.stone;

  return (
    <div className="relative rounded-3xl border border-black/60 bg-black/40 overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.8)]">
      <div
        className="absolute inset-0 opacity-100"
        style={{
          backgroundImage: `url(${textureSrc})`,
          backgroundSize: '128px 128px',
          backgroundRepeat: 'repeat',
          imageRendering: 'pixelated',
        }}
      />
      {/* VIGNETTE UPDATE: Reduced opacity from 0.85 to 0.4 for better visibility */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_40%,rgba(0,0,0,0.4)_100%)]" />
      
      {/* Subtle tint overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/20" />
      
      <div className="relative z-10 p-4 sm:p-6 md:p-8">{children}</div>
    </div>
  );
};

// --- MINECRAFT BUTTON (Unchanged) ---
const MinecraftButton = ({ label, onClick, active, iconSrc, tooltipTitle, tooltipDesc, rarity = 'Common' }) => {
  const rarityColors = {
    Common: '#b0b0b0',
    Uncommon: '#55FF55',
    Rare: '#55FFFF',
    Epic: '#FF55FF',
    Legendary: '#FFAA00'
  };
  const color = rarityColors[rarity];

  return (
    <button
      onClick={onClick}
      className={`group relative transition-all duration-200 ${
        active ? 'scale-110 -translate-y-1' : 'hover:scale-105 hover:-translate-y-0.5'
      }`}
    >
      <div className="relative w-14 h-14 sm:w-16 sm:h-16">
        <img src="/mc/hotbar_slot.png" alt="Slot" className="absolute inset-0 w-full h-full image-pixelated" />
        <img src={iconSrc} alt={label} className="absolute inset-0 w-8 h-8 sm:w-9 sm:h-9 m-auto image-pixelated" />
        <div 
          className={`absolute inset-0 rounded-[2px] border-2 transition-opacity duration-200 pointer-events-none ${active ? 'opacity-100' : 'opacity-0 group-hover:opacity-60'}`}
          style={{ borderColor: color, boxShadow: active ? `0 0 10px ${color}66` : 'none' }}
        />
      </div>
      <div className="pointer-events-none absolute left-1/2 -translate-x-1/2 bottom-[125%] mb-2 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200 ease-out z-50 whitespace-nowrap">
        <div className="relative px-3 py-2 bg-[#100010]/90 backdrop-blur-md rounded border border-white/10 shadow-xl"
             style={{ border: `1px solid ${color}44`, boxShadow: `0 4px 12px rgba(0,0,0,0.5), inset 0 0 20px ${color}11` }}>
          <div className="text-[13px] sm:text-sm font-bold font-mono leading-none mb-1" style={{ color: color, textShadow: '0 2px 4px rgba(0,0,0,0.8)' }}>
            {tooltipTitle || label}
          </div>
          <div className="text-[10px] sm:text-[11px] font-mono text-[#aaaaaa] leading-tight">
             <span style={{ color: color }} className="opacity-80 uppercase tracking-wider text-[9px] mr-1.5">{rarity}</span>
             {tooltipDesc}
          </div>
          <div className="absolute left-1/2 -bottom-[5px] -translate-x-1/2 w-2.5 h-2.5 rotate-45 bg-[#100010]/90 border-r border-b border-white/10" style={{ borderColor: `${color}44` }} />
        </div>
      </div>
    </button>
  );
};

const sectionComponents = {
  about: AboutSection,
  skills: SkillsSection,
  projects: ProjectsSection,
  experience: ExperienceSection,
  achievements: AchievementsSection,
  contact: ContactSection,
};

// UPDATED ORDER: About -> Experience (Axe) -> Projects -> Skills (Shovel)
const sectionList = [
  { 
    id: 'about', 
    label: 'About', 
    iconSrc: '/mc/diamond_sword.png', 
    tooltipTitle: 'Player Profile', 
    tooltipDesc: 'Base stats & bio', 
    rarity: 'Common' 
  },
  { 
    id: 'experience', // Swapped from position 4 
    label: 'Experience', 
    iconSrc: '/mc/diamond_axe.png', // Kept Icon (Axe)
    tooltipTitle: 'Adventure Log', 
    tooltipDesc: 'Previous quests', 
    rarity: 'Uncommon' 
  },
  { 
    id: 'projects', 
    label: 'Projects', 
    iconSrc: '/mc/diamond_pickaxe.png', 
    tooltipTitle: 'Build History', 
    tooltipDesc: 'Shipped code', 
    rarity: 'Epic' 
  },
  { 
    id: 'skills', // Swapped from position 2
    label: 'Skills', 
    iconSrc: '/mc/diamond_shovel.png', // Kept Icon (Shovel)
    tooltipTitle: 'Skill Tree', 
    tooltipDesc: 'Unlocked abilities', 
    rarity: 'Rare' 
  },
  { 
    id: 'achievements', 
    label: 'Achievements', 
    iconSrc: '/mc/emerald.png', 
    tooltipTitle: 'Advancements', 
    tooltipDesc: 'Trophies collected', 
    rarity: 'Legendary' 
  },
  { 
    id: 'contact', 
    label: 'Contact', 
    iconSrc: '/mc/book_and_quill.png', 
    tooltipTitle: 'Direct Message', 
    tooltipDesc: 'Trade offer', 
    rarity: 'Common' 
  },
];

const MinecraftPortfolio = () => {
  const [activeSection, setActiveSection] = useState('about');
  const [xp, setXp] = useState(750);
  const [achievement, setAchievement] = useState(null);
  const [visitedSections, setVisitedSections] = useState({ about: true });
  const [allSectionsUnlocked, setAllSectionsUnlocked] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const clickAudioRef = useRef(null);

  useEffect(() => {
    try {
      const audio = new Audio('/sounds/ui_click.mp3');
      audio.volume = 0.6;
      clickAudioRef.current = audio;
    } catch { }
    return () => {
      if (clickAudioRef.current) {
        clickAudioRef.current.pause();
        clickAudioRef.current.currentTime = 0;
      }
    };
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => { setIsLoading(false); }, 2500);
    return () => clearTimeout(timer);
  }, []);

  const hearts = 10;
  const armor = 10;
  const hunger = 10;
  const level = 19;
  const xpPercent = (xp / 1000) * 100;

  const handleSectionChange = (id) => {
    if (id === activeSection) return;
    if (clickAudioRef.current) {
      try {
        const a = clickAudioRef.current;
        a.currentTime = 0;
        a.play().catch(() => {});
      } catch { }
    }
    setVisitedSections((prev) => {
      if (prev[id]) return prev;
      const next = { ...prev, [id]: true };
      if (sectionList.every((s) => next[s.id]) && !allSectionsUnlocked) {
        setAllSectionsUnlocked(true);
        setAchievement({ title: 'Challenge Complete!', message: 'You explored every section of the portfolio.' });
      }
      return next;
    });
    setActiveSection(id);
    setXp((prev) => Math.min(prev + 50, 1000));
  };

  const ActiveSectionComponent = sectionComponents[activeSection];
  const panelTexture = activeSection === 'skills' ? 'planks' : activeSection === 'projects' ? 'chest' : activeSection === 'experience' ? 'deepslate' : activeSection === 'achievements' ? 'amethyst' : activeSection === 'contact' ? 'crying' : 'stone';

  return (
    <div className="min-h-screen w-full text-white relative overflow-hidden bg-[#020617]"
         style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      
      {/* 1. ANIMATED BACKGROUND VIDEO - Reverted to Simple Loop */}
      <div className="absolute inset-0 z-0">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/mc/bg_animated.mp4" type="video/mp4" />
        </video>
      </div>

      <LoadingOverlay visible={isLoading} />
      <AchievementToast achievement={achievement} onClose={() => setAchievement(null)} />

      {/* Header */}
      <header className="relative z-10 px-4 sm:px-6 pt-4 sm:pt-6 max-w-6xl mx-auto">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg border-4 border-black/80 overflow-hidden shadow-lg bg-black">
              <img src="/mc/avatar.png" alt="Minecraft avatar" className="w-full h-full object-cover image-pixelated" />
            </div>
            <div>
              {/* White Text + Drop Shadow for readability */}
              <p className="text-[11px] sm:text-xs text-white font-mono uppercase tracking-[0.18em] drop-shadow-[0_2px_2px_rgba(0,0,0,1)]">
                Vaibhav Jain
              </p>
              <h1 className="text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight text-white drop-shadow-[0_3px_3px_rgba(0,0,0,0.9)]">
                My Portfolio
              </h1>
            </div>
          </div>
          <div className="hidden sm:flex flex-col items-end gap-1 text-xs font-mono">
             <span className="text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)]">Biome: Main Branch</span>
             <span className="text-gray-200 drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)]">Mode: Survival (Prod)</span>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 pb-40 pt-6 sm:pt-8">
        <PixelPanel texture={panelTexture}>
          <ActiveSectionComponent />
        </PixelPanel>
      </main>

      {/* HUD + Hotbar */}
      <div className="fixed inset-x-0 bottom-0 z-30 flex flex-col items-center gap-2 pb-3 sm:pb-4 pointer-events-none">
        <div className="pointer-events-auto w-full flex justify-center">
          <div className="w-full max-w-xl px-4">
            <div className="flex items-end justify-between mb-1">
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-[3px]">
                  {Array.from({ length: 10 }).map((_, i) => (
                    <img key={`armor-${i}`} src={i < armor ? '/mc/armor_full.png' : '/mc/armor_empty.png'} alt="Armor" className="w-4 h-4 sm:w-5 sm:h-5 image-pixelated" />
                  ))}
                </div>
                <div className="flex items-center gap-[3px]">
                  {Array.from({ length: 10 }).map((_, i) => (
                    <img key={`heart-${i}`} src={i < hearts ? '/mc/heart_full.png' : '/mc/heart_empty.png'} alt="Heart" className="w-4 h-4 sm:w-5 sm:h-5 image-pixelated" />
                  ))}
                </div>
              </div>
              <div className="flex items-center justify-center pb-[2px]">
                <span className="text-[#A3E635] font-bold text-sm sm:text-base font-mono drop-shadow">{level}</span>
              </div>
              <div className="flex flex-col gap-1">
                <div className="flex items-center justify-end gap-[3px]">
                  {Array.from({ length: 10 }).map((_, i) => (
                    <img key={`hunger-${i}`} src={i < hunger ? '/mc/hunger_full.png' : '/mc/hunger_empty.png'} alt="Hunger" className="w-4 h-4 sm:w-5 sm:h-5 image-pixelated" />
                  ))}
                </div>
              </div>
            </div>
            <div className="h-[10px] bg-black/80 border border-[#15803D] rounded-sm overflow-hidden">
              <div className="h-full bg-gradient-to-r from-[#22C55E] to-[#16A34A] shadow-[0_0_12px_rgba(34,197,94,0.8)]" style={{ width: `${xpPercent}%` }} />
            </div>
          </div>
        </div>
        <nav className="pointer-events-auto w-full flex justify-center">
          <div className="inline-flex rounded-xl px-3 sm:px-4 py-1.5 sm:py-2 gap-3 sm:gap-4 backdrop-blur-xl">
            {sectionList.map((section) => (
              <MinecraftButton
                key={section.id}
                label={section.label}
                onClick={() => handleSectionChange(section.id)}
                active={activeSection === section.id}
                iconSrc={section.iconSrc}
                tooltipTitle={section.tooltipTitle}
                tooltipDesc={section.tooltipDesc}
                rarity={section.rarity}
              />
            ))}
          </div>
        </nav>
      </div>
    </div>
  );
};

export default MinecraftPortfolio;