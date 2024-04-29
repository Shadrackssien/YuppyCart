import Banner from "./components/Banner/Banner"
import Footer from "./components/Footer/Footer"
import Hero from "./components/Hero/Hero"
import Navbar from "./components/Navbar/Navbar"
import Products from "./components/Products/Products"
import TopProducts from "./components/Products/TopProducts"
import Subscribe from "./components/Subscribe/Subscribe"
import Testimonial from "./components/Testimonial/Testimonial"

function App() {
  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
      <Navbar /> 
      <Hero />
      <Products />
      <TopProducts />
      <Banner />
      <Subscribe />
      <Testimonial />
      <Footer />
    </div>
  )
}

export default App