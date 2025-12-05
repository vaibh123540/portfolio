import React from 'react';
import { User, Target, Award, Briefcase } from 'lucide-react';
import PlayerAvatar from '../ui/PlayerAvatar.jsx';


const STATS = [
  { label: 'Projects Shipped', value: '50+', icon: Target },
  { label: 'Years of XP', value: '5+', icon: Award },
  { label: 'Cups of Coffee', value: '∞', icon: Briefcase },
];

const AboutSection = () => {
  return (
    <div className="space-y-6 md:space-y-8">
      <div className="bg-gradient-to-br from-[#111827]/95 to-[#020617]/95 border border-[#3F3F46] rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row gap-6 shadow-xl">
        <div className="flex-1 space-y-3">
          <h3 className="text-2xl sm:text-3xl font-bold mb-1 text-white drop-shadow flex items-center gap-2">
            <User size={26} className="text-[#22C55E]" />
            <span>👋 Hello, World!</span>
          </h3>
          <p className="text-base sm:text-lg text-gray-200 leading-relaxed">
            I&apos;m a{' '}
            <span className="text-[#FACC15] font-semibold">Full Stack Developer</span>{' '}
            who builds software the way you build in Minecraft — one block at a time, with
            precision, creativity, and a bit of grinding.
          </p>
          <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
            I love crafting clean interfaces, scalable backends, and delightful user
            experiences. When I&apos;m not coding, I&apos;m probably exploring new tech, contributing
            to open source, or mining for diamonds in survival mode.
          </p>
        </div>
        <div className="flex justify-center md:justify-end">
          <PlayerAvatar size="lg" />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {STATS.map((stat) => {
          const Icon = stat.icon;
          return (
            <div
              key={stat.label}
              className="bg-gradient-to-br from-[#15803D] to-[#16A34A] p-5 rounded-xl border border-black/50 shadow-[0_18px_30px_rgba(0,0,0,0.7)] transform hover:scale-[1.03] hover:-translate-y-1 transition-all duration-200 cursor-pointer"
            >
              <Icon className="mx-auto mb-2 text-white drop-shadow" size={28} />
              <div className="text-3xl sm:text-4xl font-extrabold text-white text-center drop-shadow mb-1">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-white/90 text-center font-semibold">
                {stat.label}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AboutSection;
