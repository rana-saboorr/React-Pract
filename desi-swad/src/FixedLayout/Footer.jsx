import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../Source/Logo.png'

function Footer() {
  return (
    <>
      <footer className="bg-yellow-600 border-y w-full mt-auto relative bottom-0">
        <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row gap-12 px-6 pb-8 p-6">

          <div className="w-full md:w-1/2">
            <h4 className="font-bold mb-4">CONTACT DETAILS</h4>

            <p>
              <b>Address</b><br />
              Street 1A E-11/4,<br />
              Islamabad
            </p>

            <br />

            <p><b>Phone</b> : 923310900909</p>
            <p><b>Email</b> : desiswad@gmail.com</p>

            <br />

            <div className="flex gap-4">
              <a href="https://www.tiktok.com/@desiswadrestaurant?is_from_webapp=1&sender_device=pc" target="_blank" className="fab fa-tiktok text-gray-500 hover:text-yellow-300"></a>
              <a href="#" target="_blank" className="fab fa-instagram text-gray-500 hover:text-yellow-300"></a>
            </div>
          </div>

    
          <div className="w-full md:w-1/2">
            <h4 className="font-bold mb-4">OPEN NOW</h4>
            <ul>
              <p className="h-8"><b>Mon</b> - 12:00 am 12:00 pm</p>
              <p className="h-8"><b>Tue</b> - 12:00 am 12:00 pm</p>
              <p className="h-8"><b>Wed</b> - 12:00 am 12:00 pm</p>
              <p className="h-8"><b>Thu</b> - 12:00 am 12:00 pm</p>
              <p className="h-8"><b>Fri</b> - 12:00 am 12:00 pm</p>
              <p className="h-8"><b>Sat</b> - 12:00 am 12:00 pm</p>
              <p className="h-8"><b>Sun</b> - 12:00 am 12:00 pm</p>
            </ul>
          </div>

        </div>

        <div className="text-center pb-4">
          <span className="text-sm text-gray-700">
            © 2023{" "}
            <a href="#" className="hover:underline">
              Desi Swad
            </a>{" "}
            . All Rights Reserved.
          </span>
        </div>

      </footer>
    </>
  )
}

export default Footer
