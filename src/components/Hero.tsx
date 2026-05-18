import { motion } from "motion/react";
import profilePhoto from "../assets/me.jpeg";

export const Hero = () => {
  return (
    <section className="relative min-h-[70vh] flex flex-col justify-center items-center pt-32 pb-20 border-b border-brand-border">
      <div className="container px-6 mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-8 md:mb-0"
          >
             <h2 className="label-mono mb-2">Software Engineer & Aspiring Data Scientist</h2>
             <h1 className="text-4xl md:text-6xl lg:text-7xl font-sans font-bold tracking-tighter leading-none">
              Tshegofatso <br />
              <span className="text-brand-primary">Ditshego</span>
            </h1>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-left md:text-right"
          >
            <p className="label-mono mb-1">Status</p>
            <p className="text-sm text-green-400 flex items-center md:justify-end gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span> 
              Available for Fintech/AI Roles
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-12 gap-8">
           <div className="col-span-12 lg:col-span-8">
              <div className="panel-border p-6 bg-slate-900/40 h-full flex flex-col">
                <div className="flex-grow">
                  <p className="text-xl md:text-2xl font-light text-white leading-snug">
                    Building <span className="text-brand-primary italic">Intelligent Fintech Solutions</span> and automation tools.
                  </p>
                  <p className="mt-6 text-sm text-slate-400 leading-relaxed">
                    Recent WeThinkCode_ Software Engineering graduate currently studying Data Science with ALX. 
                    Passionate about building automation tools and intelligent systems in fintech.
                  </p>
                </div>
                <div className="flex gap-4 mt-8">
                  <a
                    href="#projects"
                    className="px-6 py-3 bg-brand-primary hover:bg-blue-600 text-white rounded font-bold text-[10px] uppercase tracking-widest transition-all"
                  >
                    View Projects
                  </a>
                  <a
                    href="#contact"
                    className="px-6 py-3 border border-brand-border hover:bg-slate-900 text-white rounded font-bold text-[10px] uppercase tracking-widest transition-all"
                  >
                    Contact
                  </a>
                </div>
              </div>
           </div>
           
           <div className="col-span-12 lg:col-span-4 flex flex-col gap-4">
              {/* Professional Photo */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="panel-border overflow-hidden"
                style={{ aspectRatio: "3/4" }}
              >
                <img
                  src={profilePhoto}
                  alt="Tshegofatso Ditshego"
                  className="w-full h-full object-cover object-top"
                />
              </motion.div>

              <div className="panel-border p-6 bg-blue-600 flex flex-col items-center justify-center text-center group transition-all">
                <p className="text-[10px] font-bold text-blue-200 uppercase tracking-tighter mb-1">Open to Opportunities</p>
                <p className="text-white font-bold leading-tight text-sm">Fintech, Data Science & AI Engineering</p>
              </div>
              
              <div className="panel-border p-6 flex flex-col justify-center gap-6">
                <div>
                  <p className="label-mono mb-2 text-slate-600">Location</p>
                  <p className="text-sm border-l border-brand-primary pl-3">Pretoria, South Africa</p>
                </div>
                <div>
                  <p className="label-mono mb-2 text-slate-600">Specialization</p>
                  <p className="text-sm border-l border-brand-primary pl-3">Automation & Predictive Systems</p>
                </div>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};
