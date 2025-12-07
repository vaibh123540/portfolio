import React from 'react';
import { User, Target, Award, Briefcase } from 'lucide-react';
import PlayerAvatar from '../ui/PlayerAvatar.jsx';

const STATS = [
  { label: 'Projects Shipped', value: '50+', icon: Target },
  { label: 'Years of XP', value: '5+', icon: Award },
  { label: 'Cups of Coffee', value: '∞', icon: Briefcase },
];

const AboutSection = () => {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div
      className={`
        space-y-6 md:space-y-8
        transform transition-all duration-700
        ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}
      `}
    >
      {/* Text + avatar directly on stone */}
      <div className="rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row gap-6">
        <div className="flex-1 space-y-3">
          <h3 className="text-2xl sm:text-3xl font-bold mb-1 text-[#F9FAFB] drop-shadow-[0_0_8px_rgba(0,0,0,0.8)] flex items-center gap-2">
            <User size={26} className="text-[#22C55E]" />
            <span>👋 Hello, World!</span>
          </h3>
          <p className="text-base sm:text-lg text-[#E5E7EB] leading-relaxed drop-shadow-[0_0_6px_rgba(0,0,0,0.8)]">
            I&apos;m a{' '}
            <span className="text-[#FACC15] font-semibold">Full Stack Developer</span>{' '}
            who builds software the way you build in Minecraft — one block at a time, with
            precision, creativity, and a bit of grinding.
          </p>
          <p className="text-sm sm:text-base text-[#E5E7EB] leading-relaxed drop-shadow-[0_0_6px_rgba(0,0,0,0.8)]">
            I love crafting clean interfaces, scalable backends, and delightful user
            experiences. When I&apos;m not coding, I&apos;m probably exploring new tech,
            contributing to open source, or mining for diamonds in survival mode.
          </p>
        </div>
        <div className="flex justify-center md:justify-end">
          <PlayerAvatar size="lg" />
        </div>
      </div>

      {/* Grass-block stat cards, toned down */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {STATS.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div
              key={stat.label}
              style={{
                transitionDelay: `${150 + index * 100}ms`,
                backgroundImage: 'url(/mc/grass_block_top.png)', // make sure this exists
                backgroundSize: '64px 64px',
                backgroundRepeat: 'repeat',
                imageRendering: 'pixelated',
              }}
              className={`
                relative overflow-hidden
                rounded-xl border border-black/60
                px-4 py-5
                shadow-[0_18px_30px_rgba(0,0,0,0.85)]
                transform transition-all duration-500
                hover:-translate-y-1.5 hover:scale-[1.04]
                hover:shadow-[0_0_18px_rgba(22,163,74,0.5)]
                cursor-pointer
                ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}
              `}
            >
              {/* subtle, almost-uniform dark overlay for readability */}
              <div className="absolute inset-0 bg-black/35" />

              <div className="relative z-10 flex flex-col items-center">
                {/* icon badge – no glow, just clean */}
                <div className="mb-3 rounded-md px-2 py-1 bg-black/55 border border-white/10">
                  <Icon
                    className="text-[#F9FAFB] drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]"
                    size={22}
                  />
                </div>

                <div className="text-3xl sm:text-4xl font-extrabold text-[#F9FAFB] text-center drop-shadow-[0_0_8px_rgba(0,0,0,0.9)] mb-1 tracking-tight">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-[#E5E7EB] text-center font-semibold">
                  {stat.label}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AboutSection;
