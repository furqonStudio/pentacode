import AboutUs from './components/AboutUs'
import Categories from './components/Categories'
import LeftColumn from './components/LeftColumn'
import Navbar from './components/Navbar'
import WhyChooseUs from './components/WhyChooseUs'

function App() {
  return (
    <div className="border-2 border-black">
      <Navbar />
      <LeftColumn />
      <Categories />
      <AboutUs />
      <WhyChooseUs />
    </div>
  )
}

export default App
