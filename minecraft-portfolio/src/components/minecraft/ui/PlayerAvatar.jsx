import React, { useRef, useState, useEffect } from 'react';

const clamp = (v, min, max) => Math.min(max, Math.max(min, v));

const PlayerAvatar = ({ size = 'lg' }) => {
  const containerRef = useRef(null);
  const audioRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHurt, setIsHurt] = useState(false);

  // Initialize audio
  useEffect(() => {
    // Make sure you have this file in public/sounds/
    audioRef.current = new Audio('/sounds/classic_hurt.mp3');
    audioRef.current.volume = 0.6;
  }, []);

  const handleHurt = () => {
    if (isHurt) return;

    // Play Sound
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch(() => {});
    }

    // Trigger Animation
    setIsHurt(true);
    setTimeout(() => setIsHurt(false), 250); // Classic damage tick duration
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!containerRef.current) return;

      // Get the specific position of the avatar element
      const rect = containerRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      // Calculate distance from the avatar's center
      const dx = e.clientX - centerX;
      const dy = e.clientY - centerY;

      // Range of motion (degrees)
      const maxTilt = 25;

      // Calculate normalized values based on the viewport size to keep movement smooth
      // but relative to the element's center
      const nx = clamp(dx / 300, -1, 1);
      const ny = clamp(dy / 300, -1, 1);

      setTilt({
        x: -ny * maxTilt, // Look up/down
        y: nx * maxTilt,  // Look left/right
      });
    };

    const handleMouseLeaveWindow = () => {
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
      onClick={handleHurt}
      className={`${sizeClasses} relative rounded-2xl border-[4px] border-[#22C55E] bg-black overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.8)] cursor-pointer select-none group`}
      style={{
        transform: `perspective(700px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        transformStyle: 'preserve-3d',
        transition: isHurt ? 'none' : 'transform 100ms ease-out',
      }}
    >
      {/* Red Tint Overlay for Hurt Effect */}
      <div
        className={`absolute inset-0 z-20 bg-red-600 pointer-events-none mix-blend-overlay transition-opacity duration-100 ${
          isHurt ? 'opacity-70' : 'opacity-0'
        }`}
      />
      
      {/* Shake animation container */}
      <div className={isHurt ? 'animate-shake' : ''}>
        <img
          src="/mc/avatar.png"
          alt="Player avatar"
          className="w-full h-full object-cover image-pixelated"
          style={{ 
            transform: 'translateZ(20px)',
            filter: isHurt ? 'sepia(100%) saturate(300%) hue-rotate(-50deg)' : 'none',
            transition: 'filter 0.1s'
          }}
        />
      </div>

      <div className="pointer-events-none absolute inset-0 border border-white/5 rounded-2xl z-30" />
      
      {/* Tooltip hint */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-40">
        <span className="bg-black/80 text-white text-[10px] px-2 py-1 rounded font-mono border border-white/20 translate-y-12 shadow-lg backdrop-blur-sm">
          Click me!
        </span>
      </div>
    </div>
  );
};

export default PlayerAvatar;