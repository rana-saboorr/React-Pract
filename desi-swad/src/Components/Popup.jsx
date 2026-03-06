import React, { useState } from "react";

function Popup({ title, items, onClose, addItem }) {
  const [selectedItems, setSelectedItems] = useState([]);

  const handleSelect = (item) => {
    setSelectedItems(prev =>
      prev.includes(item) ? prev.filter(i => i !== item) : [...prev, item]
    );
  };

  const handleConfirm = () => {
    if (selectedItems.length > 0) addItem(title, selectedItems); 
    onClose();
    setSelectedItems([]);
  };

  const handleCancel = () => {
    setSelectedItems([]);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-transparent bg-opacity-30 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg max-w-md w-full relative">
        <button
          onClick={handleCancel}
          className="absolute top-2 right-2 font-bold text-black"
        >
          X
        </button>
        <h3 className="text-2xl font-bold text-yellow-600 mb-4">{title}</h3>

        <ul>
          {items.map(item => (
            <li
              key={item}
              onClick={() => handleSelect(item)}
              className={`p-2 cursor-pointer rounded mb-1 ${
                selectedItems.includes(item) ? "bg-yellow-300" : "hover:bg-yellow-100"
              }`}
            >
              {item}
            </li>
          ))}
        </ul>

        <div className="flex justify-end mt-4 gap-2">
          <button
            onClick={handleCancel}
            className="px-4 py-2 border rounded bg-gray-200 hover:bg-gray-300"
          >
            Cancel
          </button>
          <button
            onClick={handleConfirm}
            className="px-4 py-2 border rounded bg-yellow-400 hover:bg-yellow-500"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
}

export default Popup;
