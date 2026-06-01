import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FaGraduationCap, FaMapMarkerAlt, FaLaptopCode, FaDownload } from "react-icons/fa";

export default function About() {
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
      id="about"
      className="w-full flex flex-col items-center justify-center py-16 md:py-24 max-w-5xl mx-auto px-6 relative z-10"
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <motion.div className="mb-10 text-center" variants={itemVariants}>
        <h2 className="text-2xl md:text-3xl font-bold tracking-[0.2em] text-shiny animate-shine uppercase inline-block pb-2">
          About
        </h2>
      </motion.div>

      {/* Bento Grid Layout */}
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full"
        variants={containerVariants}
      >
        {/* Main Bio Card */}
        <motion.div 
          className="col-span-1 md:col-span-2 bg-brand-panel/40 backdrop-blur-xl border border-brand-border rounded-[2rem] p-8 md:p-10 shadow-lg relative overflow-hidden group"
          variants={itemVariants}
        >
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-accent/40 to-transparent" />
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-accent/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/4 group-hover:bg-brand-accent/10 transition-colors duration-700"></div>
          
          <h3 className="text-xl font-bold text-brand-text mb-4">The Journey So Far</h3>
          <p className="text-brand-muted text-[15px] md:text-base leading-relaxed mb-4 relative z-10">
            I'm a <span className="text-brand-accent font-bold">Full Stack Developer</span> focused on building scalable web applications, RESTful APIs, and SaaS platforms using React.js, Next.js, and Node.js. 
          </p>
          <p className="text-brand-muted text-[15px] md:text-base leading-relaxed relative z-10">
            Grounded in core Computer Science fundamentals, I specialize in deploying production-grade systems on cloud platforms, with a keen interest in event-driven backend pipelines and scalable eCommerce SaaS products.
          </p>
        </motion.div>

        {/* Info Column */}
        <div className="col-span-1 flex flex-col gap-6">
          {/* Location & Status */}
          <motion.div 
            className="bg-brand-panel/40 backdrop-blur-xl border border-brand-border rounded-3xl p-6 shadow-lg flex flex-col justify-center h-full"
            variants={itemVariants}
          >
            <div className="flex items-center gap-3 mb-4 text-brand-text">
              <FaMapMarkerAlt className="text-brand-accent text-xl" />
              <span className="font-semibold text-sm">Based in India</span>
            </div>
            <div className="flex items-center gap-3 text-brand-text">
              <FaLaptopCode className="text-brand-accent text-xl" />
              <span className="font-semibold text-sm">Open to Full-time Roles</span>
            </div>
          </motion.div>

          {/* Quick Stats or Actions */}
          <motion.div 
            className="bg-brand-accent-soft border border-brand-accent/20 rounded-3xl p-6 shadow-lg flex flex-col justify-center items-center h-full hover:bg-brand-accent hover:text-white transition-colors duration-300 group cursor-pointer"
            variants={itemVariants}
          >
            <a href="/Jaish_Resume.pdf" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2">
              <FaDownload className="text-brand-accent group-hover:text-white text-2xl transition-colors" />
              <span className="font-bold text-brand-accent group-hover:text-white transition-colors">Download Resume</span>
            </a>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}
