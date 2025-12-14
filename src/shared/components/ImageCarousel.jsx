"use client"

import  { useEffect, useState } from "react"
import useEmblaCarousel from "embla-carousel-react"
import Image from "next/image"

export default function ImageCarousel({ images = [] }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })
  const [selectedIndex, setSelectedIndex] = useState(0)

  useEffect(() => {
    if (!emblaApi) return

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap())
    }

    emblaApi.on("select", onSelect)
    onSelect()

    return () => {
      emblaApi.off("select", onSelect)
    }
  }, [emblaApi])

  // Auto-scroll every 3 seconds
  useEffect(() => {
    if (!emblaApi) return

    const autoScroll = setInterval(() => {
      emblaApi.scrollNext()
    }, 3000)

    return () => clearInterval(autoScroll)
  }, [emblaApi])

  const scrollTo = (index) => emblaApi?.scrollTo(index)

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Slides */}
      <div className="overflow-hidden h-full" ref={emblaRef}>
        <div className="flex h-full">
          {images.map((src, i) => (
            <div key={i} className="min-w-full h-full relative">
              <Image
                fill
                src={src}
                className="object-cover"
                alt=""
                priority={i === 0}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Dots Indicator */}
      <div className="absolute bottom-3 w-full flex justify-center gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => scrollTo(i)}
            className={`
              transition-all rounded-full cursor-pointer
              ${i === selectedIndex ? "w-6 h-2 bg-white" : "w-2 h-2 bg-white/50 hover:bg-white/70"}
            `}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  )
}