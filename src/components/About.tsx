import { Section } from "./layout";

export const About = () => {
  return (
    <Section id="about">
      <div className="grid grid-cols-12 gap-8 items-start">
        <div className="col-span-12 lg:col-span-4">
          <h2 className="label-mono mb-4 text-brand-primary">Background // Bio</h2>
          <p className="text-sm border-l-2 border-brand-primary pl-4 text-slate-400 italic">
            "I leverage my trading experience to build tools that engineers and financial analysts actually need."
          </p>
        </div>
        <div className="col-span-12 lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-tight text-white mb-2">Background</h3>
            <p className="text-sm leading-relaxed text-slate-400 text-sm">
              My journey bridges software engineering and data science, fueled by a passion for creating high-performance tools for the financial markets. I am a recent WeThinkCode_ Software Engineering graduate currently specializing in Data Science with the ALX Data Science Programme (2026).
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-tight text-white mb-2">Experience & Vision</h3>
            <p className="text-sm leading-relaxed text-slate-400 text-sm">
              With a background in trading and software development, I build tools that bridge technical engineering and financial analysis. I've served as a Coding Facilitator at WeThinkCode_, a Virtual Assistant, and a Hackathon organizer and mentor.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
};
