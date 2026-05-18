import { motion } from "motion/react";
import { Section, Badge } from "./layout";
import { ExternalLink, Github, Terminal } from "lucide-react";

interface Project {
  title: string;
  description: string;
  tags: string[];
  image?: string;
  github?: string;
  demo?: string;
}

const projects: Project[] = [
  {
    title: "Trade Copier",
    description: "Real-time automation tool for forex trading across multiple accounts. Uses Python for heavy data handling and analysis to ensure seamless execution.",
    tags: ["Python", "Forex API", "Data Analysis", "Automation"],
    github: "#"
  },
  {
    title: "HealthConnect Portal",
    description: "A collaborative project from WeThinkCode_ focusing on patient data management and appointment scheduling within a secure environment.",
    tags: ["Python", "Flask", "SQL", "Team Project"],
    github: "#"
  },
  {
    title: "Fintech Sentiment Analyzer",
    description: "A data science project that analyzes financial news sentiment to predict market trends using natural language processing.",
    tags: ["Data Science", "Python", "NLP", "Finance"],
    github: "#"
  }
];

export const Projects = () => {
  return (
    <Section id="projects" className="bg-brand-bg">
      <div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-6">
        <div>
          <h2 className="label-mono mb-1 text-brand-primary">Industrial Output</h2>
          <h3 className="text-2xl font-bold uppercase tracking-tighter">Featured Projects</h3>
        </div>
        <a href="#" className="label-mono hover:text-white transition-all flex items-center gap-2">
          Systems Catalog <Github className="w-3 h-3" />
        </a>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="group relative flex flex-col panel-border p-6 hover:border-brand-primary/50"
          >
            <div className="flex justify-between items-start mb-4">
               <h3 className="text-lg font-bold text-white uppercase tracking-tight group-hover:text-brand-primary transition-colors">
                {project.title}
              </h3>
              <Badge>{project.tags[0]}</Badge>
            </div>
            
            <p className="text-slate-400 mb-6 leading-relaxed text-xs flex-grow">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-1.5 mb-6">
              {project.tags.slice(1).map(tag => (
                <span key={tag} className="text-[9px] font-mono text-slate-500 uppercase">{tag}</span>
              ))}
            </div>

            <div className="flex items-center gap-3 pt-4 border-t border-brand-border/50 uppercase font-mono text-[10px]">
              {project.github && (
                <a href={project.github} className="flex items-center gap-1.5 text-slate-500 hover:text-white transition-colors">
                  <Github className="w-3 h-3" /> Source
                </a>
              )}
              <div className="w-1 h-1 bg-slate-800 rounded-full"></div>
              <span className="text-slate-700">Production Ready</span>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};
