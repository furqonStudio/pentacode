import hamburger from '../../assets/icons/hamburger.svg'
import shopbag from '../../assets/icons/shopbag.svg'

const Navbar = () => {
  return (
    <div className="flex justify-between border-b border-black">
      <div className="cursor-pointer w-12 h-12 flex items-center justify-center border-r border-black">
        <img src={hamburger} alt="Menu" />
      </div>
      <div className="cursor-pointer w-12 h-12 flex items-center justify-center border-l border-black">
        <img src={shopbag} alt="Shop" />
      </div>
    </div>
  )
}

export default Navbar
