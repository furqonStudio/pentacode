import Button from '../Button'

const AboutUs = () => {
  return (
    <div className="">
      <div className="p-4 py-10 border-t border-b-2 border-black">
        <h2 className="text-sm-heading-2 sm:text-heading-2 font-semibold">
          About Us
        </h2>
      </div>
      <div className="p-4 my-10">
        <div className="mb-16">
          <p className="text-sm-overline sm:overline font-medium mb-6">
            OUR STORY
          </p>
          <h3 className="text-sm-heading-3 sm:text-heading-3 font-medium mb-4">
            Kyiv LuxeBouquets
          </h3>
          <p className="text-sm-body sm:text-body font-normal">
            We are a modern local floral studio, which specializes in the design
            and delivery of unique bouquets. We have the best florists who
            carefully select each look, our studio cooperates directly with
            farms for growing different flowers, so we always have fresh
            flowers, which are collected by our florists in exquisite bouquets.
            We have a collection of fresh bouquets, collections of dried
            bouquets, house plants, as well as fragrant candles from luxury
            brands to create the perfect atmosphere. Make someone&apos;s day
            amazing by sending flowers, plants and gifts the same or next day.
            Ordering flowers online has never been easier.
          </p>
        </div>
        <Button />
      </div>
    </div>
  )
}

export default AboutUs
