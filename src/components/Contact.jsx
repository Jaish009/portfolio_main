import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <motion.div
      ref={ref}
      id="contact"
      className="w-full flex justify-center py-24 relative z-10 mb-20 px-6"
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      
      {/* Glow Behind Card */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 max-w-lg h-64 bg-brand-accent/15 blur-[100px] rounded-full pointer-events-none"></div>

      <motion.div
        className="relative w-full max-w-3xl flex flex-col items-center justify-center p-10 md:p-20 bg-brand-panel/40 backdrop-blur-2xl border border-brand-border rounded-[2rem] shadow-2xl text-center overflow-hidden"
        variants={itemVariants}
      >
        
        {/* Accent top highlight */}
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-accent/40 to-transparent"></div>

        {/* Header Pill */}
        <motion.div
          className="px-5 py-2 bg-brand-accent-soft text-brand-accent text-[11px] uppercase tracking-[0.2em] font-bold rounded-full mb-8 border border-brand-accent/20 shadow-sm"
          variants={itemVariants}
        >
          Contact
        </motion.div>

        <motion.h2
          className="text-4xl md:text-6xl font-bold text-shiny animate-shine mb-6 pb-2 tracking-tight"
          variants={itemVariants}
        >
          Let's Build Together
        </motion.h2>

        <motion.p
          className="text-brand-muted text-base md:text-lg max-w-lg leading-relaxed mb-4"
          variants={itemVariants}
        >
          I'm currently open for new opportunities. Whether you have a question, a complex project idea, or just want to say hi, my inbox is always open!
        </motion.p>

        {/* Visible email */}
        <motion.p
          className="text-brand-muted/60 text-sm font-mono mb-10 select-all"
          variants={itemVariants}
        >
          jaishsayeedsiddiki@gmail.com
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
          variants={itemVariants}
        >
          <a 
            href="mailto:jaishsayeedsiddiki@gmail.com" 
            className="group relative w-full sm:w-auto px-8 py-4 font-bold rounded-xl shadow-lg shadow-brand-accent/20 hover:shadow-brand-accent/40 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 text-white overflow-hidden"
          >
            <span className="absolute inset-0 btn-accent-gradient" />
            <span className="relative z-10 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
              Send an Email
            </span>
          </a>
          <a 
            href="https://linkedin.com/in/jaishsayeed" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="w-full sm:w-auto px-8 py-4 bg-transparent border-2 border-brand-accent/20 text-brand-text font-bold rounded-xl hover:border-brand-accent hover:bg-brand-accent-soft transition-all duration-300 flex items-center justify-center gap-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            LinkedIn
          </a>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
