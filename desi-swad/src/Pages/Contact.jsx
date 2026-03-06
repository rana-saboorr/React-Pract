import React from "react";

function Contact() {
  return (
    <>
      <section className="h-screen flex items-center justify-center">
        <div className="flex flex-col items-center">
          <h2 className="text-white text-[70px] font-bold">GET IN TOUCH</h2>
        </div>
      </section>

      <section className="bg-gradient-to-br from-orange-50 to-yellow-50 py-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
              Contact Us
            </h2>
            <p className="text-gray-600 mt-3">
              We'd love to hear from you. Fill out the form below.
            </p>
          </div>

          <div className="">
            <form className="space-y-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-6">
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full px-5 py-3 border border-gray-300 rounded-xl 
              focus:outline-none focus:ring-2 focus:ring-orange-400 
              focus:border-orange-400 transition"
                  />

                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full px-5 py-3 border border-gray-300 rounded-xl 
              focus:outline-none focus:ring-2 focus:ring-orange-400 
              focus:border-orange-400 transition"
                  />

                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full px-5 py-3 border border-gray-300 rounded-xl 
              focus:outline-none focus:ring-2 focus:ring-orange-400 
              focus:border-orange-400 transition"
                  />
                </div>

                <div>
                  <textarea
                    rows="7"
                    placeholder="Your Message"
                    className="w-full h-full px-5 py-3 border border-gray-300 rounded-xl 
              focus:outline-none focus:ring-2 focus:ring-orange-400 
              focus:border-orange-400 transition resize-none"
                  ></textarea>
                </div>
              </div>

              <div className="text-center pt-4">
                <button
                  type="submit"
                  className="px-10 py-3 font-semibold text-white 
                     bg-gradient-to-r from-yellow-400 to-orange-500 
                     rounded shadow-lg 
                     hover:from-orange-500 hover:to-yellow-400 
                     hover:shadow-2xl hover:scale-105 
                     transition-all duration-300 ease-in-out"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
