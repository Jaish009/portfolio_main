import { motion } from "framer-motion";

export default function ProjectCard({ title, icon, desc, stack, link, source, demo, isFeatured }) {
  const stackArray = stack.split(",").map(s => s.trim());

  return (
    <motion.div
      className={`group relative h-full bg-brand-panel/50 backdrop-blur-sm rounded-2xl p-6 md:p-8 flex flex-col gap-5 overflow-hidden transition-all duration-300 border border-brand-border hover:border-brand-accent/30 hover:shadow-xl hover:shadow-brand-accent/5 ${isFeatured ? 'md:flex-row md:items-center' : ''}`}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25 }}
    >
      {/* Accent gradient line at top */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-accent/0 group-hover:via-brand-accent/50 to-transparent transition-all duration-500" />

      {/* Hover glow */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-brand-accent/0 group-hover:bg-brand-accent/5 rounded-full blur-[60px] transition-all duration-500 -translate-y-1/2 translate-x-1/4" />

      {isFeatured && (
        <div className="md:w-1/3 shrink-0 flex items-center justify-center p-4 bg-brand-panel/30 rounded-xl border border-brand-border/50">
           {icon && <span className="transform scale-150 origin-center">{icon}</span>}
        </div>
      )}

      <div className="flex flex-col gap-4 flex-grow">
        {/* Title with Icon */}
        <div className="flex items-center gap-3 relative z-10">
          {!isFeatured && icon && <span className="shrink-0">{icon}</span>}
          <h3 className="text-xl md:text-2xl font-bold text-brand-text group-hover:text-brand-accent transition-colors duration-300">
            {title}
          </h3>
        </div>
        
        {/* Description */}
        <p className="text-sm md:text-[15px] leading-relaxed text-brand-muted flex-grow relative z-10">
          {desc || "A sophisticated web application built to solve complex problems with modern technology and a focus on optimal user experience."}
        </p>

        {/* Tech Stack Pills */}
        <div className="flex flex-wrap gap-2 mt-1 relative z-10">
          {stackArray.map((tech, i) => (
            <span 
              key={i} 
              className="px-2.5 py-1 bg-brand-card/80 text-brand-muted text-[11px] font-medium rounded-lg border border-brand-border"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-3 mt-3 pt-3 border-t border-brand-border/50 relative z-10">
          <a 
            href={link || demo} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-brand-accent text-white border border-brand-accent rounded-lg text-sm font-semibold transition-all hover:shadow-lg hover:shadow-brand-accent/25 hover:scale-105"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
            Live Demo
          </a>
          {source && (
            <a 
              href={source} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-brand-card text-brand-text border border-brand-border rounded-lg text-sm font-semibold transition-colors hover:bg-brand-card-hover hover:border-brand-border-hover"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
              Source
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
