import { motion } from "motion/react";
import { Section } from "./layout";
import { Briefcase, GraduationCap, Calendar } from "lucide-react";

const experienceItems = [
  {
    title: "Coding Facilitator",
    company: "WeThinkCode_",
    period: "2024 - 2025",
    description: "Mentoring upcoming developers, facilitating coding workshops, and assisting in peer-to-peer learning methodologies."
  },
  {
    title: "Hackathon Organiser & Mentor",
    company: "Various Tech Communities",
    period: "2024 - Present",
    description: "Leading technical organization for hackathons, providing architectural guidance to teams, and judging innovative solutions."
  },
  {
    title: "Virtual Assistant (Tech Focused)",
    company: "Freelance",
    period: "2023 - 2024",
    description: "Assisting in technical documentation, system maintenance, and automation of repetitive administrative tasks."
  }
];

const educationItems = [
  {
    school: "ALX Data Science Programme",
    degree: "Professional Certificate",
    period: "2026",
    description: "Intensive focus on predictive modeling, advanced data engineering, and machine learning applications."
  },
  {
    school: "WeThinkCode_",
    degree: "Software Engineering NQF Level 5/6",
    period: "2024 - 2025",
    description: "Rigorous software development training focusing on industry-standard practices, system design, and collaborative engineering."
  }
];

export const ExperienceEducation = () => {
  return (
    <Section id="experience" className="bg-brand-bg/50">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Experience */}
        <div>
          <div className="mb-10">
            <h2 className="label-mono mb-1 text-slate-500">History // Experience</h2>
            <h3 className="text-2xl font-bold uppercase tracking-tighter">Professional Roles</h3>
          </div>

          <div className="space-y-10 relative before:absolute before:left-[3px] before:top-2 before:bottom-2 before:w-[1px] before:bg-slate-800">
            {experienceItems.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="pl-8 relative"
              >
                <div className="absolute left-0 top-1.5 w-1.5 h-1.5 rounded-full bg-brand-primary" />
                <div className="flex items-center gap-2 text-brand-primary text-[10px] font-mono uppercase mb-1">
                  {item.period}
                </div>
                <h3 className="text-sm font-bold uppercase text-white mb-0.5">{item.title}</h3>
                <div className="text-xs text-slate-500 uppercase font-bold mb-3">{item.company}</div>
                <p className="text-xs text-slate-400 leading-relaxed max-w-md">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div>
          <div className="mb-10">
            <h2 className="label-mono mb-1 text-slate-500">Nodes // Academics</h2>
            <h3 className="text-2xl font-bold uppercase tracking-tighter">Education</h3>
          </div>

          <div className="space-y-10 relative before:absolute before:left-[3px] before:top-2 before:bottom-2 before:w-[1px] before:bg-slate-800">
            {educationItems.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="pl-8 relative"
              >
                <div className="absolute left-0 top-1.5 w-1.5 h-1.5 rounded-full bg-slate-700" />
                <div className="flex items-center gap-2 text-slate-500 text-[10px] font-mono uppercase mb-1">
                  {item.period}
                </div>
                <h3 className="text-sm font-bold uppercase text-white mb-0.5">{item.school}</h3>
                <div className="text-xs text-slate-500 uppercase font-bold mb-3">{item.degree}</div>
                <p className="text-xs text-slate-400 leading-relaxed max-w-md">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};
