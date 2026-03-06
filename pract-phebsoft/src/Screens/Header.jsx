import React,{useState,useEffect} from 'react'
import {Link,NavLink} from 'react-router-dom'
import imageLogo from '../Source/phebsoft_logo.png'

function Header() {
     const [scrolled, setScrolled] = useState(false);
     
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
    <header  className={`shadow sticky top-0 z-50 transition-colors duration-300 ${
        scrolled ? 'bg-gray-400 ' : 'bg-transparent'
      }`}>
        <nav className='bg-transparent text-black px-4 lg:px-6 py-2.5'>
            <div className='flex flex-wrap justify-between items-center mx-auto max-w-screen-xl'>
                <Link to='/' className='flex item-center'>
                   <img 
                        src={imageLogo}
                        className='mr-3 h-6 w-22' alt='Logo'
                   />
                </Link>
                <div className='flex items-center lg:order-2'>
                    <Link to='https://www.instagram.com/explore/locations/503551703171794/phebsoft/' target='_blank' className=' px-3 lg:px-2 py-2 lg:py-2.5 mr-2 focus:outline-none'>
                        <i className="fab fa-instagram text-lg"></i>
                    </Link>
                    <Link to='https://www.facebook.com/phebsoft/' target='_blank' className='text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-3 lg:px-2 py-2 lg:py-2.5 mr-2 focus:outline-none'>
                        <i className="fab fa-facebook text-lg"></i>
                    </Link>
                    <Link to='https://twitter.com/phebsoft?lang=da' target='_blank' className='text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-3 lg:px-2 py-2 lg:py-2.5 mr-2 focus:outline-none'>
                        <i className="fab fa-twitter text-lg"></i>
                    </Link>
                    <Link to='https://pk.linkedin.com/company/phebsoft-pvt.-ltd.' target='_blank' className='text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-3 lg:px-2 py-2 lg:py-2.5 mr-2 focus:outline-none'>
                        <i className="fab fa-linkedin text-lg"></i>
                    </Link>
                    <Link to='#' className='text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-3 lg:px-2 py-2 lg:py-2.5 mr-2 focus:outline-none'>
                        <i className="fab fa-github text-lg"></i>
                    </Link>

                </div>
                <div
                            className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
                            id="mobile-menu-2"
                        >
                            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                                <li>
                                    <NavLink to="/"
                                        className={(isActive) =>
                                            `block py-2 pr-4 pl-3 ${isActive ? "text-orange-700": "text"}duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                        }
                                    >
                                        Home
                                    </NavLink>
                                    </li>

                                    <li>
                                    <NavLink to="whyus"
                                        className={(isActive) =>
                                            `block py-2 pr-4 pl-3 ${isActive ? "text-orange-700": "text"}duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                        }
                                    >
                                        Why Us
                                    </NavLink>
                                    </li>

                                       <li>
                                    <NavLink to="query"
                                        className={(isActive) =>
                                            `block py-2 pr-4 pl-3 ${isActive ? "text-orange-700": "text"}duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                        }
                                    >
                                        Queries
                                    </NavLink>
                                    </li>
                                
                            </ul>
                    </div>
            </div>

        </nav>
    </header>

      
    </>
  )
}

export default Header
