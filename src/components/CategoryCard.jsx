import { useRef } from 'react'
import arrow from '../assets/icons/arrow.svg'
import { motion, useInView } from 'motion/react'

const imageAnimationProps = {
  initial: { scale: 1.2 },
  animate: { scale: 1 },
  transition: { duration: 1, ease: 'easeInOut' },
}

const hoverAnimationProps = {
  scale: 1.1,
  transition: { duration: 0.3, ease: 'easeInOut' },
}

const CategoryCard = ({ category, isReversed }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <div
      className={`flex ${
        isReversed ? 'flex-row-reverse' : 'flex-row'
      } items-center `}
    >
      <div className="flex flex-col p-3 text-center relative justify-center items-center w-1/2 h-full border-t border-black lg:border-l lg:border-b">
        <h3 className="h3">{category.name}</h3>
        <div
          className={`flex gap-1 absolute bottom-4 ${
            isReversed ? 'flex-row-reverse' : 'flex-row'
          } group`}
        >
          <p className="text-sm md:text-base font-semibold transition-all group-hover:underline group-hover:scale-110">
            Shop Now
          </p>
          <img
            src={arrow}
            alt="arrow"
            className={`transform transition-all ${
              isReversed
                ? 'rotate-180 group-hover:-translate-x-6'
                : 'group-hover:translate-x-6'
            }`}
          />
        </div>
      </div>
      <div
        className="w-1/2 border-t border-r border-black overflow-hidden"
        ref={ref}
      >
        <motion.img
          src={category.image}
          alt={category.name}
          className="w-full"
          initial={imageAnimationProps.initial}
          animate={
            isInView ? imageAnimationProps.animate : imageAnimationProps.initial
          }
          transition={imageAnimationProps.transition}
          whileHover={hoverAnimationProps}
        />
      </div>
    </div>
  )
}

export default CategoryCard
