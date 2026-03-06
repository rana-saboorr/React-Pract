import React from "react";
import { useMenu } from "../Context/MenuContext";

function Service() {
  const { cart, deleteItem } = useMenu();

  if (!cart.length) return <p className="text-white text-2xl">No order yet!</p>;

  return (
    <div className="p-6">
      <h2 className="text-yellow-300 text-3xl mb-4">Your Order</h2>
      <ul>
        {cart.map((c, idx) => (
          <li key={idx} className="flex text-white justify-between items-center mb-2">
            <span>
              {c.item} <small>({c.category})</small>
            </span>
            <button
              onClick={() => deleteItem(idx)}
              className="px-2 py-1 bg-red-500 text-white rounded"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Service;
