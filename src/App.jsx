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
    </div>
  )
}

export default App