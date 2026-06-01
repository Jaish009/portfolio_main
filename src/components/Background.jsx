import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

export default function Background() {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const particlesOptions = {
    fullScreen: { enable: false, zIndex: 0 },
    fpsLimit: 60,
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: "grab",
        },
      },
      modes: {
        grab: {
          distance: 140,
          links: {
            opacity: 0.5,
          },
        },
      },
    },
    particles: {
      color: {
        value: "#a78bfa", // brand-accent
      },
      links: {
        color: "#a78bfa",
        distance: 150,
        enable: true,
        opacity: 0.15,
        width: 1,
      },
      move: {
        direction: "none",
        enable: true,
        outModes: {
          default: "bounce",
        },
        random: true,
        speed: 0.5,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 800,
        },
        value: 40,
      },
      opacity: {
        value: 0.3,
      },
      shape: {
        type: ["circle"],
      },
      size: {
        value: { min: 1, max: 2 },
      },
    },
    detectRetina: true,
  };

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none bg-brand-bg transition-colors duration-700">
      
      {/* 1. Fluid Mesh Gradient */}
      <div className="absolute inset-0 opacity-40 dark:opacity-20 mix-blend-screen dark:mix-blend-lighten">
        <div className="absolute top-[-20%] left-[-10%] w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] rounded-[40%_60%_70%_30%] animate-mesh-1"
          style={{ background: 'radial-gradient(circle at center, var(--color-brand-accent-glow) 0%, transparent 70%)', filter: 'blur(90px)' }}
        />
        <div className="absolute bottom-[-10%] right-[-10%] w-[70vw] h-[70vw] max-w-[900px] max-h-[900px] rounded-[60%_40%_30%_70%] animate-mesh-2"
          style={{ background: 'radial-gradient(circle at center, rgba(192, 132, 252, 0.15) 0%, transparent 70%)', filter: 'blur(100px)' }}
        />
        <div className="absolute top-[30%] left-[30%] w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] rounded-[50%_50%_40%_60%] animate-mesh-3"
          style={{ background: 'radial-gradient(circle at center, rgba(96, 165, 250, 0.1) 0%, transparent 70%)', filter: 'blur(80px)' }}
        />
      </div>

      {/* 2. Neural Network Particles (AI/ML Theme) */}
      <div className="absolute inset-0 z-10 mix-blend-screen dark:mix-blend-lighten pointer-events-auto">
        <Particles
          id="tsparticles"
          init={particlesInit}
          options={particlesOptions}
          className="w-full h-full"
        />
      </div>

      {/* 3. Animated Perspective Grid */}
      <div className="absolute bottom-0 left-0 w-full h-[50vh] overflow-hidden pointer-events-none z-0">
        <div className="perspective-grid-container">
          <div className="perspective-grid" />
        </div>
      </div>

      {/* 4. Noise/Grain Texture (Top Layer) */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] z-20 mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
}
