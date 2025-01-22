import contact from '../../assets/images/contact.png'
import social from '../../assets/images/social.png'
import call from '../../assets/icons/call.svg'
import map from '../../assets/icons/map.svg'
import Button from '../Button'

const Contact = () => {
  return (
    <div>
      <div id="right-column" className="h-[500px]">
        <img
          src={contact}
          alt="Contact"
          className="h-[400px] w-full object-cover"
        />
        <div className="p-4">
          <h3 className="h3">Follow Us</h3>
        </div>
        <div className="px-4">
          <img src={social} alt="Social" className="w-fit" />
        </div>
      </div>

      <div className="" id="left-column">
        <div
          className="flex flex-col gap-6 px-4 py-10 border-t border-black"
          id="top-block"
        >
          <h2 className="h2">To Contact Us</h2>
          <div className="flex flex-col gap-4">
            <p className="subtitle font-medium">We will call you back</p>
            <div className="flex flex-col gap-4">
              <p className="caption p-4 border border-gray text-gray">
                +380 XX XXX XX XX
              </p>
              <Button label={'BOOK A CALL'} />
            </div>
          </div>
        </div>

        <div className=" border-t border-black" id="bottom-block">
          <h3 className="h3 p-4">Phone</h3>
          <div className="flex flex-col px-4 gap-4 py-10 border-t border-black">
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

        <div className="border-y border-black">
          <h3 className="h3 p-4">Address</h3>
          <div className="flex flex-col px-4 gap-4 py-10 border-t border-black">
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
  )
}

export default Contact
