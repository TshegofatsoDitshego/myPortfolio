import { motion } from "motion/react";
import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  id?: string;
  className?: string;
}

export const Section = ({ children, id, className = "" }: SectionProps) => {
  return (
    <section id={id} className={`py-16 px-6 md:px-12 lg:px-24 border-b border-brand-border/50 ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="max-w-7xl mx-auto"
      >
        {children}
      </motion.div>
    </section>
  );
};

export const Container = ({ children, className = "" }: { children: ReactNode; className?: string }) => (
  <div className={`max-w-7xl mx-auto w-full ${className}`}>{children}</div>
);

export const Badge = ({ children }: { children: ReactNode; key?: string | number }) => (
  <span className="px-2 py-0.5 text-[10px] font-mono rounded border border-brand-primary/20 bg-brand-primary/10 text-brand-primary uppercase">
    {children}
  </span>
);
