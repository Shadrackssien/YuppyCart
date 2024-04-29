import Banner from "./components/Banner/Banner"
import Hero from "./components/Hero/Hero"
import Navbar from "./components/Navbar/Navbar"
import Products from "./components/Products/Products"
import TopProducts from "./components/Products/TopProducts"

function App() {
  return (
    <div>
      <Navbar /> 
      <Hero />
      <Products />
      <TopProducts />
      <Banner />
    </div>
  )
}

export default App