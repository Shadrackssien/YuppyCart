import Banner from "./components/Banner/Banner"
import Hero from "./components/Hero/Hero"
import Navbar from "./components/Navbar/Navbar"
import Products from "./components/Products/Products"
import TopProducts from "./components/Products/TopProducts"
import Subscribe from "./components/Subscribe/Subscribe"
import Testimonial from "./components/Testimonial/Testimonial"

function App() {
  return (
    <div>
      <Navbar /> 
      <Hero />
      <Products />
      <TopProducts />
      <Banner />
      <Subscribe />
      <Testimonial />
    </div>
  )
}

export default App