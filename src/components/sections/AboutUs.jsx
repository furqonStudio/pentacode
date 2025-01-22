import Button from '../Button'

const AboutUs = () => {
  return (
    <div className="">
      <div className="p-4 py-10 border-y border-black">
        <h2 className="h2">About Us</h2>
      </div>
      <div className="flex flex-col p-4 py-10 gap-16 border-b border-black">
        <div className="flex flex-col gap-6">
          <p className="t-overline">OUR STORY</p>
          <div className="flex flex-col gap-4">
            <h3 className="h3">Kyiv LuxeBouquets</h3>
            <p className="body">
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
            </p>
          </div>
        </div>
        <Button label={'LEARN MORE'} variant="light" />
      </div>
    </div>
  )
}

export default AboutUs
