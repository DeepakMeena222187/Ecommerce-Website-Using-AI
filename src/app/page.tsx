import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductsGrid from "@/components/ProductsGrid";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <main className="px-4 sm:px-20">
        <Hero />
        <ProductsGrid />
      </main>
      <Footer />
    </div>
  );
}
