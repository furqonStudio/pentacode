import AboutUs from './components/sections/AboutUs'
import Categories from './components/sections/Categories'
import Contact from './components/sections/Contact'
import Footer from './components/sections/Footer'
import LeftColumn from './components/sections/LeftColumn'
import Navbar from './components/sections/Navbar'
import Reviews from './components/sections/Reviews'
import Service from './components/sections/Service'
import WhyChooseUs from './components/Sections/WhyChooseUs'

function App() {
  return (
    <div className="border-2 border-black">
      <Navbar />
      <LeftColumn />
      <Categories />
      <AboutUs />
      <WhyChooseUs />
      <Contact />
      <Service />
      <Reviews />
      <Footer />
    </div>
  )
}

export default App
