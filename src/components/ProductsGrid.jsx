import React from "react";
import ProductCard from "./ProductCard";
import { PRODUCTS } from "../data/products";

export default function ProductsGrid() {
  return (
    <section className="px-8 py-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {PRODUCTS.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </section>
  );
}
