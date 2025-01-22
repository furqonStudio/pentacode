import Button from '../Button'
import social from '../../assets/images/social.png'

const Footer = () => {
  const shopLinks = [
    'All Products',
    'Fresh Flowers',
    'Dried Flowers',
    'Live Plants',
    'Designer Vases',
    'Aroma Candles',
    'Freshener Diffuser',
  ]
  const serviceLinks = ['Flower Subcription', 'Wedding & Event Decor']
  const aboutLinks = ['Our story', 'Blog']
  const otherLinks = [
    'Shipping & returns',
    'Terms & conditions',
    'Privacy policy',
  ]

  return (
    <div>
      <div className="flex flex-col gap-4 px-4 py-10 border-t border-black">
        <p className="text-sm-body sm:text-body">
          Remember to offer beautiful flowers from Kyiv LuxeBouquets Valentines
          Day, Mothers Day, Christmas...
          <br />
          Reminds you 7 days before. No spam or sharing your address
        </p>
        <div className="flex flex-col gap-4">
          <p className="text-sm-caption sm:text-caption font-medium p-4 border border-gray-300 text-gray-400">
            Your Email
          </p>
          <Button label={'REMIND'} />
        </div>
      </div>

      <div className="flex flex-col gap-4 px-4 py-10 border-t border-black">
        <h5 className="text-sm-heading-5 sm:text-heading-5 font-medium">
          Contact Us
        </h5>
        <div className="flex flex-col gap-2">
          <p className="text-sm-caption sm:text-caption text-gray-400">
            Address
          </p>
          <p className="text-sm-link sm:text-link">
            15/4 Khreshchatyk Street, Kyiv
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-sm-caption sm:text-caption text-gray-400">Phone</p>
          <p className="text-sm-link sm:text-link">+380980099777</p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-sm-caption sm:text-caption text-gray-400">
            General Enquiry
          </p>
          <p className="text-sm-link sm:text-link">
            Kiev.Florist.Studio@gmail.com
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <h5 className="text-sm-heading-5 sm:text-heading-5 font-medium">
            Follow Us
          </h5>
          <img src={social} alt="Social" className="w-[248px]" />
        </div>
      </div>

      <div className="flex flex-col gap-4 px-4 py-10 border-t border-black">
        <h5 className="text-sm-heading-5 sm:text-heading-5 font-medium">
          Shop
        </h5>
        <div className="flex flex-col gap-2">
          {shopLinks.map((link, index) => (
            <p className="text-sm-link sm:text-link font-medium" key={index}>
              {link}
            </p>
          ))}
        </div>

        <h5 className="text-sm-heading-5 sm:text-heading-5 font-medium">
          Service
        </h5>
        <div className="flex flex-col gap-2">
          {serviceLinks.map((link, index) => (
            <p className="text-sm-link sm:text-link font-medium" key={index}>
              {link}
            </p>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-4 px-4 py-10 border-t border-black">
        <h5 className="text-sm-heading-5 sm:text-heading-5 font-medium">
          Service
        </h5>
        <div className="flex flex-col gap-2">
          {aboutLinks.map((link, index) => (
            <p className="text-sm-link sm:text-link font-medium" key={index}>
              {link}
            </p>
          ))}
        </div>
        <div className="flex flex-col gap-2">
          {otherLinks.map((link, index) => (
            <p className="text-sm-link sm:text-link font-medium" key={index}>
              {link}
            </p>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Footer
