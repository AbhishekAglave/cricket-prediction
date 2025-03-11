'use client';
import Image from 'next/image';
import { useState, useEffect } from 'react';

interface SliderImage {
  src: string;
  alt: string;
}

interface ImageSliderProps {
  images: SliderImage[];
  interval?: number;
}

export default function ImageSlider({ images, interval = 4000 }: ImageSliderProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, interval);

    return () => clearInterval(slideInterval);
  }, [images.length, interval]);

  return (
    <div className="relative h-72 sm:h-96 md:h-[500px] overflow-hidden rounded-2xl shadow-2xl my-4 md:my-6">
      {images.map((image, index) => (
        <div
          key={index}
          className={`
            absolute top-0 left-0 w-full h-full transition-all duration-1000 ease-in-out
            ${index === currentSlide ? 'opacity-100 scale-100 z-10' : 'opacity-0 scale-105 z-0'}
          `}
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            priority={index === currentSlide}
            className="object-cover transition-transform duration-1000 ease-in-out transform scale-105 hover:scale-100"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
        </div>
      ))}

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-4 h-4 rounded-full transition-all duration-300 border-2
              ${
                index === currentSlide
                  ? 'bg-white border-white scale-110 shadow-md'
                  : 'bg-gray-400/70 border-gray-300 hover:bg-gray-500/80'
              }
            `}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Left/Right navigation buttons */}
      <button
        onClick={() => setCurrentSlide((prev) => (prev - 1 + images.length) % images.length)}
        className="hidden md:flex absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/70 hover:bg-white text-gray-800 rounded-full w-10 h-10 justify-center items-center shadow-lg transition-all duration-300 z-30"
      >
        &#8592;
      </button>

      <button
        onClick={() => setCurrentSlide((prev) => (prev + 1) % images.length)}
        className="hidden md:flex absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/70 hover:bg-white text-gray-800 rounded-full w-10 h-10 justify-center items-center shadow-lg transition-all duration-300 z-30"
      >
        &#8594;
      </button>
    </div>
  );
}
