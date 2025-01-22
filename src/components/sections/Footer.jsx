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
    <div className="md:grid md:grid-cols-2 lg:grid-cols-4">
      <div className="flex flex-col gap-4 px-4 py-10 border-t border-black md:p-10 md:border-r">
        <p className="text-sm-body sm:text-body">
          Remember to offer beautiful flowers from Kyiv LuxeBouquets Valentines
          Day, Mothers Day, Christmas...
          <br />
          Reminds you 7 days before. No spam or sharing your address
        </p>
        <div className="flex flex-col gap-4">
          <p className="caption p-4 border border-light-gray text-gray">
            Your Email
          </p>
          <Button label={'REMIND'} />
        </div>
      </div>

      <div className="flex flex-col gap-4 px-4 py-10 border-t border-black md:p-10 lg:border-r">
        <h5 className="h5 text-gray">Contact Us</h5>
        <div className="flex flex-col gap-2">
          <p className="caption text-gray">Address</p>
          <p className="link">15/4 Khreshchatyk Street, Kyiv</p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="caption text-gray">Phone</p>
          <p className="link">+380980099777</p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="caption text-gray">General Enquiry</p>
          <p className="link">Kiev.Florist.Studio@gmail.com</p>
        </div>
        <div className="flex flex-col gap-4">
          <h5 className="h5 text-gray">Follow Us</h5>
          <img src={social} alt="Social" className="w-[248px]" />
        </div>
      </div>

      <div className="flex flex-col gap-4 px-4 py-10 border-t border-black md:p-10 md:border-r">
        <h5 className="h5 text-gray">Shop</h5>
        <div className="flex flex-col gap-2">
          {shopLinks.map((link, index) => (
            <p className="link" key={index}>
              {link}
            </p>
          ))}
        </div>

        <h5 className="h5 text-gray">Service</h5>
        <div className="flex flex-col gap-2">
          {serviceLinks.map((link, index) => (
            <p className="link" key={index}>
              {link}
            </p>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-4 px-4 py-10 border-t border-black md:p-10">
        <h5 className="h5 text-gray">About Us</h5>
        <div className="flex flex-col gap-2">
          {aboutLinks.map((link, index) => (
            <p className="link" key={index}>
              {link}
            </p>
          ))}
        </div>
        <div className="flex flex-col gap-2">
          {otherLinks.map((link, index) => (
            <p className="link" key={index}>
              {link}
            </p>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Footer
