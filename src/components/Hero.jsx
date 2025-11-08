import Spline from "@splinetool/react-spline";

export default function Hero() {
  return (
    <section id="top" className="relative min-h-[90vh] w-full bg-black text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/S4k-6fqjuV5AuVZe/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 pb-24">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-300">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
            Open today 7am – 9pm
          </div>
          <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
            Retro vibes. Modern brews.
          </h1>
          <p className="mt-4 text-zinc-300 max-w-xl">
            Step into Neon Brew Cafe — a creative tech workspace with specialty coffee,
            artisanal pastries, and a cozy dark-mode atmosphere.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#menu" className="inline-flex items-center justify-center rounded-md bg-amber-500 px-5 py-2.5 font-medium text-black shadow hover:bg-amber-400 transition">
              Explore Menu
            </a>
            <a href="#about" className="inline-flex items-center justify-center rounded-md border border-white/20 bg-white/5 px-5 py-2.5 font-medium text-white hover:bg-white/10 transition">
              Our Story
            </a>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/80 to-transparent" />
    </section>
  );
}
