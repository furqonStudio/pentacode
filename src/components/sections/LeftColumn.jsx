import image1 from '../../assets/images/image1.png'

const LeftColumn = () => {
  return (
    <div className="px-4 py-10">
      <div className="flex flex-col gap-4 pb-6">
        <h1 className="h1">
          Kyiv
          <br /> LuxeBouquets®
        </h1>
        <p className="italic text-sm font-normal">
          Discover Uniquely Crafted Bouquets and Gifts for Any Occasion: Spread
          Joy with Our Online Flower Delivery Service
        </p>
      </div>
      <div className="flex border-t border-black pt-4">
        <div className=" pr-4 border-r border-black">
          <img src={image1} alt="image1" className="h-[180px]" />
        </div>
        <div className="flex flex-1 pl-4">
          <p className="text-[11px] font-normal self-end">
            Experience the joy of giving with our modern floral studio. Order
            online and send fresh flowers, plants and gifts today.
          </p>
        </div>
      </div>
    </div>
  )
}

export default LeftColumn
