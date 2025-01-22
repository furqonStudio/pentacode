import arrow from '../assets/icons/arrow.svg'
import { motion } from 'motion/react'

const imageAnimationProps = {
  initial: { scale: 1.2 },
  animate: { scale: 1 },
  transition: { duration: 1, ease: 'easeInOut' },
}

const CategoryCard = ({ category, isReversed }) => {
  return (
    <div
      className={`flex ${
        isReversed ? 'flex-row-reverse' : 'flex-row'
      } items-center`}
    >
      <div className="flex flex-col p-3 text-center relative justify-center items-center w-1/2 h-full border-t border-black lg:border-l lg:border-b">
        <h3 className="h3">{category.name}</h3>
        <div
          className={`flex gap-1  absolute bottom-4 ${
            isReversed ? 'flex-row-reverse' : 'flex-row'
          }`}
        >
          <p className="text-sm md:text-base font-semibold">Shop Now</p>
          <img
            src={arrow}
            alt="arrow"
            className={`transform ${isReversed ? 'rotate-180' : ''}`}
          />
        </div>
      </div>
      <div className="w-1/2 border-t border-r border-black overflow-hidden">
        <motion.img
          src={category.image}
          alt={category.name}
          className="w-full"
          {...imageAnimationProps}
        />
      </div>
    </div>
  )
}

export default CategoryCard
