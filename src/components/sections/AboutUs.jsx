import { motion, useInView } from 'motion/react'
import { useRef } from 'react'
import Button from '../Button'

const revealAnimationProps = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: 'easeOut' },
}

const AboutUs = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <div className="lg:grid lg:grid-cols-2" ref={ref}>
      <div className="p-4 py-10 border-y border-black md:p-20 lg:sticky lg:top-[80px] lg:h-fit lg:border-b-0">
        <motion.h2
          className="h2"
          initial={revealAnimationProps.initial}
          animate={
            isInView
              ? revealAnimationProps.animate
              : revealAnimationProps.initial
          }
          transition={revealAnimationProps.transition}
        >
          About Us
        </motion.h2>
      </div>
      <div className="flex flex-col p-4 py-10 gap-16 border-b border-black md:p-20 lg:border-l">
        <div className="flex flex-col gap-6">
          <motion.p
            initial={revealAnimationProps.initial}
            animate={
              isInView
                ? revealAnimationProps.animate
                : revealAnimationProps.initial
            }
            transition={revealAnimationProps.transition}
            className="t-overline"
          >
            OUR STORY
          </motion.p>
          <div className="flex flex-col gap-4">
            <motion.h3
              initial={revealAnimationProps.initial}
              animate={
                isInView
                  ? revealAnimationProps.animate
                  : revealAnimationProps.initial
              }
              transition={revealAnimationProps.transition}
              className="h3"
            >
              Kyiv LuxeBouquets
            </motion.h3>
            <motion.p
              initial={revealAnimationProps.initial}
              animate={
                isInView
                  ? revealAnimationProps.animate
                  : revealAnimationProps.initial
              }
              transition={revealAnimationProps.transition}
              className="body"
            >
              We are a modern local floral studio, which specializes in the
              design and delivery of unique bouquets. We have the best florists
              who carefully select each look, our studio cooperates directly
              with farms for growing different flowers, so we always have fresh
              flowers, which are collected by our florists in exquisite
              bouquets. We have a collection of fresh bouquets, collections of
              dried bouquets, house plants, as well as fragrant candles from
              luxury brands to create the perfect atmosphere. Make
              someone&apos;s day amazing by sending flowers, plants and gifts
              the same or next day. Ordering flowers online has never been
              easier.
            </motion.p>
          </div>
        </div>
        <div className="md:w-fit">
          <Button label={'LEARN MORE'} variant="light" />
        </div>
      </div>
    </div>
  )
}

export default AboutUs
