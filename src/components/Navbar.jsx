import { Coffee, Menu as MenuIcon, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: "Menu", href: "#menu" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-black/50 backdrop-blur border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#top" className="flex items-center gap-2 text-white">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-amber-500 text-black shadow-md">
              <Coffee size={18} />
            </span>
            <span className="font-semibold tracking-tight">Neon Brew Cafe</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-zinc-300 hover:text-white transition"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/10 text-white"
          >
            {open ? <X size={18} /> : <MenuIcon size={18} />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4" role="dialog" aria-modal="true">
            <div className="grid gap-2">
              {navItems.map((item) => (
                <a
                  onClick={() => setOpen(false)}
                  key={item.href}
                  href={item.href}
                  className="block rounded-md px-3 py-2 bg-white/5 text-zinc-200 hover:bg-white/10"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
