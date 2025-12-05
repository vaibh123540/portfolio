import React, { useEffect } from 'react';

const AchievementToast = ({ achievement, onClose }) => {
  // Auto-hide after 3.2s
  useEffect(() => {
    if (!achievement) return;
    const t = setTimeout(onClose, 3200);
    return () => clearTimeout(t);
  }, [achievement, onClose]);

  if (!achievement) return null;

  return (
    <div className="fixed top-4 right-4 sm:top-6 sm:right-6 z-40">
      <div className="flex items-center gap-3 bg-black/85 border border-[#4B5563] rounded-xl px-3 py-2 sm:px-4 sm:py-2.5 shadow-2xl backdrop-blur-md">
        <div className="relative w-8 h-8 sm:w-9 sm:h-9">
          <img
            src="/mc/enchanted_book.png"
            alt="Advancement"
            className="w-full h-full image-pixelated"
          />
        </div>
        <div className="leading-tight">
          <div className="text-[12px] sm:text-[13px] text-yellow-300 font-semibold">
            {achievement.title}
          </div>
          <div className="text-[11px] sm:text-xs text-gray-100">
            {achievement.message}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AchievementToast;
