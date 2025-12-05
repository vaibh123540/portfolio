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

const ExperienceSection = () => {
  return (
    <div className="space-y-4">
      {ROLES.map((exp) => (
        <div
          key={exp.role}
          className="bg-gradient-to-r from-[#111827]/95 to-[#020617]/95 border-l-4 border-[#22C55E] rounded-xl p-6 shadow-xl hover:-translate-y-0.5 hover:shadow-2xl transition-all duration-200"
        >
          <div className="flex justify-between items-start mb-3 gap-4">
            <div>
              <h4 className="font-bold text-xl text-white flex items-center gap-2 drop-shadow">
                <Briefcase size={20} className="text-[#22C55E]" />
                {exp.role}
              </h4>
              <p className="text-[#FACC15] font-semibold">{exp.company}</p>
              <p className="text-sm text-gray-400">{exp.period}</p>
            </div>
            <span className="px-3 py-1 rounded-md bg-[#22C55E] text-xs font-mono text-black shadow-md">
              Quest complete
            </span>
          </div>
          <ul className="space-y-1 text-gray-300 text-sm sm:text-base">
            {exp.tasks.map((task) => (
              <li key={task} className="flex items-start gap-2">
                <span className="text-[#22C55E] mt-[3px]">▸</span>
                <span>{task}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default ExperienceSection;
