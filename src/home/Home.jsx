import { useState, useEffect } from "react"
import AOS from "aos";
import "aos/dist/aos.css";

import Banner from "../components/Banner/Banner"
import Hero from "../components/Hero/Hero"
import Popup from "../components/Popup/Popup"
import Products from "../components/Products/Products"
import TopProducts from "../components/Products/TopProducts"
import Subscribe from "../components/Subscribe/Subscribe"
import Testimonial from "../components/Testimonial/Testimonial"
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
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
      <Hero handleOrderPopup={handlePopup}/>
      <Products />
      <TopProducts handleOrderPopup={handlePopup}/>
      <Banner />
      <Subscribe />
      <Testimonial />
      <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
    </div>
  )
}

export default App