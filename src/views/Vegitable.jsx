import React, { useState, useMemo } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
// import vegitable_data from "../data.json";
import vegitable_data from "../data";

import VegitableCard from "../components/VegitableCard";
import toast, { Toaster } from "react-hot-toast";

function Vegitable() {
  const [refreshCart, setRefreshCart] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

 
  const categories = [
    "All",
    ...new Set(vegitable_data.map((item) => item.category)),
  ];

  function addToCart(item) {
    const existingCart =
      JSON.parse(localStorage.getItem("cartItems")) || [];

    const itemIndex = existingCart.findIndex(
      (cartItem) => cartItem.id === item.id
    );

    if (itemIndex !== -1) {
      existingCart[itemIndex].quantity =
        (existingCart[itemIndex].quantity || 1) + 1;
    } else {
      existingCart.push({ ...item, quantity: 1 });
    }

    localStorage.setItem("cartItems", JSON.stringify(existingCart));

    setRefreshCart(!refreshCart);
    toast.success(`${item.name} added to cart 🛒`);
  }

  const filteredVegetables = useMemo(() => {
    return vegitable_data.filter((item) => {
      const matchesSearch = item.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase());

      const matchesCategory =
        selectedCategory === "All" ||
        item.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  return (
    <>
      <Navbar refreshCart={refreshCart} />
      <Toaster position="top-right" />

      <section className="min-h-screen bg-gradient-to-b from-green-50 to-green-200 py-10 px-6">

        <div className="max-w-7xl mx-auto">

          <h1 className="text-3xl md:text-4xl font-bold text-center text-green-800 mb-8">
            🥕 Fresh Vegetables Collection
          </h1>

        
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">

       
            <input
              type="text"
              placeholder="Search vegetables..."
              className="px-4 py-2 rounded-lg border border-green-400 focus:outline-none focus:ring-2 focus:ring-green-500 w-full md:w-1/3"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />

      
            <select
              className="px-4 py-2 rounded-lg border border-green-400 focus:outline-none focus:ring-2 focus:ring-green-500 w-full md:w-1/4"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              {categories.map((cat, index) => (
                <option key={index} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>

        
          {filteredVegetables.length === 0 ? (
            <div className="text-center text-gray-600 mt-10">
              No vegetables found 🥦
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredVegetables.map((item) => (
                <VegitableCard
                  key={item.id}
                  {...item}
                  addToCart={addToCart}
                />
              ))}
            </div>
          )}
        </div>

      </section>

      <Footer />
    </>
  );
}

export default Vegitable;
