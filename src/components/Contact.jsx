import { Mail, MapPin, Phone } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="relative bg-black text-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold">Visit us</h2>
            <p className="mt-2 text-zinc-300 max-w-md">
              Drop by for a cup or book a table for your next meetup. We love hosting creators and remote teams.
            </p>

            <div className="mt-6 space-y-3 text-zinc-300">
              <div className="flex items-center gap-3"><MapPin className="text-amber-400" size={18} /> 123 Neon Ave, Downtown</div>
              <div className="flex items-center gap-3"><Phone className="text-amber-400" size={18} /> (555) 012-3456</div>
              <div className="flex items-center gap-3"><Mail className="text-amber-400" size={18} /> hello@neonbrew.cafe</div>
            </div>
          </div>

          <form className="grid grid-cols-1 gap-4">
            <div>
              <label className="block text-sm text-zinc-400 mb-1">Name</label>
              <input className="w-full rounded-md bg-white/5 border border-white/10 px-3 py-2 text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-amber-500" placeholder="Your name" />
            </div>
            <div>
              <label className="block text-sm text-zinc-400 mb-1">Email</label>
              <input type="email" className="w-full rounded-md bg-white/5 border border-white/10 px-3 py-2 text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-amber-500" placeholder="you@example.com" />
            </div>
            <div>
              <label className="block text-sm text-zinc-400 mb-1">Message</label>
              <textarea rows={4} className="w-full rounded-md bg-white/5 border border-white/10 px-3 py-2 text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-amber-500" placeholder="How can we help?" />
            </div>
            <button type="button" className="inline-flex items-center justify-center rounded-md bg-amber-500 px-5 py-2.5 font-medium text-black shadow hover:bg-amber-400 transition">
              Send message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
