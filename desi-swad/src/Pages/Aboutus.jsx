import React from "react";
import image from "../Source/Logo.png";
function Aboutus() {
  return (
    <>
      <section className="h-screen flex items-center justify-center">
        <div className="flex flex-col items-center">
          <h2 className="text-yellow-300 text-[80px] font-bold">
            True Passion
          </h2>
          <h2 className="text-white text-[80px] font-bold">ABOUT US</h2>
        </div>
      </section>
      <section className="bg-gradient-to-br from-orange-50 to-yellow-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-yellow-400 text-[70px] font-comic font-bold block">
              Taste of Pakistan
            </span>
            <h1 className="text-black text-4xl text-[70px] font-bold mt-2">
              Desi Swad Pakistani Cuisine
            </h1>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2 w-100">
              <img
                src={image}
                alt="Desi Swad Indian Cuisine"
                className="w-full h-auto  border-4 border-white shadow-lg"
              />
            </div>

            <div className="md:w-1/2 text-center md:text-left">
              <p className="text-gray-600 text-base  mb-6">
                At Desi Swad Pakistani Cuisine, we proudly bring the authentic
                and comforting flavors of Pakistan to your table in a warm and
                welcoming setting inspired by our rich culinary traditions. From
                sizzling Seekh Kebabs and flavorful Chicken Tikka to fragrant
                Chicken and Beef Biryani, our menu highlights beloved classics
                made with fresh ingredients and traditional spices. Enjoy
                favorites like Nihari, Haleem, Karahi Gosht, and Butter Chicken,
                along with delicious vegetarian options such as Chana Masala,
                Aloo Palak, and Daal Tarka, all served with freshly baked Naan
                or Roti. Complete your meal with sweet treats like Gulab Jamun
                or Kheer, and experience how at Desi Swad, good food and genuine
                hospitality come together to create memorable moments for family
                and friends.
              </p>
              <div className="flex justify-center">
                <a
                  href="/menu"
                  className="relative inline-block px-8 py-3 font-semibold text-white 
               bg-gradient-to-r from-yellow-400 to-orange-500 
               rounded- shadow-lg 
               hover:from-orange-500 hover:to-yellow-400 
               hover:shadow-2xl hover:scale-105 
               transition-all duration-300 ease-in-out"
                >
                  OUR RECIPES
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Aboutus;
