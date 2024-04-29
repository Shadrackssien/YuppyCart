import { useEffect, useState } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";

import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer';

function App() {

  const [orderPopup, setOrderPopup] = useState(false);

  const handlePopup = () => {
    setOrderPopup(!orderPopup);
  }

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: 'ease-in-sine',
      delay: 100,
    })
    AOS.refresh();
}, []);
  return (
    <>
      <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
      <Navbar handleOrderPopup={handlePopup}/>
      <Outlet />
      <Footer />
      </div>
    </>
  )
}

export default App