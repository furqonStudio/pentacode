import AboutUs from './components/AboutUs'
import Categories from './components/Categories'
import Contact from './components/Contact'
import Footer from './components/Footer'
import LeftColumn from './components/LeftColumn'
import Navbar from './components/Navbar'
import Reviews from './components/Reviews'
import Service from './components/Service'
import WhyChooseUs from './components/WhyChooseUs'

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
