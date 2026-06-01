import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    id: 1,
    title: "Synchronous Communication Hub",
    icon: <img src="/synchub.png" alt="Sync Hub" className="w-8 h-8 rounded-full object-cover" />,
    desc: "A real-time communication platform enabling instant messaging, voice calls, and collaborative workspaces for seamless team interaction.",
    stack: "React, Node.js, Express.js, MongoDB Atlas, WebRTC, Socket.IO",
    link: "https://synchronous-communication-hub-front.vercel.app/",
    source: "https://github.com/Jaish009/Synchronous-Communication-Hub"
  },
  {
    id: 2,
    title: "DentAssist AI",
    icon: <img src="/dentassist.png" alt="DentAssist" className="w-8 h-8 object-contain" />,
    desc: "A comprehensive practice management solution for dental clinics, featuring appointment scheduling, patient records, and billing integrations.",
    stack: "Next.js, React, Tailwind CSS, Vercel, AI Voice API",
    link: "https://dent-assist-ai-woad.vercel.app/",
    source: "https://github.com/Jaish009/DentAssist-AI"
  },
  {
    id: 3,
    title: "Fasal Ai",
    icon: <img src="/fasal.jpg" alt="Fasal AI" className="w-8 h-8 rounded-md object-contain dark:invert" />,
    desc: "An AI-powered agricultural assistant that helps farmers optimize crop yields by providing insights on weather, soil, and predictive analytics.",
    stack: "Next.js 15, React 19, FastAPI, PostgreSQL, Prisma, Scikit-Learn, Twilio, Vercel",
    link: "https://fasal-ai-six.vercel.app/",
    source: "https://github.com/Jaish009/FasalAi"
  },
  {
    id: 4,
    title: "BrandForge AI",
    icon: <img src="/brandforge.jpg" alt="BrandForge" className="w-8 h-8 rounded-full object-cover" />,
    desc: "A generative AI tool that creates customized brand identities, logos, and marketing copy for startups and small businesses instantly.",
    stack: "React 19, TypeScript, Express, Prisma, PostgreSQL, Cloudinary, Stripe",
    link: "https://brand-forge-ai-tawny.vercel.app/",
    source: "https://github.com/Jaish009/BrandForgeAI"
  },
];

export default function ProjectList() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <motion.div
      ref={ref}
      id="projects"
      className="w-full flex flex-col justify-center items-center py-12 md:py-20 max-w-5xl mx-auto px-6 relative z-10"
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      
      {/* Header Pill */}
      <motion.div
        className="px-4 py-1.5 bg-brand-accent text-white text-xs font-bold rounded-full mb-6 shadow-md shadow-brand-accent/20"
        variants={itemVariants}
      >
        Projects
      </motion.div>

      <motion.h2
        className="text-3xl md:text-5xl font-bold text-shiny animate-shine mb-3 text-center"
        variants={itemVariants}
      >
        Check out my latest work
      </motion.h2>
      <motion.p
        className="text-brand-muted text-sm md:text-base text-center mb-12 max-w-2xl"
        variants={itemVariants}
      >
        A selection of my recent work and personal projects
      </motion.p>

      {/* Grid Layout */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full"
        variants={containerVariants}
      >
        {projects.map((proj) => (
          <motion.div key={proj.id} className="h-full" variants={itemVariants}>
            <ProjectCard {...proj} />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
