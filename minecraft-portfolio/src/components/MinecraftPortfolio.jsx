import React, { useState } from 'react';
import AboutSection from './minecraft/sections/AboutSection.jsx';
import SkillsSection from './minecraft/sections/SkillsSection.jsx';
import ProjectsSection from './minecraft/sections/ProjectsSection.jsx';
import ExperienceSection from './minecraft/sections/ExperienceSection.jsx';
import AchievementsSection from './minecraft/sections/AchievementsSection.jsx';
import ContactSection from './minecraft/sections/ContactSection.jsx';
import AchievementToast from './minecraft/ui/AchievementToast.jsx';

const PixelPanel = ({ children, texture = 'stone' }) => {
  const textureMap = {
    stone: '/mc/stone_bricks.png',
    crafting: '/mc/crafting_table.png',
    chest: '/mc/chest.png',
    deepslate: '/mc/deepslate_tiles.png',
    amethyst: '/mc/amethyst_block.png',
    planks: '/mc/spruce_planks.png',
  };

  const textureSrc = textureMap[texture] ?? textureMap.stone;

  return (
    <div className="relative rounded-3xl border border-black/60 bg-black/40 overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.8)]">
      {/* Block texture */}
      <div
        className="absolute inset-0 opacity-75"
        style={{
          backgroundImage: `url(${textureSrc})`,
          backgroundSize: '128px 128px',
          backgroundRepeat: 'repeat',
          imageRendering: 'pixelated',
        }}
      />

      {/* MUCH lighter overlay just for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/15 to-black/40" />

      <div className="relative z-10 p-4 sm:p-6 md:p-8">
        {children}
      </div>
    </div>
  );
};


const MinecraftButton = ({
  label,
  onClick,
  active,
  iconSrc,
  tooltipTitle,
  tooltipDesc,
}) => (
  <button
    onClick={onClick}
    className={`group relative transition-transform duration-150 ${
      active ? 'scale-110' : 'hover:scale-105'
    }`}
  >
    {/* Slot + icon */}
    <div className="relative w-14 h-14 sm:w-16 sm:h-16">
      <img
        src="/mc/hotbar_slot.png"
        alt="Hotbar slot"
        className="absolute inset-0 w-full h-full image-pixelated"
      />
      <img
        src={iconSrc}
        alt={label}
        className="absolute inset-0 w-8 h-8 sm:w-9 sm:h-9 m-auto image-pixelated"
      />

      {active && (
        <div className="absolute -bottom-2 left-0 right-0 h-[3px] bg-[#22C55E] rounded-full shadow-md shadow-[#22C55E]/70" />
      )}
    </div>

    {/* Minecraft-style item tooltip */}
    <div
      className="
        pointer-events-none
        absolute left-1/2 -translate-x-1/2 
        -top-14 sm:-top-16
        opacity-0 translate-y-1
        group-hover:opacity-100 group-hover:translate-y-0
        transition-all duration-150
        whitespace-nowrap
      "
    >
      <div className="bg-[#0b0220]/95 border border-[#4C1D95] shadow-xl px-3 py-2 rounded-md min-w-[180px] text-left">
        <div className="text-[13px] sm:text-sm text-gray-100 font-mono">
          {tooltipTitle || label}
        </div>
        <div className="mt-1 text-[11px] sm:text-xs font-mono">
          <span className="text-[#60A5FA]">+ {tooltipDesc}</span>
        </div>
      </div>
    </div>
  </button>
);

const sectionComponents = {
  about: AboutSection,
  skills: SkillsSection,
  projects: ProjectsSection,
  experience: ExperienceSection,
  achievements: AchievementsSection,
  contact: ContactSection,
};

const sectionList = [
  {
    id: 'about',
    label: 'About',
    iconSrc: '/mc/diamond_sword.png',
    tooltipTitle: 'Player Profile',
    tooltipDesc: 'View base stats & bio',
  },
  {
    id: 'skills',
    label: 'Skills',
    iconSrc: '/mc/diamond_axe.png',
    tooltipTitle: 'Skill Tree',
    tooltipDesc: 'Inspect unlocked abilities',
  },
  {
    id: 'projects',
    label: 'Projects',
    iconSrc: '/mc/diamond_pickaxe.png',
    tooltipTitle: 'Project Inventory',
    tooltipDesc: 'Browse build history',
  },
  {
    id: 'experience',
    label: 'Experience',
    iconSrc: '/mc/diamond_shovel.png',
    tooltipTitle: 'Adventure Log',
    tooltipDesc: 'See past quests & roles',
  },
  {
    id: 'achievements',
    label: 'Achievements',
    iconSrc: '/mc/emerald.png',
    tooltipTitle: 'Advancements',
    tooltipDesc: 'Check unlocked perks',
  },
  {
    id: 'contact',
    label: 'Contact',
    iconSrc: '/mc/book_and_quill.png',
    tooltipTitle: 'Send Message',
    tooltipDesc: 'Open villager trade window',
  },
];

const MinecraftPortfolio = () => {
  const [activeSection, setActiveSection] = useState('about');
  const [xp, setXp] = useState(750);
  const [achievement, setAchievement] = useState(null);
  const [visitedSections, setVisitedSections] = useState({ about: true });

  // HUD values (test values)
  const hearts = 10;
  const armor = 10;
  const hunger = 10;
  const level = 37;
  const xpPercent = (xp / 1000) * 100;

  const handleSectionChange = (id) => {
    if (id === activeSection) return;

    const meta = sectionList.find((s) => s.id === id);

    // first-time visit => show advancement toast
    setVisitedSections((prev) => {
      if (prev[id]) return prev;
      const next = { ...prev, [id]: true };
      setAchievement({
        title: 'Advancement made!',
        message: `Visited ${meta?.label || id} section for the first time.`,
      });
      return next;
    });

    setActiveSection(id);
    setXp((prev) => Math.min(prev + 50, 1000));
  };

  const ActiveSectionComponent = sectionComponents[activeSection];

  // choose panel texture based on current section
  const panelTexture =
    activeSection === 'skills'
      ? 'crafting'
      : activeSection === 'projects'
      ? 'chest'
      : activeSection === 'experience'
      ? 'deepslate'
      : activeSection === 'achievements'
      ? 'amethyst'
      : activeSection === 'contact'
      ? 'planks'
      : 'stone';

  return (
    <div
      className="min-h-screen w-full text-white relative overflow-hidden"
      style={{
        backgroundImage: 'url(/mc/bg_overworld.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundColor: '#020617',
        fontFamily:
          'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
      }}
    >
      {/* Advancement toast (top-right) */}
      <AchievementToast
        achievement={achievement}
        onClose={() => setAchievement(null)}
      />

      {/* Header */}
      <header className="relative z-10 px-4 sm:px-6 pt-4 sm:pt-6 max-w-6xl mx-auto">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg border-4 border-black/80 overflow-hidden shadow-lg bg-black">
              <img
                src="/mc/avatar.png"
                alt="Minecraft avatar"
                className="w-full h-full object-cover image-pixelated"
              />
            </div>
            <div>
              <p className="text-[11px] sm:text-xs text-gray-300 font-mono uppercase tracking-[0.18em]">
                Full Stack Developer
              </p>
              <h1 className="text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight drop-shadow-xl">
                Minecraft-Themed Portfolio
              </h1>
            </div>
          </div>
          <div className="hidden sm:flex flex-col items-end gap-1 text-xs font-mono">
            <span className="text-gray-300">Biome: VS Code Plains</span>
            <span className="text-gray-400">Mode: Survival (Prod)</span>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 pb-40 pt-6 sm:pt-8">
        <PixelPanel texture={panelTexture}>
          <ActiveSectionComponent />
        </PixelPanel>
      </main>

      {/* HUD (hearts/armor + hunger aligned to XP bar, hotbar below) */}
      <div className="fixed inset-x-0 bottom-0 z-30 flex flex-col items-center gap-2 pb-3 sm:pb-4 pointer-events-none">
        {/* Stats + XP bar share same width */}
        <div className="pointer-events-auto w-full flex justify-center">
          <div className="w-full max-w-xl px-4">
            {/* Top row: armor+hearts (left), level (center), hunger (right) */}
            <div className="flex items-end justify-between mb-1">
              {/* Left: armor + hearts */}
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-[3px]">
                  {Array.from({ length: 10 }).map((_, i) => (
                    <img
                      key={`armor-${i}`}
                      src={
                        i < armor
                          ? '/mc/armor_full.png'
                          : '/mc/armor_empty.png'
                      }
                      alt="Armor"
                      className="w-4 h-4 sm:w-5 sm:h-5 image-pixelated"
                    />
                  ))}
                </div>
                <div className="flex items-center gap-[3px]">
                  {Array.from({ length: 10 }).map((_, i) => (
                    <img
                      key={`heart-${i}`}
                      src={
                        i < hearts
                          ? '/mc/heart_full.png'
                          : '/mc/heart_empty.png'
                      }
                      alt="Heart"
                      className="w-4 h-4 sm:w-5 sm:h-5 image-pixelated"
                    />
                  ))}
                </div>
              </div>

              {/* Center: level number */}
              <div className="flex items-center justify-center pb-[2px]">
                <span className="text-[#A3E635] font-bold text-sm sm:text-base font-mono drop-shadow">
                  {level}
                </span>
              </div>

              {/* Right: hunger */}
              <div className="flex flex-col gap-1">
                <div className="flex items-center justify-end gap-[3px]">
                  {Array.from({ length: 10 }).map((_, i) => (
                    <img
                      key={`hunger-${i}`}
                      src={
                        i < hunger
                          ? '/mc/hunger_full.png'
                          : '/mc/hunger_empty.png'
                      }
                      alt="Hunger"
                      className="w-4 h-4 sm:w-5 sm:h-5 image-pixelated"
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* XP bar – same width as row above */}
            <div className="h-[10px] bg-black/80 border border-[#15803D] rounded-sm overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-[#22C55E] to-[#16A34A] shadow-[0_0_12px_rgba(34,197,94,0.8)]"
                style={{ width: `${xpPercent}%` }}
              />
            </div>
          </div>
        </div>

        {/* Hotbar (centered under XP bar) */}
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
              />
            ))}
          </div>
        </nav>
      </div>
    </div>
  );
};

export default MinecraftPortfolio;
