import React from "react";
import image1 from "../Source/home-img.jpg";
import ServiceCard from "../Components/ServiceCard";
import delivery from "../Source/delivery.jpg";
import dinin from "../Source/dinin.jpg";
import takeout from "../Source/takeout.jpg";
function Home() {
  const Dinin = {
      image: dinin,
      title: "Din-In",
      content:
        "Welcome to our restaurant! We are thrilled to announce that our establishment is now offering dine-in service. Welcome our valued customers back into our dining area.",
      button: "View Menu",
    },
    Takeout = {
      image: takeout,
      title: "Takeout",
      content:
        "Welcome to our restaurant! We are proud to offer Takeout service. If you're looking for a place to enjoy a delicious meal in a warm and inviting atmosphere, look no further.",
      button: "Order Now",
    },
    Delivery = {
      image: delivery,
      title: "Delivery",
      content:
        "Our restaurant understands the need for convenient, hassle-free dining options, which is why we are pleased to offer delivery service right to your doorstep.",
      button: "Order Now",
    };

  return (
    <>
      <div>
        <section className="bg-gradient-to-br from-orange-50 to-yellow-50 py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <span className="text-yellow-400 text-[80px] font-comic font-bold block">
                Discover
              </span>
              <h1 className="text-black text-4xl font-bold mt-2">
                Desi Swad Cuisine
              </h1>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/2 w-100">
                <img
                  src={image1}
                  alt="Desi Swad Indian Cuisine"
                  className="w-full h-auto border-4 border-white shadow-lg"
                />
              </div>

              <div className="md:w-1/2 text-center md:text-left">
                <p className="text-gray-600 text-base  mb-6">
                  Experience the rich flavors of Pakistan at Desi Swad, where we
                  bring authentic Pakistani cuisine to your plate. Our menu
                  features a vibrant mix of traditional dishes, from spicy
                  curries and slow-cooked Nihari to flavorful Biryani, tender
                  Chapli Kebabs, and wholesome Saag. Indulge in favorites like
                  Chicken Karahi, Butter Naan, and Paneer Pakora, or explore
                  regional specialties such as Sindhi Biryani and Lahori
                  Chargha. Our chefs use only the finest ingredients and
                  traditional cooking techniques to ensure every dish captures
                  the essence of Pakistani gastronomy. Join us for a delightful
                  dining experience and savor the true taste of Pakistan.
                </p>
                 <div className="flex justify-center">
                <a
                  href="/aboutus"
                  className="relative inline-block px-8 py-3 font-semibold text-white 
               bg-gradient-to-r from-yellow-400 to-orange-500 
               rounded- shadow-lg 
               hover:from-orange-500 hover:to-yellow-400 
               hover:shadow-2xl hover:scale-105 
               transition-all duration-300 ease-in-out"
                >
                  OUR STORY
                </a>
              </div>
              </div>
            </div>
          </div>
        </section>
        <section className="">
          <div className="bg-transparent container mx-auto px-4">
            <div className="text-center mb-16">
              <span className="text-yellow-300 text-[50px] font-comic block">
                <b>OUR SERVICE</b>
              </span>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
                <ServiceCard obj={Dinin} />
                <ServiceCard obj={Takeout} />
                <ServiceCard obj={Delivery} />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Home;
