export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative z-10 w-full border-t border-brand-border/50 py-8 px-6">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-brand-muted text-xs">
        <p>
          © {year} <span className="text-brand-text font-medium">Jaish Sayeed</span>. All rights reserved.
        </p>
        <p className="flex items-center gap-1.5">
          Built with
          <span className="text-brand-accent font-semibold">React</span>
          +
          <span className="text-brand-accent font-semibold">Vite</span>
          · Deployed on
          <span className="text-brand-accent font-semibold">Vercel</span>
        </p>
      </div>
    </footer>
  );
}
