import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import ProductsGrid from "@/components/ProductsGrid";

export default function Home() {
  return (
    <div className="font-sans">
      <Header />
      <main className="px-4 sm:px-20">
        <Hero />
        <ProductsGrid />
      </main>
      <Footer />
    </div>
  );
}
