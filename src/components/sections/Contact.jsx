import contact from '../../assets/images/contact.png'
import social from '../../assets/images/social.png'
import call from '../../assets/icons/call.svg'
import map from '../../assets/icons/map.svg'
import Button from '../Button'

import { motion, useInView } from 'motion/react'
import { useRef } from 'react'

const imageAnimationProps = {
  initial: { scale: 1.2 },
  animate: { scale: 1 },
  transition: { duration: 1, ease: 'easeInOut' },
}

const Contact = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <div className="lg:grid lg:grid-cols-2 flex flex-col-reverse">
      <div
        className="lg:border-r flex flex-col justify-between"
        id="left-column"
      >
        <div
          className="flex flex-col gap-6 px-4 py-10 border-t border-black md:p-20"
          id="top-block"
        >
          <h2 className="h2">To Contact Us</h2>
          <div className="flex flex-col gap-4">
            <p className="subtitle font-medium">We will call you back</p>
            <div className="flex flex-col gap-4 md:flex-row ">
              <p className="caption p-4 border border-gray text-gray md:w-1/2">
                +380 XX XXX XX XX
              </p>
              <div className="md:w-1/2">
                <Button label={'BOOK A CALL'} />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row">
          <div className="border-t border-black md:flex-1 md:border-r md:border-b ">
            <h3 className="h3 p-4 md:text-center">Phone</h3>
            <div className="flex flex-col px-4 gap-4 py-10 border-t border-black md:justify-center md:items-center md:py-20">
              <div className="flex gap-1">
                <img src={call} alt="Call" />
                <p className="text-base font-semibold">+380980099777</p>
              </div>
              <div className="flex gap-1">
                <img src={call} alt="Call" />
                <p className="text-base font-semibold">+380980099111</p>
              </div>
            </div>
          </div>

          <div className="border-y border-black md:flex-1">
            <h3 className="h3 p-4 md:text-center">Address</h3>
            <div className="flex flex-col px-4 gap-4 py-10 border-t border-black md:justify-center md:items-center md:py-20">
              <p className="t-overline">Opening hours: 8 to 11 p.m.</p>
              <div className="flex gap-1">
                <img src={map} alt="Call" />
                <p className="text-base font-semibold">
                  15/4 Khreshchatyk Street, Kyiv
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="right-column" className="w-full">
        <div className=" overflow-hidden" ref={ref}>
          <motion.img
            src={contact}
            alt="Contact"
            className="h-[400px] md:h-[580px] w-full object-cover"
            initial={imageAnimationProps.initial}
            animate={
              isInView
                ? imageAnimationProps.animate
                : imageAnimationProps.initial
            }
            transition={imageAnimationProps.transition}
          />
        </div>
        <div className="flex flex-col md:flex-row md:justify-between md:items-center lg:border-b">
          <div className="p-4 md:border-r border-black flex md:justify-center md:items-center md:w-1/2">
            <h3 className="h3">Follow Us</h3>
          </div>
          <div className="px-4 pb-4 flex md:pb-0 md:justify-center md:items-center md:m-auto">
            <img src={social} alt="Social" className="w-fit" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
