import image1 from '../assets/images/image1.png'

const LeftColumn = () => {
  return (
    <div className="px-4 py-10">
      <h1 className="font-gilroy text-sm-heading-1 sm:text-heading-1 font-semibold">
        Kyiv
        <br /> LuxeBouquets®
      </h1>
      <p className="font-gilroy italic mt-4 mb-6 text-sm">
        Discover Uniquely Crafted Bouquets and Gifts for Any Occasion: Spread
        Joy with Our Online Flower Delivery Service
      </p>
      <div className="border border-black" />
      <div className="flex mt-4">
        <img src={image1} alt="image1" className="h-52 object-cover" />
        <div className="mx-4 h-52 border-l border-black" />
        <p className="font-gilroy text-xs self-end">
          Experience the joy of giving with our modern floral studio. Order
          online and send fresh flowers, plants and gifts today.
        </p>
      </div>
    </div>
  )
}

export default LeftColumn
