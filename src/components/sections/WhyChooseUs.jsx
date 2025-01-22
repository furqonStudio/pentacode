const WhyChooseUs = () => {
  const contents = [
    {
      title: 'Stylish bouquets by florists',
      description:
        'At our floral studio, our professional florists craft the most elegant and stylish bouquets using only the freshest and highest quality materials available. We stay up-to-date with the latest floral design trends and offer unique arrangements that are sure to impress. Let us brighten up your day with our stunning bouquets and same-day delivery service.',
    },
    {
      title: 'On-time delivery',
      description:
        'Never miss a moment with our on-time flower delivery service. Our couriers will deliver your bouquet personally, without boxes, to ensure it arrives in perfect condition. Trust us to deliver your thoughtful gift reliably.',
    },
    {
      title: 'Safe payment',
      description:
        'You can feel secure when placing an order with us, as we use industry-standard security measures to protect your payment information. Your transaction will be safe and hassle-free, so you can shop with confidence.',
    },
    {
      title: 'Subscription by your needs',
      description:
        'With our subscription service tailored to your specific needs, you can enjoy the convenience of having beautiful bouquets delivered straight to your door at regular intervals. Our flexible service is perfect for busy individuals or those who want to ensure they always have fresh flowers on hand. Youll save time and money with this hassle-free solution to your floral needs.',
    },
  ]

  return (
    <div className="lg:grid lg:grid-cols-2">
      <div className="p-4 py-10 border-b border-black md:p-20 lg:sticky lg:top-[80px] lg:border-t lg:h-fit lg:border-b-0">
        <h2 className="h2">Why Choose Us?</h2>
      </div>
      <div className="">
        {contents.map((content, index) => (
          <div
            className="flex flex-col gap-4 p-4 py-10 border-b border-black md:p-20 lg:border-l"
            key={index}
          >
            <h3 className="h3">{content.title}</h3>
            <p className="body">{content.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default WhyChooseUs
