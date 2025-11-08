import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MenuShowcase from './components/MenuShowcase';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-black text-white font-inter">
      <Navbar />
      <main>
        <Hero />
        <MenuShowcase />
        <About />
        <Contact />
      </main>
      <footer className="border-t border-white/10 bg-black py-6 text-center text-sm text-zinc-400">
        © {new Date().getFullYear()} Neon Brew Cafe. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
