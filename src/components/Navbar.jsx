import hamburger from '../assets/icons/hamburger.svg'
import shopbag from '../assets/icons/shopbag.svg'

const Navbar = () => {
  return (
    <div className="flex justify-between border-b-2 border-black">
      <div className="cursor-pointer border-r-2 border-black">
        <img src={hamburger} alt="Menu" className="w-5 h-5 m-4" />
      </div>
      <div className="cursor-pointer border-l-2 border-black">
        <img src={shopbag} alt="Shop" className="w-5 h-5 m-4" />
      </div>
    </div>
  )
}

export default Navbar
