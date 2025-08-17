import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ProductsGrid from "./components/ProductsGrid";
import Features from "./components/Features";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-gradient-to-b from-purple-900 via-indigo-900 to-black text-white min-h-screen">
      <Header />
      <Hero />
      <Features />
      <ProductsGrid />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
