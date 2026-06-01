import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FaCode, FaServer, FaCloud } from "react-icons/fa";

export default function Intro() {
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
      className="w-full flex flex-col items-center justify-center py-16 md:py-24 max-w-5xl mx-auto px-6 relative z-10"
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      
      <motion.div className="mb-10 text-center" variants={itemVariants}>
        <h2 className="text-2xl md:text-3xl font-bold tracking-[0.2em] text-shiny animate-shine uppercase inline-block pb-2">
          Professional Summary
        </h2>
      </motion.div>

      <motion.div
        className="relative w-full bg-brand-panel/40 backdrop-blur-xl border border-brand-border rounded-[2rem] p-8 md:p-12 shadow-2xl overflow-hidden group"
        variants={itemVariants}
      >
        
        {/* Accent line at top */}
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-accent/40 to-transparent" />

        {/* Decorative subtle background gradient */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-accent/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/4 group-hover:bg-brand-accent/10 transition-colors duration-700"></div>

        <div className="relative z-10 text-[16px] md:text-lg leading-loose text-brand-muted flex flex-col gap-6">
          <p className="text-brand-text font-medium text-lg md:text-xl leading-relaxed">
            I'm a <span className="text-brand-accent font-bold">Full Stack Developer</span> with hands-on experience building scalable web applications, RESTful APIs, and SaaS platforms using <span className="text-brand-text font-semibold">React.js, Next.js, and Node.js</span>.
          </p>

          <p>
            I specialize in deploying production-grade systems on cloud platforms. I am highly experienced with <strong className="text-brand-text font-semibold">PostgreSQL, SQL query optimization, JWT-based authentication</strong>, and creating event-driven backend pipelines capable of high throughput. 
          </p>

          <p>
            Familiar with Agile workflows, Git-based version control, and CI/CD practices, my work is deeply grounded in core Computer Science fundamentals including OOP, DBMS, and Machine Learning. I am actively seeking a Full-Stack Developer role to build scalable eCommerce and SaaS products.
          </p>
        </div>

        {/* Highlight Pills */}
        <motion.div
          className="relative z-10 mt-10 flex flex-wrap gap-4 pt-8 border-t border-brand-border/50"
          variants={containerVariants}
        >
          {[
            { icon: <FaCode className="text-brand-accent" />, label: "Scalable Web Apps" },
            { icon: <FaServer className="text-brand-accent" />, label: "High-Throughput APIs" },
            { icon: <FaCloud className="text-brand-accent" />, label: "Cloud Deployment" },
          ].map((item, i) => (
            <motion.div
              key={i}
              className="flex items-center gap-2 px-4 py-2 bg-brand-accent-soft border border-brand-accent/20 rounded-full text-xs font-semibold text-brand-text"
              variants={itemVariants}
            >
              {item.icon} {item.label}
            </motion.div>
          ))}
        </motion.div>

      </motion.div>
    </motion.div>
  );
}
