import AboutUs from './components/AboutUs'
import Categories from './components/Categories'
import LeftColumn from './components/LeftColumn'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="border-2 border-black">
      <Navbar />
      <LeftColumn />
      <Categories />
      <AboutUs />
    </div>
  )
}

export default App
