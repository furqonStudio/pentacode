import hamburger from '../../assets/icons/hamburger.svg'
import shopbag from '../../assets/icons/shopbag.svg'

const Navbar = () => {
  return (
    <div className="fixed top-0 z-10 w-full bg-white flex justify-between border-b border-black lg:h-[83px]">
      <div className="cursor-pointer w-12 h-12 flex items-center justify-center border-r border-black lg:hidden">
        <img src={hamburger} alt="Menu" />
      </div>
      <div className="cursor-pointer w-12 h-12 flex items-center justify-center border-l border-black lg:hidden">
        <img src={shopbag} alt="Shop" />
      </div>
      <div className="hidden lg:flex">
        <div className="py-8 px-6 border-r border-black w-[180px] text-center">
          <p className="link">Shop</p>
        </div>
        <div className="py-8 px-6 border-r border-black w-[180px] text-center">
          <p className="link">Contact</p>
        </div>
      </div>
      <div className="hidden lg:flex">
        <div className="py-8 px-6 border-l border-black w-[180px] text-center">
          <p className="link">Sign In</p>
        </div>
        <div className="py-8 px-6 border-l border-black w-[180px] text-center">
          <p className="link">Cart</p>
        </div>
      </div>
    </div>
  )
}

export default Navbar
