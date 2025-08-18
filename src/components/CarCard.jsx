export default function CarCard({ car, idx }) {
  return (
    <article
      className="relative group rounded-2xl overflow-hidden bg-gradient-to-b from-slate-800/60 to-slate-900 border border-slate-700 shadow-lg transform hover:-translate-y-2 transition"
      style={{ perspective: 1000 }}
    >
      <div className="relative">
        <img
          src={car.img}
          alt={car.name}
          className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/50 text-xs">{car.tag}</div>
        <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-rose-500/90 text-xs">#{String(idx+1).padStart(2,'0')}</div>
      </div>

      <div className="p-5">
        <h3 className="text-lg font-semibold">{car.name}</h3>
        <p className="mt-2 text-slate-300">{car.price}</p>

        <div className="mt-4 flex items-center justify-between">
          <div className="text-xs text-slate-400">Range • 450 km</div>
          <div className="flex items-center gap-2">
            <button className="px-3 py-1 rounded-md bg-rose-500 text-sm hover:scale-105 transition">View</button>
            <button className="px-3 py-1 rounded-md border border-slate-600 text-sm hover:brightness-110 transition">Compare</button>
          </div>
        </div>
      </div>

      {/* Hover reveal */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition flex items-end">
        <div className="p-6">
          <div className="bg-white/6 p-4 rounded-md backdrop-blur-sm">
            <div className="flex items-center justify-between text-sm text-slate-200">
              <div>0-100 km/h</div>
              <div className="font-semibold">3.9s</div>
            </div>
            <div className="mt-2 flex items-center justify-between text-sm text-slate-200">
              <div>Top Speed</div>
              <div className="font-semibold">260 km/h</div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
