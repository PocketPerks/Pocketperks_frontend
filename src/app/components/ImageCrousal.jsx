"use client"
import AliceCarousel from "react-alice-carousel"
import "react-alice-carousel/lib/alice-carousel.css"

export default function ImageCrousal() {
  const images = [
    { images: "/CrousalImage.png" },
    { images: "/Crousalimage2.png" },
    { images: "/product1.png" },
    { images: "/product2.png" }
  ]

  const imageItems = images.map((item, index) => (
    <div
      key={index}
      className="flex justify-center w-full items-center h-[25rem] md:h-[28rem]"
    >
      <img
        src={item.images}
        alt={`carousel-${index}`}
        className="w-full h-full object-contain rounded-2xl"
      />
    </div>
  ))

  return (
    <div className="relative h-[30rem] mx-auto px-4 py-10">
      <AliceCarousel
        items={imageItems}
        autoPlay
        autoPlayInterval={2500}
        infinite
        disableDotsControls={true}
        disableButtonsControls={true}
        mouseTracking
        animationDuration={2000}
      />

     
    </div>
  )
}