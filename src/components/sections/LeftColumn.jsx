import imageHero from '../../assets/images/image-hero.png'
import { motion } from 'motion/react'

const animationProps = {
  initial: { opacity: 0, y: 100, rotate: 12 },
  animate: { opacity: 1, y: 0, rotate: 0 },
  transition: { duration: 1 },
}

const imgAnimationProps = {
  initial: { clipPath: 'inset(100% 0 0 0)' },
  animate: { clipPath: 'inset(0% 0 0 0)' },
  transition: { duration: 1, ease: 'easeInOut' },
}

const borderAnimationProps = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 2, ease: 'easeInOut' },
}

const LeftColumn = () => {
  return (
    <div className="px-4 py-10 md:p-20 lg:border-b lg:border-black lg:h-[720px] lg:sticky lg:top-[80px]">
      <div className="flex flex-col gap-4 pb-6">
        <h1 className="h1 overflow-hidden">
          <motion.div {...animationProps}>Kyiv</motion.div>
          <div className="flex">
            <motion.span {...animationProps}>Luxe</motion.span>
            <motion.span {...animationProps}>Bouquets®</motion.span>
          </div>
        </h1>
        <div className="overflow-hidden">
          <motion.p
            className="italic text-sm md:text-lg font-normal"
            {...animationProps}
          >
            Discover Uniquely Crafted Bouquets and Gifts for Any Occasion:
            Spread Joy with Our Online Flower Delivery Service
          </motion.p>
        </div>
      </div>
      <motion.div
        className="flex border-t border-black pt-4"
        {...borderAnimationProps}
      >
        <div className="pr-4 border-r border-black">
          <motion.img
            src={imageHero}
            alt="Hero Image"
            className="h-[180px] md:h-[256px] md:w-[280px]"
            {...imgAnimationProps}
          />
        </div>
        <div className="flex flex-1 pl-4 overflow-hidden">
          <motion.p
            className="text-[11px] md:text-sm font-normal self-end"
            {...animationProps}
          >
            Experience the joy of giving with our modern floral studio. Order
            online and send fresh flowers, plants and gifts today.
          </motion.p>
        </div>
      </motion.div>
    </div>
  )
}

export default LeftColumn
