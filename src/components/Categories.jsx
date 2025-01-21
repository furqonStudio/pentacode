import freshFlowers from '../assets/images/fresh-flowers.png'
import driedFlowers from '../assets/images/dried-flowers.png'
import livePlants from '../assets/images/live-plants.png'
import aromaCandels from '../assets/images/aroma-candels.png'
import fresheners from '../assets/images/fresheners.png'
import arrow from '../assets/icons/arrow.svg'

const Categories = () => {
  const categories = [
    {
      name: 'Fresh Flowers',
      image: freshFlowers,
    },
    {
      name: 'Dried Flowers',
      image: driedFlowers,
    },
    {
      name: 'Live Plants',
      image: livePlants,
    },
    {
      name: 'Aroma Candels',
      image: aromaCandels,
    },
    {
      name: 'Fresheners',
      image: fresheners,
    },
  ]

  return (
    <div className="grid border-t border-black">
      {categories.map((category, index) => (
        <div
          key={index}
          className={`flex ${
            index % 2 === 0 ? 'flex-row-reverse' : 'flex-row'
          } items-center `}
        >
          <div className="flex flex-col relative justify-center items-center w-1/2 h-full  border border-black">
            <h3 className="font-gilroy text-sm-heading-3 sm:text-heading-3 font-medium text-center">
              {category.name}
            </h3>
            <div
              className={`flex gap-1 absolute bottom-4 ${
                index % 2 === 0 ? 'flex-row-reverse' : 'flex-row'
              }`}
            >
              <p className="font-gilroy text-sm font-semibold">Shop Now</p>
              <img
                src={arrow}
                alt="arrow"
                className={`transform ${index % 2 === 0 ? 'rotate-180' : ''}`}
              />
            </div>
          </div>
          <div className="w-1/2  border border-black">
            <img src={category.image} alt={category.name} />
          </div>
        </div>
      ))}
    </div>
  )
}

export default Categories
