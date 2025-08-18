export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 backdrop-blur-md bg-black/30 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between h-16">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-rose-500 to-indigo-500 flex items-center justify-center font-bold text-black animate-pulse">
            R
          </div>
          <div>
            <h1 className="text-lg font-semibold">Rev</h1>
            <p className="text-xs text-slate-400 -mt-1">Cars that make you go wow</p>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-6 text-sm text-slate-200">
          <a className="hover:underline" href="#models">Models</a>
          <a className="hover:underline" href="#offers">Offers</a>
          <a className="hover:underline" href="#contact">Contact</a>
          <button className="ml-3 px-3 py-1 rounded-md bg-rose-500 hover:brightness-110 transition">Book Test Drive</button>
        </nav>

        <div className="md:hidden">
          <button className="px-3 py-2 rounded-md bg-white text-black font-semibold">Menu</button>
        </div>
      </div>
    </header>
  );
}
