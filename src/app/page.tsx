import Header from "../components/Header";
import Hero from "../components/Hero";
import CarCard from "../components/CarCard";
import Footer from "../components/Footer";
import "../styles/animations.css";

const cars = [
  {
    id: 1,
    name: "Aurora GT",
    price: "₹ 42,99,000",
    tag: "Electric",
    img: "https://images.unsplash.com/photo-1549921296-3a69e6e7a7a9?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Vortex R",
    price: "₹ 55,50,000",
    tag: "Sport",
    img: "https://images.unsplash.com/photo-1502877338535-766e1452684a?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Nexus Cruiser",
    price: "₹ 18,75,000",
    tag: "SUV",
    img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: 4,
    name: "Stellar LX",
    price: "₹ 68,00,000",
    tag: "Luxury",
    img: "https://images.unsplash.com/photo-1542362567-b07e54358753?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: 5,
    name: "Comet EV",
    price: "₹ 29,99,000",
    tag: "Electric",
    img: "https://images.unsplash.com/photo-1549924231-f129b911e442?q=80&w=1600&auto=format&fit=crop",
  },
];

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-black text-white">
      <Header />
      <main className="max-w-7xl mx-auto px-6 sm:px-8">
        <Hero />

        {/* Filters */}
        <div className="mt-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="flex items-center gap-3 text-sm">
            <span className="px-3 py-1 rounded-full bg-slate-700/40">All</span>
            <button className="px-3 py-1 rounded-full bg-rose-600/90 hover:scale-105 transition">
              Electric
            </button>
            <button className="px-3 py-1 rounded-full bg-sky-600/90 hover:scale-105 transition">
              Sport
            </button>
            <button className="px-3 py-1 rounded-full bg-emerald-600/90 hover:scale-105 transition">
              Luxury
            </button>
          </div>

          <div className="flex items-center gap-3">
            <input
              className="bg-transparent border border-slate-600 px-3 py-2 rounded-md placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-rose-500"
              placeholder="Search car..."
            />
            <button className="px-4 py-2 bg-rose-500 rounded-md hover:brightness-110 transition">
              Search
            </button>
          </div>
        </div>

        {/* Grid */}
        <section className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pb-20">
          {cars.map((c, idx) => (
            <CarCard key={c.id} car={c} idx={idx} />
          ))}
        </section>
      </main>

      <Footer />
    </div>
  );
}
