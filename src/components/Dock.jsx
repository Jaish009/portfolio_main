import { useRef, useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { FaHome, FaUser, FaBriefcase, FaGraduationCap, FaEnvelope, FaFileAlt, FaGithub, FaLinkedin, FaSun, FaMoon, FaCode } from "react-icons/fa";

function DockIcon({ children, mouseX, href, title, onClick, isExternal, isActive }) {
  const ref = useRef(null);

  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const widthSync = useTransform(distance, [-120, 0, 120], [36, 50, 36]);
  const width = useSpring(widthSync, { mass: 0.1, stiffness: 200, damping: 15 });

  const content = (
    <motion.div
      ref={ref}
      style={{ width, height: width }}
      className={`flex items-center justify-center rounded-xl bg-brand-card/80 border text-brand-muted hover:text-brand-accent hover:border-brand-accent/30 hover:bg-brand-accent-soft cursor-pointer transition-colors duration-200 relative group ${isActive ? 'border-brand-accent/50 text-brand-accent bg-brand-accent-soft' : 'border-brand-border'}`}
      title={title}
      onClick={onClick}
    >
      {children}
      {/* Tooltip */}
      <span className="absolute -top-9 left-1/2 -translate-x-1/2 px-2.5 py-1 bg-brand-text text-brand-bg text-[10px] font-semibold rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none shadow-lg z-[60]">
        {title}
      </span>
      {isActive && (
        <span className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-1 h-1 bg-brand-accent rounded-full" />
      )}
    </motion.div>
  );

  if (href) {
    return (
      <a
        href={href}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
      >
        {content}
      </a>
    );
  }

  return content;
}

export default function Dock({ toggleTheme, isDark }) {
  const mouseX = useMotionValue(Infinity);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "projects", "education", "skills", "contact"];
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "home", icon: <FaHome size={16} />, href: "#", title: "Home" },
    { id: "about", icon: <FaUser size={16} />, href: "#about", title: "About" },
    { id: "projects", icon: <FaBriefcase size={16} />, href: "#projects", title: "Projects" },
    { id: "education", icon: <FaGraduationCap size={16} />, href: "#education", title: "Education" },
    { id: "skills", icon: <FaCode size={16} />, href: "#skills", title: "Skills" },
    { id: "contact", icon: <FaEnvelope size={16} />, href: "#contact", title: "Contact" },
  ];

  const externalItems = [
    { icon: <FaFileAlt size={16} />, href: "/Jaish_Resume.pdf", title: "Resume", isExternal: true },
    { icon: <FaGithub size={16} />, href: "https://github.com/Jaish009", title: "GitHub", isExternal: true },
    { icon: <FaLinkedin size={16} />, href: "https://linkedin.com/in/jaishsayeed", title: "LinkedIn", isExternal: true },
  ];

  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className="fixed bottom-5 left-1/2 -translate-x-1/2 z-50 flex items-end gap-2.5 px-3.5 py-2.5 bg-brand-panel/70 backdrop-blur-xl border border-brand-border rounded-2xl shadow-2xl shadow-black/10"
      initial={{ y: 80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.8, duration: 0.6, ease: "easeOut" }}
    >
      {/* Internal Nav */}
      <div className="flex items-end gap-1.5 md:gap-2.5">
        {navItems.map((item, i) => (
          <DockIcon
            key={`nav-${i}`}
            mouseX={mouseX}
            href={item.href}
            title={item.title}
            isActive={activeSection === item.id || (activeSection === "" && item.id === "home")}
          >
            {item.icon}
          </DockIcon>
        ))}
      </div>

      <div className="w-px h-7 bg-brand-border mx-0.5 self-center" />

      {/* External Links */}
      <div className="flex items-end gap-1.5 md:gap-2.5 hidden sm:flex">
        {externalItems.map((item, i) => (
          <DockIcon
            key={`ext-${i}`}
            mouseX={mouseX}
            href={item.href}
            title={item.title}
            isExternal={item.isExternal}
          >
            {item.icon}
          </DockIcon>
        ))}
      </div>
      
      <div className="w-px h-7 bg-brand-border mx-0.5 self-center hidden sm:block" />
      
      {/* Theme Toggle */}
      <DockIcon mouseX={mouseX} title="Toggle Theme" onClick={toggleTheme}>
        {isDark ? <FaSun size={16} /> : <FaMoon size={16} />}
      </DockIcon>
    </motion.div>
  );
}
