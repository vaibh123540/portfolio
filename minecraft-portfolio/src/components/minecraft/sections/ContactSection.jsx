import React from 'react';
import { Mail, Code, Briefcase, Book } from 'lucide-react';

const ContactSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Info card */}
      <div className="bg-gradient-to-br from-[#111827]/95 to-[#020617]/95 border border-[#3F3F46] rounded-2xl p-6 sm:p-7 shadow-xl">
        <h3 className="text-2xl font-bold text-white mb-3 flex items-center gap-2">
          <Mail size={24} className="text-[#22C55E]" />
          Let&apos;s Team Up
        </h3>
        <p className="text-gray-300 text-sm sm:text-base mb-4">
          Whether it&apos;s building something from scratch, improving an existing system, or
          just chatting about tech &amp; Minecraft, I&apos;d love to connect.
        </p>

        <div className="space-y-2 text-sm sm:text-base">
          <div className="flex items-center gap-2">
            <Mail size={18} className="text-[#22D3EE]" />
            <span className="text-gray-200">youremail@example.com</span>
          </div>
          <div className="flex items-center gap-2">
            <Code size={18} className="text-[#22D3EE]" />
            <span className="text-gray-200">github.com/your-handle</span>
          </div>
          <div className="flex items-center gap-2">
            <Briefcase size={18} className="text-[#22D3EE]" />
            <span className="text-gray-200">linkedin.com/in/your-handle</span>
          </div>
        </div>

        <p className="mt-4 text-xs sm:text-sm text-gray-400 flex items-center gap-1">
          <Book size={14} className="text-[#FACC15]" />
          <span>Bonus: mention your favourite Minecraft block in the subject line.</span>
        </p>
      </div>

      {/* Form (mock) */}
      <div className="bg-gradient-to-br from-[#020617]/95 to-[#0B1120]/95 border border-[#1F2937] rounded-2xl p-6 sm:p-7 shadow-xl">
        <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 flex items-center gap-2">
          <Book size={22} className="text-[#FACC15]" />
          Quick Message
        </h3>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="space-y-3 sm:space-y-4 text-sm sm:text-base"
        >
          <div className="space-y-1">
            <label className="text-gray-200">Name</label>
            <input
              className="w-full bg-black/70 border border-[#374151] rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-[#22C55E] focus:border-[#22C55E]"
              placeholder="Steve / Alex / You"
            />
          </div>
          <div className="space-y-1">
            <label className="text-gray-200">Email</label>
            <input
              className="w-full bg-black/70 border border-[#374151] rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-[#22C55E] focus:border-[#22C55E]"
              placeholder="you@example.com"
            />
          </div>
          <div className="space-y-1">
            <label className="text-gray-200">Message</label>
            <textarea
              rows={4}
              className="w-full bg-black/70 border border-[#374151] rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-[#22C55E] focus:border-[#22C55E] resize-none"
              placeholder="What quest are we taking on?"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-[#22C55E] to-[#16A34A] text-black font-bold py-2.5 rounded-lg shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-transform"
          >
            Send Message (Mock)
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactSection;
