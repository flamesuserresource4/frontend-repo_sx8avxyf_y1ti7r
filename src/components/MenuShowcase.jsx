import { Star, CupSoda, Croissant, Coffee } from "lucide-react";
import { motion } from "framer-motion";

const items = [
  {
    icon: Coffee,
    title: "Neon Espresso",
    desc: "Double shot with caramel crema and a citrus finish.",
    price: "$4.50",
  },
  {
    icon: CupSoda,
    title: "Matcha Fizz",
    desc: "Sparkling yuzu matcha with basil foam.",
    price: "$5.50",
  },
  {
    icon: Croissant,
    title: "Almond Croissant",
    desc: "Buttery layers with toasted almond praline.",
    price: "$3.75",
  },
];

export default function MenuShowcase() {
  return (
    <section id="menu" className="relative bg-black text-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between">
          <h2 className="text-3xl md:text-4xl font-bold">Signature Picks</h2>
          <div className="hidden md:flex items-center text-amber-400">
            <Star className="mr-1" size={18} /> Best-sellers
          </div>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition"
            >
              <div className="flex items-start gap-4">
                <div className="shrink-0 rounded-md bg-amber-500/20 p-2 ring-1 ring-amber-500/40">
                  <it.icon className="text-amber-400" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-lg font-semibold tracking-tight">{it.title}</h3>
                  <p className="mt-1 text-sm text-zinc-300">{it.desc}</p>
                </div>
                <div className="ml-auto font-semibold text-amber-400">{it.price}</div>
              </div>

              <div className="absolute -bottom-10 right-4 h-24 w-24 rounded-full bg-emerald-500/10 blur-2xl transition-all duration-500 group-hover:scale-150" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
