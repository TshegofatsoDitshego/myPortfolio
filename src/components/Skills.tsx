import { motion } from "motion/react";
import { Section } from "./layout";
import { 
  Code2, 
  Database, 
  Terminal, 
  Cloud, 
  BrainCircuit, 
  LineChart 
} from "lucide-react";

const skillCategories = [
  {
    title: "Programming",
    icon: <Code2 className="w-5 h-5" />,
    skills: ["Python", "Software Engineering", "Flask", "Git"]
  },
  {
    title: "Data Science",
    icon: <BrainCircuit className="w-5 h-5" />,
    skills: ["Data Science", "Data Engineering", "Data Analysis", "Predictive Modeling"]
  },
  {
    title: "Backend & DB",
    icon: <Database className="w-5 h-5" />,
    skills: ["SQL", "NoSQL", "API Development", "Automation"]
  },
  {
    title: "Cloud & Dev",
    icon: <Cloud className="w-5 h-5" />,
    skills: ["AWS (In Progress)", "Git", "System Design", "Fintech Systems"]
  }
];

export const Skills = () => {
  return (
    <Section id="skills" className="bg-brand-bg">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-4">
        <div>
          <h2 className="label-mono mb-1 text-brand-primary">Tech Stack</h2>
          <h3 className="text-2xl font-bold uppercase tracking-tighter">Core Capabilities</h3>
        </div>
        <div className="flex gap-2 flex-wrap">
           {["Python", "Software Engineering", "Flask", "SQL", "Git", "AWS (In-Progress)", "Pandas", "Scikit-Learn"].map(tag => (
             <span key={tag} className="px-2 py-1 bg-slate-900 border border-slate-800 text-white text-[10px] rounded font-mono uppercase">
               {tag}
             </span>
           ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {skillCategories.map((category, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="p-5 panel-border hover:border-brand-primary/50 group"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded bg-slate-900 border border-slate-800 flex items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-all">
                {category.icon}
              </div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-slate-500">{category.title}</h3>
            </div>
            <ul className="space-y-2">
              {category.skills.map((skill, sIdx) => (
                <li key={sIdx} className="text-slate-400 text-xs font-mono uppercase truncate flex items-center gap-2">
                  <span className="w-1 h-1 bg-brand-primary/40 rounded-full"></span>
                  {skill}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};
