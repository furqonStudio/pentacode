import service from '../../assets/images/service.png'
import service2 from '../../assets/images/service-2.jpg'
import Button from '../Button'

const Service = () => {
  return (
    <div>
      <h2 className="h2 px-4 py-10 md:p-20 md:text-center lg:border-b">
        Our Service
      </h2>

      <div
        className="flex flex-col lg:grid lg:grid-cols-2 lg:h-[720px]"
        id="service-1"
      >
        <img
          src={service}
          alt="Service"
          className="border-b border-black md:h-[500px] lg:h-[720px] w-full object-cover object-top"
        />
        <div
          className="flex flex-col gap-16 px-4 py-10 border-b border-black md:p-20 lg:m-auto lg:border-b-0"
          id="left-column"
        >
          <div id="text-content" className="flex flex-col gap-6">
            <p className="t-overline text-center">SERVICE</p>
            <div className="flex flex-col gap-4 items-center ">
              <h2 className="h2 font-semibold text-center">
                Flower Subcriptions
              </h2>
              <p className="body text-center">
                Experience the convenience and savings of regular flower
                deliveries with our flexible subscription service - up to 30%
                more profitable than one-time purchases.
              </p>
            </div>
          </div>
          <div className="md:w-fit md:m-auto">
            <Button label={'SUBSCRIBE NOW'} variant="light" />
          </div>
        </div>
      </div>

      <div
        className="relative bg-fixed h-[420px] md:h-[500px] lg:h-[720px]"
        style={{
          backgroundImage: `url(${service2})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white flex flex-col px-4 py-20 md:p-20 gap-16">
            <div id="text-content" className="flex flex-col gap-6">
              <p className="t-overline">SERVICE</p>
              <div className="flex flex-col gap-4">
                <h2 className="h2 font-semibold">Wedding & Event Decor</h2>
                <p className="body">
                  Let our team of expert florists and designers create stunning,
                  on-trend floral décor for your special day. Trust us to bring
                  your vision to life.
                </p>
              </div>
            </div>
            <div className="md:w-fit md:m-auto mt-auto">
              <Button label={'INQUIRE NOW'} variant="transparent" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Service
