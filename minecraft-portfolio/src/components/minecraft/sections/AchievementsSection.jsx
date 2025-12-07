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

const bookshelfStyle = {
  backgroundImage: "url('/mc/bookshelf.png')",
  backgroundSize: '96px 96px',
  backgroundRepeat: 'repeat',
  imageRendering: 'pixelated',
};

const baseTextShadow = { textShadow: '0 0 4px rgba(0,0,0,0.7)' };
const enchantedGlow = {
  color: '#7af0ff',
  textShadow: '0 0 6px #7af0ff',
};

const AchievementsSection = () => {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section
      className={`
        relative space-y-4 md:space-y-6
        transform transition-all duration-700
        ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}
      `}
    >
      {/* optional floating glyph ambience; safe, no blur */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-40">
        <span className="mc-glyph mc-glyph-1">ᚠ</span>
        <span className="mc-glyph mc-glyph-2">ᛃ</span>
        <span className="mc-glyph mc-glyph-3">ᚨ</span>
      </div>

      <div className="relative flex flex-col md:flex-row gap-4 md:gap-6 items-stretch">
        {/* LEFT: Enchanting table info */}
        <div
          style={bookshelfStyle}
          className="
            relative overflow-hidden
            rounded-2xl
            border border-purple-400/70
            shadow-[0_18px_34px_rgba(0,0,0,0.95)]
            md:w-[36%] flex-shrink-0
          "
        >
          {/* single dark overlay – NO blur */}
          <div className="absolute inset-0 bg-[rgba(0,0,0,0.55)]" />

          <div className="relative z-10 p-4 sm:p-5 flex flex-col gap-3">
            <div>
              <p
                className="text-[10px] sm:text-xs uppercase tracking-[0.22em] text-purple-100/90"
                style={{
                  ...baseTextShadow,
                  fontFamily: '"Press Start 2P", system-ui, -apple-system, sans-serif',
                }}
              >
                ENCHANTING TABLE
              </p>
              <h3
                className="mt-2 text-lg sm:text-xl font-extrabold text-slate-50"
                style={baseTextShadow}
              >
                Achievements
              </h3>
            </div>

            <p
              className="text-xs sm:text-sm text-purple-100/90 leading-relaxed"
              style={baseTextShadow}
            >
              These enchantments capture how I level up codebases, teams, and
              production systems — pick one to see the effect.
            </p>

            <div className="mt-2 flex items-center gap-4">
              {/* enchanted book in hotbar slot */}
              <div className="relative w-16 h-16 sm:w-20 sm:h-20 shrink-0">
                <img
                  src="/mc/hotbar_slot.png"
                  alt="Slot"
                  className="absolute inset-0 w-full h-full image-pixelated"
                />
                <img
                  src="/mc/enchanted_book.png"
                  alt="Enchanted book"
                  className="absolute inset-0 w-9 h-9 sm:w-11 sm:h-11 m-auto image-pixelated"
                />
                <div className="pointer-events-none absolute inset-0 rounded-sm shadow-[0_0_16px_rgba(196,181,253,0.95)]" />
              </div>

              <div className="space-y-1 text-xs sm:text-sm text-purple-100/90">
                <div style={baseTextShadow}>
                  Item:{' '}
                  <span className="font-semibold text-slate-50">
                    Portfolio Book
                  </span>
                </div>
                <div style={baseTextShadow}>
                  Lapis cost:{' '}
                  <span className="font-semibold text-sky-300">3–5</span>
                </div>
                <div style={baseTextShadow}>
                  Result:{' '}
                  <span className="font-semibold" style={enchantedGlow}>
                    Upgraded teammate ✨
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT: enchantment cards in 2-col grid */}
        <div className="flex-1">
          <div className="grid gap-3 sm:gap-4 md:grid-cols-2">
            {ENCHANTS.map((e, index) => (
              <div
                key={e.id}
                style={bookshelfStyle}
                className={`
                  relative overflow-hidden
                  rounded-2xl
                  border border-[rgba(255,255,255,0.12)]
                  shadow-[0_12px_24px_rgba(0,0,0,0.4)]
                  transform transition-all duration-200
                  ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}
                  hover:scale-[1.01]
                  hover:shadow-[0_0_12px_3px_#8e6dfd]
                `}
              >
                {/* single dark overlay – NO blur */}
                <div className="absolute inset-0 bg-[rgba(0,0,0,0.55)]" />

                <div className="relative z-10 px-4 py-3 sm:px-5 sm:py-4">
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <div
                      className="text-[10px] sm:text-[11px] text-indigo-200 font-mono tracking-[0.3em] uppercase"
                      style={baseTextShadow}
                    >
                      {e.glyph}
                    </div>
                    <span
                      className="text-[11px] sm:text-xs font-mono"
                      style={enchantedGlow}
                    >
                      Lvl {e.level}
                    </span>
                  </div>

                  <div
                    className="text-sm sm:text-base text-slate-50 font-semibold mb-0.5"
                    style={{
                      ...baseTextShadow,
                      fontFamily:
                        '"Press Start 2P", system-ui, -apple-system, sans-serif',
                    }}
                  >
                    {e.title}
                  </div>

                  <p
                    className="text-xs sm:text-sm text-purple-100/90 leading-relaxed"
                    style={baseTextShadow}
                  >
                    {e.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
