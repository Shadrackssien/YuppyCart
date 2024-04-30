import { FaCaretDown } from "react-icons/fa"; 
import { AiOutlineUser } from "react-icons/ai"; 
import { AiOutlineShoppingCart } from "react-icons/ai"; 
import { AiOutlineSearch } from "react-icons/ai"; 
import Logo from '../../assets/logo.png'
import DarkMode from "./DarkMode";

const Menu = [
    {
      id: 1,
      name: "Home",
      link: "/",
    },
    {
      id: 2,
      name: "All Products",
      link: "/Allproducts",
    },
    {
      id: 3,
      name: "Men",
      link: "/men",
    },
    {
      id: 4,
      name: "Women",
      link: "/Women",
    },
    {
      id: 5,
      name: "Kids",
      link: "/Kids",
    },
  ];
  
  const DropdownLinks = [
    {
      id: 1,
      name: "Trending Products",
      link: "/#",
    },
    {
      id: 2,
      name: "Best Selling",
      link: "/#",
    },
    {
      id: 3,
      name: "Top Rated",
      link: "/#",
    },
  ];
  

// eslint-disable-next-line react/prop-types
function Navbar({handleOrderPopup}) {
  return (
        <div className='shadow-md bg-white 
    dark:bg-gray-900 dark:text-white duration-200
      z-40 sticky top-0 backdrop-blur-lg bprder-neutral-700/80'>
        {/* Upper Navbar */}
        <div className='bg-primary/40 py-3 sm:py-0'>
            <div className='container flex justify-between
                items-center sm:w-full space-x-4 '>
                <div>      
                    <a href="/"
                    className='font-bold text-2xl sm:text-3xl flex gap-2'>
                        <img src={Logo} alt="logo" 
                        className='w-12 py-1' />
                        YuppyCart
                    </a>
                </div>
                {/* Search Bar */}
                <div className="flex justify-between items-center gap-2">
                <div className='relative group hidden sm:block'>
                    <input 
                        type="text" 
                        placeholder="Search"
                        className="w-[150px] sm:w-[100px] group-hover:w-[200px] 
                        transition-all duration-300 rounded-full border border-gray-300
                        px-2 py-1 focus:outline-none focus:border-1 focus:border-primary"
                    />
                    <AiOutlineSearch 
                    className="text-gray-500 group:hover:text-primary 
                    absolute top-1/2 -translate-y-1/2 right-3"/>
                </div>
                {/* Order Button */}
                <button
                onClick={handleOrderPopup}
                className="bg-gradient-to-r from-primary to-secondary transition-all
                duration-200 text-white py-1 px-4 rounded-full
                flex items-center gap-3 group"
                >
                    <span
                    className="group-hover:block hidden transition-all duration-200">
                        Order
                    </span>
                    <AiOutlineShoppingCart
                    className="text-xl text-white drop-shadow-sm cursor-pointer
                    "/>
                </button>

                {/* Create Account */}
               <div className="hidden sm:flex my-3 text-center md:flex lg:flex justify-center space-x-12
               items-center">
               <a
                onClick={() => alert("Kindly create an account")}
                className="bg-gradient-to-r from-primary to-secondary transition-all 
                hover:scale-105
                duration-200 text-white py-1 px-4 rounded-full
                flex items-center gap-3 group cursor-pointer "
                >
                    <span
                    className="uppercase group-hover:block ">
                        Sign In
                    </span>
                    <AiOutlineUser 
                    className="text-xl text-white sm:hidden md:flex lg:flex drop-shadow-sm cursor-pointer
                    "/>
                </a>

                {/* Log In */}
                {/*<a
                onClick={() => alert("Ordering not available yet")}
                className="bg-gradient-to-r from-primary to-secondary transition-all
                hover:scale-105 duration-200 text-white py-1 px-4 rounded-full
                flex items-center gap-3 group sm:hidden"
                >
                    <span
                    className="uppercase">
                        Log In
                    </span>
                    <AiOutlineUser 
                    className="text-xl text-white drop-shadow-sm cursor-pointer
                    "/>
                </a>*/}
               </div>

                {/* Darkmode Switch */}
                <div>
                    <DarkMode />
                </div>
                </div>
            </div>
        </div>

        {/* Lower Navbar */}
        <div className="flex justify-center">
        <ul className="sm:flex hidden items-center gap-4">
          {Menu.map((data) => (
            <li key={data.id}>
              <a
                href={data.link}
                className="inline-block px-4 hover:text-primary duration-200"
              >
                <h2>{data.name}</h2>
              </a>
            </li>
          ))}
          {/* Simple Dropdown and Links */}
          <li className="group relative cursor-pointer">
                <a href="#" className="flex items-center gap-[2px] py-2">
                    Trending Products
                    <span>
                    <FaCaretDown className="transition-all duration-200 group-hover:rotate-180"/>
              </span>
            </a>
            <div className="absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white p-2 text-black shadow-md">
              <ul>
                {DropdownLinks.map((data) => (
                  <li key={data.id}>
                    <a
                      href={data.link}
                      className="inline-block w-full rounded-md p-2 hover:bg-primary/20 "
                    >
                      {data.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
    
  )
}

export default Navbar