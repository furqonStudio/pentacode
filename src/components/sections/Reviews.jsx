import google from '../../assets/images/google.png'
import Button from '../Button'

const Reviews = () => {
  return (
    <div className="flex flex-col gap-16 px-4 py-10 md:p-20">
      <div id="text-content" className="flex flex-col gap-4">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2 items-center">
            <img src={google} alt="Google" className="w-20" />
            <p className="text-sm-overline sm:text-overline font-medium">
              REVIEWS
            </p>
          </div>
          <h2 className="h2 text-center">Our Clients Say</h2>
        </div>
        <div className="flex flex-col gap-8 items-center justify-center text-center">
          <div className="flex flex-col gap-4">
            <p className="text-[22px] italic font-normal">
              “Ordered flowers online and they were the best bouquet! Impressed
              everyone around. Highly recommend this flower shop!”
            </p>
            <p className="text-sm-heading-6 sm:text-heading-6">
              – Ronald Richards
            </p>
          </div>
          <div className="flex gap-1">
            <div className="w-1 h-1 bg-gray rounded-full" />
            <div className="w-1 h-1 bg-light-gray rounded-full" />
            <div className="w-1 h-1 bg-light-gray rounded-full" />
            <div className="w-1 h-1 bg-light-gray rounded-full" />
          </div>
        </div>
      </div>
      <div className="md:w-fit md:m-auto">
        <Button label={'READ REVIEWS'} variant="light" />
      </div>
    </div>
  )
}

export default Reviews
