import { motion, useInView } from 'motion/react'
import { useRef } from 'react'

const revealAnimationProps = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: 'easeOut' },
}

const Button = ({ label, variant = 'dark' }) => {
  const isDark = variant === 'dark'
  const isTransparent = variant === 'transparent'

  const textColor = isTransparent
    ? 'text-white'
    : isDark
    ? 'text-white'
    : 'text-black'
  const bgColor = isTransparent
    ? 'bg-transparent'
    : isDark
    ? 'bg-black'
    : 'bg-white'
  const borderColor = isTransparent
    ? 'border-white'
    : isDark
    ? 'border-white'
    : 'border-black'

  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <motion.button
      ref={ref}
      className={`text-center text-sm-button sm:text-button font-medium py-4 w-full border ${textColor} ${bgColor} ${borderColor} md:px-4`}
      initial={revealAnimationProps.initial}
      animate={
        isInView ? revealAnimationProps.animate : revealAnimationProps.initial
      }
      transition={revealAnimationProps.transition}
    >
      {label}
    </motion.button>
  )
}

export default Button
