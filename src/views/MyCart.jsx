import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import CartVegitableItem from "../components/CartVegitableItem";

function MyCart() {
  const [cartItems, setCartItems] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  // Load cart from localStorage
  useEffect(() => {
    const existingCart =
      JSON.parse(localStorage.getItem("cartItems")) || [];
    setCartItems(existingCart);
     
  }, []);

  // Calculate total using reduce (cleaner method)
  useEffect(() => {
    const total = cartItems.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    setTotalAmount(total);
     
  }, [cartItems]);

  const removeFromCart = (itemId) => {
    const updatedCart = cartItems.filter(item => item.id !== itemId);
    setCartItems(updatedCart);
    localStorage.setItem("cartItems", JSON.stringify(updatedCart));
  };

  return (
    <>
      <Navbar />

      <section className="min-h-screen bg-gradient-to-b from-green-50 to-green-200 py-10 px-4">

        <div className="max-w-6xl mx-auto">

          {/* Page Title */}
          <h1 className="text-3xl md:text-4xl font-bold text-center text-green-800 mb-8">
            🛒 Your Shopping Cart
          </h1>

          {/* If Cart Empty */}
          {cartItems.length === 0 ? (
            <div className="text-center bg-white p-10 rounded-xl shadow-md">
              <h2 className="text-xl font-semibold text-gray-600">
                Your cart is empty 🥕
              </h2>
              <p className="text-gray-500 mt-2">
                Add some fresh vegetables to your basket.
              </p>
            </div>
          ) : (
            <>
              {/* Cart Items */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {cartItems.map((item) => (
                  <CartVegitableItem
                    key={item.id}
                    {...item}
                    onRemove={removeFromCart}
                  />
                ))}
              </div>

              {/* Summary Section */}
              <div className="mt-10 bg-white p-6 rounded-xl shadow-lg flex flex-col md:flex-row justify-between items-center gap-4">
                <h2 className="text-xl font-semibold text-gray-700">
                  Total Payable Amount:
                </h2>
                <div className="text-2xl font-bold text-green-700">
                  ₹ {totalAmount}
                </div>
              </div>
            </>
          )}
        </div>

      </section>

      <Footer />
    </>
  );
}

export default MyCart;
