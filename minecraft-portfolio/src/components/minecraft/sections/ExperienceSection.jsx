import React from 'react';
import { Briefcase } from 'lucide-react';

const ROLES = [
  {
    role: 'Senior Full Stack Developer',
    company: 'Tech Innovations Inc',
    period: '2023 – Present',
    tasks: [
      'Led a team of 5 developers',
      'Architected microservices platform',
      'Improved performance by 30%',
    ],
  },
  {
    role: 'Full Stack Developer',
    company: 'StartUp Labs',
    period: '2021 – 2023',
    tasks: [
      'Built MVP from scratch',
      'Scaled to 100k users',
      'Implemented CI/CD pipelines',
    ],
  },
  {
    role: 'Junior Developer',
    company: 'Code Academy',
    period: '2020 – 2021',
    tasks: ['Frontend development', 'API integrations', 'Code reviews'],
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
          Completed quests: {ROLES.length}
        </span>
      </div>

      {/* Quest cards on blackstone */}
      <div className="space-y-3.5 md:space-y-4">
        {ROLES.map((exp, index) => (
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
                  {/* hotbar-style quest icon */}
                  <div className="relative w-10 h-10 sm:w-11 sm:h-11 shrink-0">
                    <img
                      src="/mc/hotbar_slot.png"
                      alt="Quest slot"
                      className="absolute inset-0 w-full h-full image-pixelated"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Briefcase className="h-4 w-4 sm:h-5 sm:w-5 text-sky-200 drop-shadow-[0_0_8px_rgba(56,189,248,0.9)]" />
                    </div>
                  </div>

                  <div>
                    <h4 className="font-bold text-lg sm:text-xl text-slate-50 flex flex-wrap items-center gap-1.5 drop-shadow-[0_3px_8px_rgba(0,0,0,0.9)]">
                      {exp.role}
                    </h4>
                    <p className="text-[13px] sm:text-sm text-amber-200 font-semibold drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]">
                      {exp.company}
                    </p>
                    <p className="text-[11px] sm:text-xs font-mono text-slate-100 mt-0.5 drop-shadow-[0_2px_5px_rgba(0,0,0,0.85)]">
                      Quest duration:{' '}
                      <span className="text-sky-300">{exp.period}</span>
                    </p>
                  </div>
                </div>

                <span className="px-3 py-1 rounded-md bg-sky-400 text-[11px] sm:text-xs font-mono text-black shadow-[0_6px_14px_rgba(56,189,248,0.9)] border border-sky-900/70">
                  Quest complete ✓
                </span>
              </div>

              <ul className="space-y-1.5 text-slate-50 text-sm sm:text-[15px] leading-relaxed">
                {exp.tasks.map((task) => (
                  <li key={task} className="flex items-start gap-2">
                    <span className="mt-[3px] text-sky-300 drop-shadow-[0_0_6px_rgba(56,189,248,0.9)]">
                      ▸
                    </span>
                    <span className="drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]">
                      {task}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
