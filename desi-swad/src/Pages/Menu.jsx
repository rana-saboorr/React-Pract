import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import MenuCard from "../Components/MenuCard";
import Popup from "../Components/Popup";
import { useMenu } from "../Context/MenuContext.jsx";

function Menu() {
  const [activeMenu, setActiveMenu] = useState(null);
  const { addItem } = useMenu();
  const navigate = useNavigate();

  const menuData = {
    Chicken: [
      "Chicken Karahi",
      "Chicken Handi",
      "Chicken Biryani",
      "Chicken Tikka",
      "Chicken Qorma",
      "Chicken Achari",
      "Chicken Malai Handi",
    ],
    SeaFood: [
      "Fish Fry",
      "Fish Karahi",
      "Prawn Masala",
      "Prawn Biryani",
      "Grilled Fish",
    ],
    Mutton: [
      "Mutton Karahi",
      "Mutton Qorma",
      "Mutton Biryani",
      "Mutton Pulao",
      "Mutton Rosh",
    ],
    "BBQ & Grills": [
      "Chicken Tikka",
      "Malai Boti",
      "Seekh Kabab",
      "Grilled Chicken",
    ],
    Rice: [
      "Plain Rice",
      "Zeera Rice",
      "Afghani Pulao",
      "Chicken Biryani",
      "Beef Biryani",
    ],
    "Fast Food": [
      "Zinger Burger",
      "Anda Sahmi Burger",
      "Beef Burger",
      "Club Sandwich",
      "Fajita Pizza",
      "Tikka Pizza",
      "Our Special Pizza",
      "Zinger Shawarma",
      "Simple Shawarma",
    ],
    Beef: ["Beef Karahi", "Beef Biryani", "Nihari", "Beef Pulao"],
    Desserts: ["Gulab Jamun", "Kheer", "Shahi Tukray", "Firni", "Ice Cream"],
    Breads: ["Naan", "Garlic Naan", "Paratha", "Paratha", "Roghni"],
    "Salad & Raita": [
      "Kachumber Salad",
      "Russian Salad",
      "Boondi Raita",
      "Plain Raita",
      "Mint Raita",
    ],
    Drinks: ["Fresh Lime", "Falooda", "Lassi", "Soft Drinks", "Mineral Water"],
    Vegetarian: [
      "Daal Fry",
      "Mix Sabzi",
      "Paneer Tikka",
      "Aloo Palak",
      "Vegetable Biryani",
    ],
  };

  return (
    <>
        <section className="h-screen flex items-center justify-center">
        <div className="flex flex-col items-center">
          <h2 className="text-yellow-300 text-[80px] font-bold">
            Our Menu
          </h2>
          <h2 className="text-white text-[80px] font-bold">Food & Drinks</h2>
        </div>
      </section>
      <section className="min-h-screen flex flex-col items-center justify-center p-20">
        <h2 className="text-yellow-300 text-[70px] font-extrabold mb-4 text-center">
          🍽️ Select Your Order
        </h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 font-semibold text-yellow-300 text-[30px]">
          {Object.keys(menuData).map((menu) => (
            <MenuCard
              key={menu}
              title={menu}
              onClick={() => setActiveMenu(menu)}
            />
          ))}
        </ul>

        <button
          onClick={() => navigate("/service")}
          className="mt-10 px-8 py-3 bg-yellow-600 hover:bg-yellow-400 text-white font-semibold text-2xl rounded-lg shadow-lg transition-colors duration-300"
        >
          Confirm Order
        </button>
      </section>

      {activeMenu && (
        <Popup
          title={activeMenu}
          items={menuData[activeMenu]}
          onClose={() => setActiveMenu(null)}
          addItem={addItem}
        />
      )}
    </>
  );
}

export default Menu;
