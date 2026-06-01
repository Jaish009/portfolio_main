import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FaGraduationCap } from "react-icons/fa";

export default function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <motion.div
      ref={ref}
      id="education"
      className="w-full flex flex-col justify-center py-12 md:py-16 max-w-4xl mx-auto px-6 relative z-10"
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <motion.div className="mb-10" variants={itemVariants}>
        <h2 className="text-xl md:text-2xl font-bold tracking-[0.2em] text-shiny animate-shine uppercase inline-block pb-2">
          Education
        </h2>
      </motion.div>

      <motion.div
        className="group relative bg-brand-panel/40 backdrop-blur-xl border border-brand-border rounded-[2rem] p-8 md:p-10 shadow-lg overflow-hidden flex flex-col md:flex-row items-start md:items-center justify-between gap-6 hover:border-brand-accent/30 transition-colors duration-300"
        variants={itemVariants}
      >
        <div className="absolute top-0 right-0 w-32 h-32 bg-brand-accent/5 rounded-full blur-[60px] transition-all duration-500 -translate-y-1/2 translate-x-1/4 group-hover:bg-brand-accent/10" />

        <div className="flex items-start gap-5 relative z-10">
          <div className="p-4 bg-brand-accent-soft rounded-2xl shrink-0 mt-1">
            <FaGraduationCap className="text-brand-accent text-3xl" />
          </div>
          <div>
            <h3 className="text-lg md:text-xl font-bold text-brand-text mb-2">
              Bachelor of Technology – Computer Science & Engineering (AI/ML)
            </h3>
            <p className="text-brand-muted font-medium mb-1">
              Baderia Global Institute of Engineering and Management
            </p>
            <div className="flex items-center gap-3 mt-3">
              <span className="px-3 py-1 bg-brand-card/80 text-brand-text text-xs font-semibold rounded-lg border border-brand-border">
                GPA: 7.92
              </span>
            </div>
          </div>
        </div>

        <div className="relative z-10 md:text-right shrink-0">
          <span className="text-brand-accent font-semibold text-sm bg-brand-accent-soft px-4 py-2 rounded-full border border-brand-accent/20">
            Expected: July 2027
          </span>
        </div>
      </motion.div>
    </motion.div>
  );
}
