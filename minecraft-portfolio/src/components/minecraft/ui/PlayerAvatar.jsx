import React, { useRef, useState, useEffect } from 'react';

const clamp = (v, min, max) => Math.min(max, Math.max(min, v));

const PlayerAvatar = ({ size = 'lg' }) => {
  const containerRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const rect = containerRef.current?.getBoundingClientRect();
      if (!rect) return;

      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      // Cursor offset from avatar center
      const dx = e.clientX - centerX;
      const dy = e.clientY - centerY;

      // Normalise to roughly -1..1 range based on avatar size
      const nx = clamp(dx / (rect.width / 2), -1, 1);
      const ny = clamp(dy / (rect.height / 2), -1, 1);

      const maxTilt = 15; // degrees
      setTilt({
        x: -ny * maxTilt, // up/down
        y: nx * maxTilt,  // left/right
      });
    };

    const handleMouseLeaveWindow = () => {
      // Smoothly reset when cursor leaves window
      setTilt({ x: 0, y: 0 });
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeaveWindow);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeaveWindow);
    };
  }, []);

  const sizeClasses =
    size === 'xl'
      ? 'w-40 h-40 sm:w-48 sm:h-48'
      : size === 'lg'
      ? 'w-32 h-32 sm:w-40 sm:h-40'
      : 'w-24 h-24 sm:w-28 sm:h-28';

  return (
    <div
      ref={containerRef}
      className={`${sizeClasses} relative rounded-2xl border-[4px] border-[#22C55E] bg-black overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.8)]`}
      style={{
        transform: `perspective(700px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        transformStyle: 'preserve-3d',
        transition: 'transform 120ms ease-out',
      }}
    >
      <img
        src="/mc/avatar.png" // same texture you were using
        alt="Player avatar"
        className="w-full h-full object-cover image-pixelated"
        style={{ transform: 'translateZ(20px)' }}
      />
      <div className="pointer-events-none absolute inset-0 border border-white/5 rounded-2xl" />
    </div>
  );
};

export default PlayerAvatar;
