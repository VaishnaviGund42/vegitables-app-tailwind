import React, { useState } from "react";
import Button from "../components/btn";
import { CirclePlus, CircleMinus } from "lucide-react";
import toast, { Toaster } from "react-hot-toast";

function VegitableCard({
  id,
  name,
  price,
  image,
  description,
  unit,
  category,
  addToCart,
}) {
  const [quantity, setQuantity] = useState(1);

  const increaseQty = () => setQuantity(quantity + 1);

  const decreaseQty = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    } else {
      toast.error("Minimum quantity is 1");
    }
  };

  const handleAddToCart = () => {
    addToCart({
      id,
      name,
      price,
      unit,
      quantity,
      description,
      image,
      totalAmount: price * quantity,
    });

    toast.success(`${name} added to cart 🛒`);
  };

  return (
    <div className="bg-white rounded-3xl shadow-md hover:shadow-2xl transition-all duration-300 w-80 overflow-hidden group">

      {/* Product Image */}
      <div className="bg-gray-100 p-6 flex justify-center items-center">
        <img
          src={image}
          alt={name}
          className="h-40 object-contain group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Product Info */}
      <div className="p-5 flex flex-col gap-2">

        <span className="text-xs bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full w-fit">
          {category}
        </span>

        <h3 className="text-lg font-semibold text-gray-800">
          {name}
        </h3>

        <p className="text-sm text-gray-500 line-clamp-2">
          {description}
        </p>

        <p className="text-emerald-700 font-bold text-lg mt-2">
          ₹ {price} / {unit}
        </p>

        {/* Quantity Selector */}
        <div className="flex items-center justify-between mt-3">

          <div className="flex items-center bg-gray-100 rounded-full px-3 py-1">
            <CircleMinus
              size={20}
              className="cursor-pointer text-gray-600 hover:text-red-500"
              onClick={decreaseQty}
            />

            <span className="mx-3 font-medium">{quantity}</span>

            <CirclePlus
              size={20}
              className="cursor-pointer text-gray-600 hover:text-green-600"
              onClick={increaseQty}
            />
          </div>

          <span className="text-sm font-semibold text-gray-700">
            ₹ {price * quantity}
          </span>
        </div>

        {/* Add Button */}
        <div className="mt-4">
          <Button
            title="Add to Basket"
            variant="primary"
            size="medium"
            onClick={handleAddToCart}
          />
        </div>
      </div>

      <Toaster position="top-right" />
    </div>
  );
}

export default VegitableCard;
