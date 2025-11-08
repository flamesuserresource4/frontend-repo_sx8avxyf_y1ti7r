import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="relative bg-black text-white py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-4"
        >
          <h2 className="text-3xl md:text-4xl font-bold">Crafted for creators</h2>
          <p className="text-zinc-300">
            Our space blends retro tech aesthetics with a modern coffee program. Expect low lighting,
            warm amber accents, and inviting neon greens that spark ideas.
          </p>
          <p className="text-zinc-300">
            Beans are sourced from small-batch roasters. Pastries arrive fresh daily. Power outlets at every table.
            Fast Wi‑Fi, lo-fi playlists, and friendly baristas.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-zinc-900 via-zinc-900/60 to-zinc-800 p-6"
        >
          <div className="grid grid-cols-3 gap-4 text-center">
            {[
              { label: "Seats", value: "48" },
              { label: "Roasts", value: "12" },
              { label: "Pastries", value: "18" },
            ].map((s) => (
              <div key={s.label} className="rounded-lg bg-white/5 p-4">
                <div className="text-2xl font-bold text-amber-400">{s.value}</div>
                <div className="text-xs text-zinc-400">{s.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
