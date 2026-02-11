import React, { useEffect, useState } from "react";
import { Salad, ShoppingCart } from "lucide-react";
import { Link } from "react-router";

function Navbar({ refreshCart }) {
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const existingCart =
      JSON.parse(localStorage.getItem("cartItems")) || [];
    setCartCount(existingCart.length);
  }, [refreshCart]);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/80 shadow-md">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

   
        <Link
          to="/"
          className="flex items-center gap-3 text-green-700 hover:text-green-900 transition"
        >
          <Salad size={36} className="text-green-600" />
          <span className="text-2xl font-bold tracking-wide">
            VeggieHub
          </span>
        </Link>

     
        <Link
          to="/MyCart"
          className="relative flex items-center text-green-700 hover:text-green-900 transition"
        >
          <ShoppingCart size={32} />

          {cartCount > 0 && (
            <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs font-bold px-2 py-[2px] rounded-full shadow">
              {cartCount}
            </span>
          )}
        </Link>
      </div>
    </header>
  );
}

export default Navbar;
