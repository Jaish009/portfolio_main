import { motion } from "framer-motion";


export default function Hero() {
  return (
    <div id="home" className="w-full flex flex-col items-center text-center justify-center min-h-[90vh] py-20 mt-4 relative z-10">
      {/* Availability badge */}
      <motion.div
        className="mb-8 px-4 py-1.5 rounded-full border border-brand-accent/30 bg-brand-accent-soft backdrop-blur-md text-xs font-medium text-brand-accent flex items-center gap-2 shadow-sm"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-accent opacity-50"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand-accent"></span>
        </span>
        Available for new opportunities
      </motion.div>
      
      <motion.h1
        className="text-5xl md:text-6xl lg:text-8xl font-bold tracking-tight mb-6 text-brand-muted/60"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        Hi, I'm <span className="font-serif italic font-semibold text-accent-gradient animate-shine">Jaish</span>
      </motion.h1>
      
      <motion.p
        className="text-xl md:text-2xl text-brand-muted/90 max-w-2xl px-4 leading-relaxed font-light"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        I engineer robust, user-focused web applications with modern technologies. Let's build something extraordinary together.
      </motion.p>
      
      <motion.div
        className="mt-10 flex flex-wrap justify-center gap-4 items-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <a href="#contact" className="group relative px-7 py-3.5 rounded-full font-semibold text-sm text-white overflow-hidden transition-transform duration-200 hover:scale-105 shadow-lg shadow-brand-accent/25">
          <span className="absolute inset-0 btn-accent-gradient" />
          <span className="relative z-10 flex items-center gap-2">
            Get in Touch
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </span>
        </a>
        <a href="#projects" className="px-7 py-3.5 rounded-full border border-brand-accent/20 bg-brand-panel/80 text-brand-text font-semibold text-sm hover:bg-brand-card hover:border-brand-accent/50 transition-all duration-200">
          View Work
        </a>
      </motion.div>
    </div>
  );
}
