import { motion } from "motion/react";

export const ElevatorPitch = () => {
  return (
    <section id="elevator-pitch" className="py-24 border-b border-brand-border">
      <div className="container px-6 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <p className="label-mono mb-2">// watch</p>
          <h2 className="text-3xl md:text-4xl font-sans font-bold tracking-tighter text-white">
            My Elevator Pitch
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="panel-border overflow-hidden max-w-3xl"
        >
          <div className="flex items-center gap-2 px-4 py-3 border-b border-brand-border bg-slate-900/60">
            <span className="w-2.5 h-2.5 rounded-full bg-slate-700"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-slate-700"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-blue-500/60"></span>
            <span className="ml-3 text-[10px] font-mono text-slate-500 uppercase tracking-widest">
              elevator_pitch.mp4
            </span>
          </div>

          <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/C8i5JIpQlsI?rel=0&modestbranding=1"
              title="Elevator Pitch"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          <div className="px-6 py-4 bg-slate-900/40 flex items-center justify-between">
            <p className="text-xs text-slate-500 font-mono">Software Engineer - Fintech</p>
            <a
              href="https://youtu.be/C8i5JIpQlsI"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[10px] font-bold uppercase tracking-widest text-brand-primary hover:text-blue-400 transition-colors"
            >
              Watch on YouTube
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
