import React from 'react';

const ProjectCard = ({ project, isFlipped, onToggle }) => {
  return (
    <div
      className="relative h-64 md:h-72 cursor-pointer"
      style={{ perspective: '1000px' }}
      onClick={onToggle}
    >
      <div
        className="relative w-full h-full transition-transform duration-700"
        style={{
          transformStyle: 'preserve-3d',
          transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
        }}
      >
        {/* Front */}
        <div
          className="absolute inset-0 bg-gradient-to-br from-[#2B2B2B]/95 to-[#1E1E1E]/95 rounded-xl p-6 border border-[#4B4B4B] shadow-xl"
          style={{ backfaceVisibility: 'hidden' }}
        >
          <div className="flex justify-between items-start mb-4">
            <h4
              className="font-bold text-xl text-white drop-shadow"
              style={{ fontFamily: 'monospace' }}
            >
              {project.name}
            </h4>
            <span
              className={`px-3 py-1 rounded-md text-xs font-semibold ${
                project.rarity === 'Legendary'
                  ? 'bg-gradient-to-r from-[#F6FA72] to-[#F6C453] text-black'
                  : 'bg-gradient-to-r from-[#B57EDC] to-[#E87AFF] text-black'
              }`}
            >
              {project.rarity}
            </span>
          </div>
          <p className="text-gray-300 text-sm mb-4">{project.desc}</p>
          <p className="text-[11px] text-gray-500 mt-auto">Click to flip</p>
        </div>

        {/* Back */}
        <div
          className="absolute inset-0 bg-gradient-to-br from-[#132B47]/95 to-[#231942]/95 rounded-xl p-6 border border-[#37598C] shadow-xl"
          style={{
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
          }}
        >
          <h4
            className="font-bold text-lg text-white mb-3"
            style={{ fontFamily: 'monospace' }}
          >
            Tech Stack
          </h4>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tech.map((t) => (
              <span
                key={t}
                className="px-3 py-1 bg-white/10 border border-white/25 rounded-md text-xs text-gray-100"
              >
                {t}
              </span>
            ))}
          </div>
          <p className="text-sm text-gray-200">{project.details}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
