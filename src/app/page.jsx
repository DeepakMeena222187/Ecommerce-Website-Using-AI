import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductsGrid from "@/components/ProductsGrid";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-purple-900 via-indigo-900 to-black text-white min-h-screen font-sans">
      <Header />
      <main className="px-4 sm:px-20">
        <Hero />
        <ProductsGrid />
      </main>
      <Footer />
    </div>
  );
}
