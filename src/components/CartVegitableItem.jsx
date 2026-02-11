import React from "react";
import Button from "./btn";

function CartVegitableItem({
  id,
  name,
  price,
  quantity,
  image,
  onRemove,
}) {
  const total = price * quantity;

  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-5 flex gap-5 items-center">

      {/* Image */}
      <div className="bg-gray-100 rounded-xl p-3">
        <img
          src={image}
          alt={name}
          className="w-24 h-24 object-contain"
        />
      </div>

      {/* Details */}
      <div className="flex flex-col flex-1 gap-1">
        <h3 className="text-lg font-semibold text-gray-800">
          {name}
        </h3>

        <p className="text-gray-600 text-sm">
          ₹ {price} per unit
        </p>

        <p className="text-gray-600 text-sm">
          Quantity: {quantity}
        </p>

        <p className="text-emerald-700 font-bold mt-1">
          Total: ₹ {total}
        </p>

        <div className="mt-3">
          <Button
            title="Remove"
            variant="danger"
            size="sm"
            onClick={() => onRemove(id)}
          />
        </div>
      </div>
    </div>
  );
}

export default CartVegitableItem;
