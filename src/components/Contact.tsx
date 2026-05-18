import { motion } from "motion/react";
import { Section } from "./layout";
import { Mail, Linkedin, Github, Send, MapPin } from "lucide-react";

export const Contact = () => {
  return (
    <Section id="contact">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div>
           <h2 className="label-mono mb-4 text-brand-primary">Direct Access // Contact</h2>
           <h3 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter mb-8 text-white">Let's build <br /><span className="text-brand-primary">the future of fintech</span></h3>
          <p className="text-slate-400 text-lg mb-12 max-w-md">
            Open to fintech, data science, and AI engineering opportunities.
          </p>

          <div className="space-y-4">
            <div className="flex items-center gap-4 group">
              <div className="w-10 h-10 rounded panel-border flex items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-all">
                <Mail className="w-4 h-4" />
              </div>
              <div>
                <p className="label-mono text-slate-600">Email</p>
                <p className="text-sm font-mono text-slate-300">Tditshego70@gmail.com</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4 group">
              <div className="w-10 h-10 rounded panel-border flex items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-all">
                <Linkedin className="w-4 h-4" />
              </div>
              <div>
                <p className="label-mono text-slate-600">LinkedIn</p>
                <p className="text-sm font-mono text-slate-300">Tshegofatso Ditshego</p>
              </div>
            </div>

            <div className="flex items-center gap-4 group">
              <div className="w-10 h-10 rounded panel-border flex items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-all">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <p className="label-mono text-slate-600">Location</p>
                <p className="text-sm font-mono text-slate-300">South Africa</p>
              </div>
            </div>
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, x: 10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="p-8 panel-border bg-slate-900/20"
        >
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="label-mono ml-1">Name</label>
                <input 
                  type="text" 
                  placeholder="John Doe"
                  className="w-full px-4 py-3 rounded bg-brand-bg border border-brand-border focus:outline-none focus:border-brand-primary transition-all placeholder:text-slate-700 text-sm"
                />
              </div>
              <div className="space-y-1.5">
                <label className="label-mono ml-1">Email</label>
                <input 
                  type="email" 
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 rounded bg-brand-bg border border-brand-border focus:outline-none focus:border-brand-primary transition-all placeholder:text-slate-700 text-sm"
                />
              </div>
            </div>
            
            <div className="space-y-1.5">
              <label className="label-mono ml-1">Message</label>
              <textarea 
                rows={4}
                placeholder="Tell me about your project..."
                className="w-full px-4 py-3 rounded bg-brand-bg border border-brand-border focus:outline-none focus:border-brand-primary transition-all placeholder:text-slate-700 text-sm resize-none"
              ></textarea>
            </div>

            <button className="w-full py-4 bg-brand-primary hover:bg-blue-600 text-white rounded font-bold text-xs uppercase tracking-widest transition-all group flex items-center justify-center gap-2">
              Send Message
              <Send className="w-3 h-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </form>
        </motion.div>
      </div>
    </Section>
  );
};
