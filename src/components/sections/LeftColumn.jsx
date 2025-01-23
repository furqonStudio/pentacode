import { useRef } from 'react'
import imageHero from '../../assets/images/image-hero.png'
import { motion, useInView } from 'motion/react'

const textAnimationProps = {
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
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, threshold: 0.2 })

  return (
    <div
      className="px-4 py-10 md:p-20 lg:border-b lg:border-black lg:h-[720px] lg:sticky mt-12 lg:mt-0 lg:top-[80px]"
      ref={ref}
    >
      <div className="flex flex-col gap-4 pb-6">
        <h1 className="h1 overflow-hidden">
          <motion.div
            initial={textAnimationProps.initial}
            animate={
              isInView ? textAnimationProps.animate : textAnimationProps.initial
            }
            transition={textAnimationProps.transition}
          >
            Kyiv
          </motion.div>
          <div className="flex">
            <motion.span
              initial={textAnimationProps.initial}
              animate={
                isInView
                  ? textAnimationProps.animate
                  : textAnimationProps.initial
              }
              transition={textAnimationProps.transition}
            >
              Luxe
            </motion.span>
            <motion.span
              initial={textAnimationProps.initial}
              animate={
                isInView
                  ? textAnimationProps.animate
                  : textAnimationProps.initial
              }
              transition={textAnimationProps.transition}
            >
              Bouquets®
            </motion.span>
          </div>
        </h1>
        <div className="overflow-hidden">
          <motion.p
            className="italic text-sm md:text-lg font-normal"
            initial={textAnimationProps.initial}
            animate={
              isInView ? textAnimationProps.animate : textAnimationProps.initial
            }
            transition={textAnimationProps.transition}
          >
            Discover Uniquely Crafted Bouquets and Gifts for Any Occasion:
            Spread Joy with Our Online Flower Delivery Service
          </motion.p>
        </div>
      </div>
      <motion.div
        className="flex border-t border-black pt-4"
        initial={borderAnimationProps.initial}
        animate={
          isInView ? borderAnimationProps.animate : borderAnimationProps.initial
        }
        transition={borderAnimationProps.transition}
      >
        <div className="pr-4 border-r border-black">
          <motion.img
            src={imageHero}
            alt="Hero Image"
            className="h-[180px] md:h-[256px] md:w-[280px]"
            initial={imgAnimationProps.initial}
            animate={
              isInView ? imgAnimationProps.animate : imgAnimationProps.initial
            }
            transition={imgAnimationProps.transition}
          />
        </div>
        <div className="flex flex-1 pl-4 overflow-hidden">
          <motion.p
            className="text-[11px] md:text-sm font-normal self-end"
            initial={textAnimationProps.initial}
            animate={
              isInView ? textAnimationProps.animate : textAnimationProps.initial
            }
            transition={textAnimationProps.transition}
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
