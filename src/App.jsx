import { useState, useEffect } from "react";
import ScrollProgress from "./components/ScrollProgress";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import ProjectList from "./components/ProjectList";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Dock from "./components/Dock";
import Background from "./components/Background";

function App() {
  const [isDark, setIsDark] = useState(true);

  // Sync theme to document html element for cleaner view transitions
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  const toggleTheme = () => {
    // Layer 3+4: View Transition API wraps the theme switch
    // CSS handles the soft dissolve + blur crossfade automatically
    if (document.startViewTransition) {
      document.startViewTransition(() => {
        setIsDark((prev) => !prev);
      });
    } else {
      // Fallback: @property transitions (Layer 1+2) still provide smooth blending
      setIsDark((prev) => !prev);
    }
  };

  return (
    <div className="w-full min-h-screen bg-brand-bg relative overflow-hidden font-inter text-brand-text">
      <ScrollProgress />
      <Background />
      <div className="w-full max-w-[1200px] mx-auto pb-32 flex flex-col gap-8 relative z-10">
        <Hero />
        <About />
        <ProjectList />
        <Education />
        <Skills />
        <Contact />
      </div>
      <Footer />
      <Dock toggleTheme={toggleTheme} isDark={isDark} />
    </div>
  );
}

export default App;
