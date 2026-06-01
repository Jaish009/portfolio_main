import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { 
  SiJavascript, SiTypescript, SiPython, SiHtml5, 
  SiNextdotjs, SiReact, SiTailwindcss, SiFramer, SiReactquery, 
  SiNodedotjs, SiExpress, SiFastapi,
  SiScikitlearn, SiPandas, SiNumpy,
  SiPostgresql, SiMongodb, SiPrisma, SiSqlalchemy,
  SiGoogle, SiJsonwebtokens, SiStripe, SiTwilio, SiWebrtc, SiSocketdotio,
  SiVercel, SiRailway, SiDocker, SiGithub, SiPostman, SiCloudinary 
} from "react-icons/si";
import { FaDatabase, FaCogs, FaBrain, FaLock, FaKey } from "react-icons/fa";
import { TbApi, TbBrandMysql } from "react-icons/tb";

const skillCategories = [
  {
    title: "Languages",
    skills: [
      { name: "JavaScript", icon: <SiJavascript color="#F7DF1E" /> },
      { name: "TypeScript", icon: <SiTypescript color="#3178C6" /> },
      { name: "Python", icon: <SiPython color="#3776AB" /> },
      { name: "SQL", icon: <TbBrandMysql color="#4479A1" /> },
      { name: "HTML / CSS", icon: <SiHtml5 color="#E34F26" /> }
    ]
  },
  {
    title: "Frontend",
    skills: [
      { name: "Next.js", icon: <SiNextdotjs className="text-brand-text" /> },
      { name: "React", icon: <SiReact color="#61DAFB" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss color="#06B6D4" /> },
      { name: "Framer Motion", icon: <SiFramer className="text-brand-text" /> },
      { name: "TanStack Query", icon: <SiReactquery color="#FF4154" /> }
    ]
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: <SiNodedotjs color="#339933" /> },
      { name: "Express.js", icon: <SiExpress className="text-brand-text" /> },
      { name: "FastAPI", icon: <SiFastapi color="#009688" /> },
      { name: "REST APIs", icon: <TbApi color="#4CAF50" /> },
      { name: "Clerk", icon: <FaLock color="#6C47FF" /> },
      { name: "Google OAuth", icon: <SiGoogle color="#4285F4" /> },
      { name: "JWT", icon: <SiJsonwebtokens className="text-brand-accent" /> }
    ]
  },
  {
    title: "ML / Data Science",
    skills: [
      { name: "Scikit-Learn", icon: <SiScikitlearn color="#F7931E" /> },
      { name: "Pandas", icon: <SiPandas className="text-brand-text" /> },
      { name: "NumPy", icon: <SiNumpy color="#4dabcf" /> }
    ]
  },
  {
    title: "Database & ORM",
    skills: [
      { name: "PostgreSQL", icon: <SiPostgresql color="#4169E1" /> },
      { name: "MongoDB", icon: <SiMongodb color="#47A248" /> },
      { name: "Prisma", icon: <SiPrisma className="text-brand-text" /> },
      { name: "SQLAlchemy", icon: <SiSqlalchemy color="#D71F00" /> },
      { name: "Mongoose", icon: <FaDatabase color="#880000" /> }
    ]
  },
  {
    title: "DevOps & Tools",
    skills: [
      { name: "Vercel", icon: <SiVercel className="text-brand-text" /> },
      { name: "Railway", icon: <SiRailway className="text-brand-text" /> },
      { name: "Docker", icon: <SiDocker color="#2496ED" /> },
      { name: "Git / GitHub", icon: <SiGithub className="text-brand-text" /> },
      { name: "VS Code", icon: <FaCogs color="#007ACC" /> }
    ]
  }
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.1 },
    },
  };

  const categoryVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  const pillVariants = {
    hidden: { opacity: 0, scale: 0.85 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3, ease: "easeOut" } },
  };

  return (
    <motion.div
      ref={ref}
      id="skills"
      className="w-full flex flex-col justify-center py-12 md:py-16 max-w-4xl mx-auto px-6 relative z-10"
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <motion.div className="mb-10" variants={categoryVariants}>
        <h2 className="text-xl md:text-2xl font-bold tracking-[0.2em] text-shiny animate-shine uppercase inline-block pb-2">
          Skills
        </h2>
      </motion.div>
      
      <div className="flex flex-col gap-8">
        {skillCategories.map((category, idx) => (
          <motion.div
            key={idx}
            className="flex flex-col gap-4 p-5 rounded-2xl bg-brand-panel/30 backdrop-blur-sm border border-brand-border/50 hover:border-brand-accent/20 transition-colors duration-300"
            variants={categoryVariants}
          >
            <h3 className="text-xs font-mono tracking-widest text-brand-accent uppercase font-semibold">
              {category.title}
            </h3>
            <motion.div
              className="flex flex-wrap gap-2.5 justify-start"
              variants={containerVariants}
            >
              {category.skills.map((skill, sIdx) => (
                <motion.div
                  key={sIdx}
                  className="px-3.5 py-2 flex items-center gap-2 text-xs md:text-sm font-medium bg-brand-card/80 text-brand-text border border-brand-border rounded-xl hover:border-brand-accent/30 hover:bg-brand-accent-soft hover:shadow-sm transition-all duration-200 cursor-default"
                  variants={pillVariants}
                  whileHover={{ scale: 1.05, y: -2 }}
                >
                  <span className="text-[14px] md:text-[16px] flex items-center justify-center">
                    {skill.icon}
                  </span>
                  {skill.name}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
