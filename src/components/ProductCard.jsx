import React from "react";
import { motion } from "framer-motion";
import { FaShoppingCart, FaHeart } from "react-icons/fa";

export default function ProductCard({ product }) {
  return (
    <motion.div
      className="bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:scale-105 transition-transform"
      whileHover={{ scale: 1.05 }}
    >
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-64 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold">{product.name}</h3>
        <p className="text-pink-400 font-bold mt-1">₹{product.price}</p>
        <div className="flex justify-between mt-3">
          <button className="bg-indigo-500 p-2 rounded-full hover:bg-indigo-400 transition-colors">
            <FaShoppingCart />
          </button>
          <button className="text-pink-500 hover:text-pink-400 transition-colors">
            <FaHeart />
          </button>
        </div>
      </div>
    </motion.div>
  );
}
