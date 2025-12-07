// src/components/minecraft/ui/AchievementToast.jsx
import React, { useEffect, useState } from 'react';

const AUDIO_PATH = '/sounds/advancement.mp3'; // your audio file

const AchievementToast = ({ achievement, onClose }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!achievement) return;

    let audio;
    let fallbackTimeout;

    setVisible(true);

    const finish = () => {
      setVisible(false);
      fallbackTimeout = window.setTimeout(() => {
        onClose?.();
      }, 220);
    };

    try {
      audio = new Audio(AUDIO_PATH);
      audio.volume = 0.85;

      const handleEnded = () => {
        finish();
      };

      audio.addEventListener('ended', handleEnded);

      audio.play().catch(() => {
        fallbackTimeout = window.setTimeout(finish, 2500);
      });

      return () => {
        audio.removeEventListener('ended', handleEnded);
        audio.pause();
        audio.currentTime = 0;
        if (fallbackTimeout) clearTimeout(fallbackTimeout);
      };
    } catch {
      fallbackTimeout = window.setTimeout(finish, 2500);
      return () => {
        if (fallbackTimeout) clearTimeout(fallbackTimeout);
      };
    }
  }, [achievement]);

  if (!achievement) return null;

  return (
    <div className="fixed top-4 right-4 sm:top-6 sm:right-6 z-40">
      <div
        className={`
          flex items-center gap-3
          px-3 py-2 sm:px-4 sm:py-2.5
          bg-[#111111]
          rounded-md shadow-[0_6px_16px_rgba(0,0,0,0.9)]
          transform transition-all duration-200
          ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'}
        `}
      >
        <img
          src="/mc/enchanted_book.png"
          alt="Advancement"
          className="w-6 h-6 sm:w-7 sm:h-7 image-pixelated"
        />
        <div className="leading-tight">
          <div
            className="text-[13px] sm:text-sm font-semibold text-[#D8B4FE]"
            style={{ textShadow: '0 0 3px rgba(0,0,0,0.8)' }}
          >
            {achievement.title}
          </div>
          <div
            className="text-[11px] sm:text-xs text-white"
            style={{ textShadow: '0 0 3px rgba(0,0,0,0.8)' }}
          >
            {achievement.message}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AchievementToast;
