import freshFlowers from '../../assets/images/fresh-flowers.png'
import driedFlowers from '../../assets/images/dried-flowers.png'
import livePlants from '../../assets/images/live-plants.png'
import aromaCandels from '../../assets/images/aroma-candels.png'
import fresheners from '../../assets/images/fresheners.png'
import CategoryCard from '../CategoryCard'

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
    <div className="grid pt-[83px]">
      {categories.map((category, index) => (
        <CategoryCard
          key={index}
          category={category}
          isReversed={index % 2 !== 0}
        />
      ))}
    </div>
  )
}

export default Categories
