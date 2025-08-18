export default function Header() {
  return (
    <header className="flex justify-between items-center px-8 py-4 bg-gray-900 text-white shadow-lg">
      <h1 className="text-2xl font-bold text-pink-500">Ecommerce</h1>
      <nav className="space-x-6">
        <a href="#" className="hover:text-pink-400 transition-colors">Home</a>
        <a href="#" className="hover:text-pink-400 transition-colors">Shop</a>
        <a href="#" className="hover:text-pink-400 transition-colors">Contact</a>
      </nav>
    </header>
  );
}
