import service from '../assets/images/service.png'
import service2 from '../assets/images/service-2.jpg'
import Button from './Button'

const Service = () => {
  return (
    <div>
      <h2 className="h2 px-4 py-10">Our Service</h2>

      <div id="service-1">
        <img src={service} alt="" />
        <div className="px-4 py-10" id="left-column">
          <div id="text-content" className="flex flex-col gap-6 mb-16">
            <p className="text-sm-overline sm:text-overline font-medium text-center">
              SERVICE
            </p>
            <div className="flex flex-col gap-4 items-center ">
              <h2 className="h2 font-semibold">Flower Subcriptions</h2>
              <p className="text-sm-body sm:text-body font-normal text-center">
                Experience the convenience and savings of regular flower
                deliveries with our flexible subscription service - up to 30%
                more profitable than one-time purchases.
              </p>
            </div>
          </div>
          <Button label={'SUBSCRIBE NOW'} variant="light" />
        </div>
      </div>

      <div
        id="service-2"
        className="relative bg-cover bg-center text-white h-[416px] flex items-center justify-center"
        style={{
          backgroundImage: `url(${service2})`,
        }}
      >
        <div className="px-4 py-10 bg-black/50 h-full w-full max-w-lg text-center content-center">
          <div id="text-content" className="flex flex-col gap-6 mb-16">
            <p className="text-sm-overline sm:text-overline font-medium">
              SERVICE
            </p>
            <div className="flex flex-col gap-4">
              <h2 className="h2 font-semibold">Wedding & Event Decor</h2>
              <p className="text-sm-body sm:text-body font-normal">
                Let our team of expert florists and designers create stunning,
                on-trend floral décor for your special day. Trust us to bring
                your vision to life.
              </p>
            </div>
          </div>
          <Button label={'INQUIRE NOW'} variant="light" />
        </div>
      </div>
    </div>
  )
}

export default Service
