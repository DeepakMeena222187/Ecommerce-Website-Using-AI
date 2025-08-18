export default function Hero() {
  return (
    <section className="pt-28">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-600/90">
            <span className="text-xs font-medium">New</span>
          </div>

          <h2 className="mt-6 text-4xl sm:text-5xl font-extrabold leading-tight">
            Feel the <span className="text-rose-400">power</span>. Embrace the <span className="text-indigo-400">silence</span>.
          </h2>

          <p className="mt-4 text-slate-300 max-w-xl">
            Discover a curated selection of cars — from electric torpedoes to handcrafted luxury. Interactive previews, immersive imagery, and micro animations make browsing fun.
          </p>

          <div className="mt-6 flex gap-4">
            <a className="px-6 py-3 rounded-md bg-rose-500 shadow-lg hover:scale-105 transition" href="#models">Explore Models</a>
            <a className="px-6 py-3 rounded-md border border-slate-600 text-slate-200 hover:border-rose-500 transition" href="#contact">Get in touch</a>
          </div>

          <div className="mt-6 text-sm text-slate-400">
            <span className="font-medium">Tip:</span> Hover a card to see specs and angled view.
          </div>
        </div>

        <div className="relative">
          {/* Fancy layered car preview */}
          <div className="rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition origin-center">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1504215680853-026ed2a45def?q=80&w=1600&auto=format&fit=crop"
                alt="hero car"
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute left-6 bottom-6">
                <div className="bg-black/60 px-4 py-2 rounded-md">
                  <h3 className="font-semibold">Aurora Concept</h3>
                  <p className="text-xs text-slate-300">0-100 in 3.2s • Range 520 km</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4 flex gap-3">
            <div className="w-24 h-14 rounded-lg overflow-hidden border border-slate-700">
              <img src="https://images.unsplash.com/photo-1549921296-3a69e6e7a7a9?q=80&w=800&auto=format&fit=crop" alt="" className="w-full h-full object-cover"/>
            </div>
            <div className="w-24 h-14 rounded-lg overflow-hidden border border-slate-700">
              <img src="https://images.unsplash.com/photo-1502877338535-766e1452684a?q=80&w=800&auto=format&fit=crop" alt="" className="w-full h-full object-cover"/>
            </div>
            <div className="w-24 h-14 rounded-lg overflow-hidden border border-slate-700">
              <img src="https://images.unsplash.com/photo-1549924231-f129b911e442?q=80&w=800&auto=format&fit=crop" alt="" className="w-full h-full object-cover"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
