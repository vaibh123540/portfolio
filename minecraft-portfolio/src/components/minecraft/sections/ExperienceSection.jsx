// src/components/minecraft/sections/ExperienceSection.jsx
import React from 'react';
import { Briefcase, Cpu } from 'lucide-react';

const ROLES = [
  {
    role: 'Teaching Assistant (Computer Arch)',
    company: 'University of Alberta - CMPUT 229',
    period: 'Jan 2026 – Apr 2026',
    status: 'in-progress', // Marks this as active
    type: 'icon',
    Icon: Cpu,
    tasks: [
      'Facilitating labs on processor design, pipelined datapaths, and hazard detection.',
      'Mentoring students on RISC-V assembly, stack management, and calling conventions.',
      'Debugging complex low-level code involving virtual memory and interrupts.',
    ],
  },
  {
    role: 'Teaching Assistant (C Programming)',
    company: 'University of Alberta - CMPUT 201',
    period: 'Sept 2025 – Dec 2025',
    status: 'completed',
    type: 'image',
    iconSrc: '/mc/c.png',
    tasks: [
      'Guided 70+ students per lab in C programming, debugging, and Unix memory management.',
      'Built automated grading scripts in C, reducing assignment marking time by 25%.',
      'Delivered detailed feedback on 100+ assignments to improve code quality.',
    ],
  },
];

const blackstoneStyle = {
  backgroundImage: "url('/mc/blackstone.png')",
  backgroundSize: '96px 96px',
  backgroundRepeat: 'repeat',
  imageRendering: 'pixelated',
};

const ExperienceSection = () => {
  const [mounted, setMounted] = React.useState(false);

  // Calculate completed quests dynamically
  const completedCount = ROLES.filter(r => r.status === 'completed').length;

  // Shared “blue scheme” accents (match your completed card styling)
  const ACCENTS = {
    icon: 'text-sky-200',
    company: 'text-amber-200',
    period: 'text-sky-300',
    bullet: 'bg-sky-400 shadow-[0_0_6px_rgba(56,189,248,0.8)]',
  };

  React.useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section
      className={`
        space-y-4 md:space-y-5
        transform transition-all duration-700
        ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}
      `}
    >
      {/* Header */}
      <div className="flex items-end justify-between gap-3">
        <div>
          <p
            className="text-[10px] sm:text-xs uppercase tracking-[0.22em] text-sky-300/80"
            style={{
              textShadow: '0 0 4px rgba(0,0,0,0.7)',
              fontFamily:
                '"Press Start 2P", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
            }}
          >
            ADVENTURE LOG
          </p>
          <h2 className="mt-1 flex items-center gap-2 text-2xl sm:text-3xl font-extrabold text-slate-50 drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-black/60 border border-sky-400/70 shadow-[0_0_18px_rgba(56,189,248,0.5)]">
              <Briefcase className="h-4 w-4 text-sky-200" />
            </span>
            <span
              style={{
                fontFamily:
                  '"Press Start 2P", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                letterSpacing: '0.06em',
              }}
            >
              EXPERIENCE
            </span>
          </h2>
        </div>
        <span className="hidden sm:inline-flex items-center rounded-full bg-black/70 border border-slate-700 px-3 py-1.5 text-[11px] font-mono text-slate-100 shadow-[0_10px_25px_rgba(0,0,0,0.85)]">
          Completed quests: {completedCount}
        </span>
      </div>

      {/* Quest cards on blackstone */}
      <div className="space-y-3.5 md:space-y-4">
        {ROLES.map((exp, index) => {
          const isImage = exp.type === 'image';
          const Icon = exp.Icon || Briefcase;
          const isInProgress = exp.status === 'in-progress';

          return (
            <div
              key={exp.role}
              style={{
                ...blackstoneStyle,
                transitionDelay: `${90 + index * 80}ms`,
              }}
              className={`
                relative overflow-hidden
                rounded-2xl border border-black/80
                shadow-[0_16px_30px_rgba(0,0,0,0.9)]
                px-4 py-4 sm:px-5 sm:py-5
                transform transition-all duration-500
                hover:-translate-y-1 hover:shadow-[0_22px_36px_rgba(0,0,0,0.95)]
                ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}
              `}
            >
              {/* subtle overlay for readability */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/35 via-black/25 to-black/35" />

              <div className="relative z-10">
                <div className="flex justify-between items-start mb-3 gap-4">
                  <div className="flex items-start gap-3">
                    {/* Hotbar-style quest icon */}
                    <div className="relative w-10 h-10 sm:w-11 sm:h-11 shrink-0">
                      <img
                        src="/mc/hotbar_slot.png"
                        alt="Quest slot"
                        className="absolute inset-0 w-full h-full image-pixelated"
                      />
                      <div className="absolute inset-0 flex items-center justify-center p-2">
                        {isImage ? (
                          <img
                            src={exp.iconSrc}
                            alt="Tool"
                            className="w-full h-full object-contain image-pixelated drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]"
                          />
                        ) : (
                          <Icon
                            className={`h-5 w-5 drop-shadow-[0_0_8px_rgba(56,189,248,0.9)] ${ACCENTS.icon}`}
                          />
                        )}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-bold text-lg sm:text-xl text-slate-50 flex flex-wrap items-center gap-1.5 drop-shadow-[0_3px_8px_rgba(0,0,0,0.9)]">
                        {exp.role}
                      </h4>
                      <p
                        className={`text-[13px] sm:text-sm font-semibold drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)] ${ACCENTS.company}`}
                      >
                        {exp.company}
                      </p>
                      <p className="text-[11px] sm:text-xs font-mono text-slate-100 mt-0.5 drop-shadow-[0_2px_5px_rgba(0,0,0,0.85)]">
                        Duration:{' '}
                        <span className={ACCENTS.period}>{exp.period}</span>
                      </p>
                    </div>
                  </div>

                  {/* Status Badge - ONLY this stays green for in-progress */}
                  <span
                    className={`
                      shrink-0 px-2 sm:px-3 py-1 rounded-md text-[10px] sm:text-[11px] font-mono font-bold text-black shadow-lg
                      ${isInProgress
                        ? 'bg-emerald-400 border border-emerald-700/70 shadow-[0_0_12px_rgba(52,211,153,0.6)]'
                        : 'bg-sky-400 border border-sky-900/70 shadow-[0_6px_14px_rgba(56,189,248,0.9)]'
                      }
                    `}
                  >
                    {isInProgress ? 'IN PROGRESS...' : 'COMPLETE'}
                  </span>
                </div>

                <ul className="space-y-1.5 text-slate-50 text-sm sm:text-[15px] leading-relaxed">
                  {exp.tasks.map((task) => (
                    <li key={task} className="flex items-start gap-2">
                      <span
                        className={`
                          mt-[5px] w-1.5 h-1.5 rotate-45 shrink-0 shadow-lg
                          ${ACCENTS.bullet}
                        `}
                      />
                      <span className="drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
                        {task}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ExperienceSection;
