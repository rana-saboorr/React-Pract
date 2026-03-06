import { useState, useEffect } from "react";
import Logo from "../Source/Logo.png";
import { Link, NavLink } from "react-router-dom";
function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <header
        className={`shadow sticky top-0 z-50 transition-colors duration-300 ${scrolled ? "bg-yellow-600" : "bg-transparent"}`}
      >
        <nav className="px-4 lg:px-6 py-3">
          <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <div className="flex justify-between items-center w-full lg:w-auto">
              <Link to="/" className="flex items-center">
                <img src={Logo} className="mr-3 h-16 w-20" alt="Logo" />
              </Link>

              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="lg:hidden text-white text-3xl focus:outline-none"
              >
                ☰
              </button>
            </div>

            <div
              className={`${
                menuOpen ? "block" : "hidden"
              } w-full mt-4 lg:mt-0 lg:flex lg:w-auto lg:order-1`}
              id="mobile-menu-2"
            >
              <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                <li>
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      `block py-2 pr-4 pl-3 ${isActive ? "text-yellow-300" : "text-white"} duration-200 border-b border-gray-50 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-yellow-200 lg:p-0`
                    }
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/menu"
                    onClick={() => setMenuOpen(false)}
                    className={({ isActive }) =>
                      `block py-2 pr-4 pl-3 ${isActive ? "text-yellow-300" : "text-white"} duration-200 border-b border-gray-50 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-yellow-200 lg:p-0`
                    }
                  >
                    Menu
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/aboutus"
                    className={({ isActive }) =>
                      `block py-2 pr-4 pl-3 ${isActive ? "text-yellow-300" : "text-white"} duration-200 border-b border-gray-50 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-yellow-200 lg:p-0`
                    }
                  >
                    About us
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to="/events"
                    className={({ isActive }) =>
                      `block py-2 pr-4 pl-3 ${isActive ? "text-yellow-300" : "text-white"} duration-200 border-b border-gray-50 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-yellow-200 lg:p-0`
                    }
                  >
                    Events
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/service"
                    className={({ isActive }) =>
                      `block py-2 pr-4 pl-3 ${isActive ? "text-yellow-300" : "text-white"} duration-200 border-b border-gray-50 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-yellow-200 lg:p-0`
                    }
                  >
                    Service
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/contact"
                    className={({ isActive }) =>
                      `block py-2 pr-4 pl-3 ${isActive ? "text-yellow-300" : "text-white"} duration-200 border-b border-gray-50 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-yellow-200 lg:p-0`
                    }
                  >
                    Contact
                  </NavLink>
                </li>
              </ul>
            </div>
            <div
              className={`${
                menuOpen ? "flex" : "hidden"
              } flex-col mt-4 space-y-3 lg:space-y-0 lg:mt-0 lg:flex lg:flex-row lg:items-center lg:space-x-3 lg:order-2`}
            >
              <NavLink
                to="#"
                className="cursor-pointer px-4 py-2 mr-2 border border-yellow-400 rounded  text-white bg-yellow-600 hover:bg-yellow-300 hover:text-gray-900 transition-colors duration-200"
              >
                <strong>ORDER ONLINE</strong>
              </NavLink>

              <NavLink
                to="/contact"
                className="cursor-pointer px-4 py-2 mr-2 border border-yellow-400  rounded text-white bg-yellow-600 hover:bg-yellow-300 hover:text-gray-900 transition-colors duration-200"
              >
                <strong>CALL US</strong>
              </NavLink>
              <NavLink
                to="/service"
                className="cursor-pointer px-4 py-2 mr-2 border border-yellow-400  rounded text-white bg-yellow-600 hover:bg-yellow-300 hover:text-gray-900 transition-colors duration-200"
              >
                <strong className="fas  fa-shopping-cart color-white"></strong>
              </NavLink>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
