"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-8 py-20 gap-10">
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="flex-1"
      >
        <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">
          Elevate Your Style
        </h1>
        <p className="mt-4 text-gray-300 text-lg">
          Explore our curated collection of fashion, tech, and lifestyle products.
        </p>
        <button className="mt-6 bg-gradient-to-r from-pink-500 to-indigo-500 px-6 py-3 rounded-full font-semibold hover:scale-105 transition-transform">
          Shop Now
        </button>
      </motion.div>

      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="flex-1"
      >
        <img
          src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800"
          alt="Hero Banner"
          className="rounded-3xl shadow-xl"
        />
      </motion.div>
    </section>
  );
}
