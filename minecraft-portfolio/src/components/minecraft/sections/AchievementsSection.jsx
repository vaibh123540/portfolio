import React from 'react';

const ENCHANTS = [
  {
    id: 'code-warrior',
    glyph: 'ᚠᛚᚨᛗᛟ',
    title: 'Code Warrior',
    desc: '500+ commits this year and counting.',
    level: 'III',
  },
  {
    id: 'bug-slayer',
    glyph: 'ᛒᚢᚷ ᛋᛚᚨᛃ',
    title: 'Bug Slayer',
    desc: 'Crushed 100+ critical bugs across production systems.',
    level: 'II',
  },
  {
    id: 'team-captain',
    glyph: 'ᚲᚨᛈᛏᚨᛁᚾ',
    title: 'Team Captain',
    desc: 'Led over 10 successful feature launches with cross-functional teams.',
    level: 'III',
  },
];

const AchievementsSection = () => {
  return (
    <div className="bg-gradient-to-br from-[#020617]/95 via-[#111827]/95 to-[#020617]/95 border border-[#4C1D95] rounded-2xl p-5 sm:p-6 shadow-xl flex flex-col md:flex-row gap-5">
      {/* Left: enchanting-table info */}
      <div className="md:w-1/3 flex flex-col gap-3">
        <h3
          className="text-lg sm:text-xl font-bold text-violet-100"
          style={{ fontFamily: 'monospace' }}
        >
          ENCHANTING TABLE
        </h3>
        <p className="text-xs sm:text-sm text-violet-100/80">
          Pick an enchantment to see how I level up teams and projects.
        </p>
        <div className="mt-3 flex items-center gap-4">
          {/* Enchanted book only – no slot frame */}
          <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center bg-black/40 rounded-lg border border-[#4B5563] shadow-lg">
            <img
              src="/mc/enchanted_book.png"
              alt="Enchanted book"
              className="w-10 h-10 sm:w-12 sm:h-12 image-pixelated"
            />
          </div>
          <div className="space-y-1 text-xs sm:text-sm text-violet-100/90">
            <div>
              Item: <span className="font-semibold">Portfolio Book</span>
            </div>
            <div>
              Lapis cost: <span className="font-semibold">3–5</span>
            </div>
            <div>
              Result: <span className="font-semibold">Upgraded teammate</span> ✨
            </div>
          </div>
        </div>
      </div>

      {/* Right: enchantment choices */}
      <div className="md:flex-1 space-y-3">
        {ENCHANTS.map((e, index) => (
          <div
            key={e.id}
            className={`bg-gradient-to-r from-[#1D2346]/95 to-[#2E1D47]/95 border rounded-xl px-4 py-3 sm:px-5 sm:py-4 shadow-lg cursor-pointer hover:border-violet-300 hover:-translate-y-0.5 transition-all duration-150 ${
              index === 0 ? 'border-violet-400' : 'border-violet-700/70'
            }`}
          >
            <div className="flex items-center justify-between gap-2 mb-1">
              <div className="text-[11px] text-[#A5B4FC] font-mono tracking-[0.25em] uppercase">
                {e.glyph}
              </div>
              <span className="text-xs text-emerald-200 font-mono">
                Lvl {e.level}
              </span>
            </div>
            <div className="text-sm sm:text-base text-gray-50 font-semibold">
              {e.title}
            </div>
            <p className="text-xs sm:text-sm text-violet-100/90 mt-0.5 leading-relaxed">
              {e.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AchievementsSection;
