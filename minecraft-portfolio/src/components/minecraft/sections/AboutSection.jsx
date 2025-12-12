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
      {/* Text + avatar */}
      <div className="rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row gap-6 items-center">
        <div className="flex-1 space-y-3">
          <h3 
            className="text-2xl sm:text-3xl font-bold mb-1 text-[#F9FAFB] drop-shadow-[0_0_8px_rgba(0,0,0,0.8)] flex items-center gap-2"
            style={{ fontFamily: '"Press Start 2P", cursive' }}
          >
            <User size={26} className="text-[#22C55E]" />
            <span>Hello, World!</span>
          </h3>
          
          <div className="space-y-4 font-pixel-text text-[#E5E7EB] drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
            <p>
              I&apos;m a{' '}
              <span className="text-[#FACC15] font-semibold border-b-2 border-[#FACC15]/40">Full Stack Developer</span>{' '}
              who builds software the way you build in Minecraft — one block at a time, with
              precision, creativity, and a bit of grinding.
            </p>
            <p>
              I love crafting clean interfaces, scalable backends, and delightful user
              experiences. When I&apos;m not coding, I&apos;m probably exploring new tech,
              contributing to open source, or mining for diamonds in survival mode.
            </p>
          </div>
        </div>
        
        <div className="flex justify-center md:justify-end">
          <PlayerAvatar size="lg" />
        </div>
      </div>

      {/* 3D Block Stat Cards with Grass Texture */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
        {STATS.map((stat, index) => (
          <div
            key={stat.label}
            style={{ 
              transitionDelay: `${150 + index * 100}ms`,
              backgroundImage: 'url(/mc/grass_block_top.png)', // Using the requested texture
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              imageRendering: 'pixelated'
            }}
            className={`
              relative overflow-hidden
              rounded-lg 
              /* 3D Block Effect Borders */
              border-t-4 border-l-4 border-t-[#86EFAC]/50 border-l-[#86EFAC]/50
              border-b-4 border-r-4 border-b-[#000]/30 border-r-[#000]/30
              
              p-4 flex flex-col items-center justify-center
              shadow-[4px_4px_0px_rgba(0,0,0,0.5)]
              transform transition-all duration-300
              hover:translate-y-1 hover:shadow-none hover:border-b-0 hover:border-r-0
              active:translate-y-2
              cursor-pointer
              ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}
            `}
          >
            {/* Dark overlay to ensure text pops against the texture */}
            <div className="absolute inset-0 bg-black/10 pointer-events-none" />

            {/* Content with high contrast drop shadow */}
            <div className="relative z-10 flex flex-col items-center">
              <div 
                className="text-3xl sm:text-4xl font-extrabold text-white drop-shadow-[2px_2px_0_rgba(0,0,0,0.8)] mb-1"
                style={{ fontFamily: '"Press Start 2P", cursive' }}
              >
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-[#dcfce7] font-bold uppercase tracking-wider font-mono drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
                {stat.label}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutSection;