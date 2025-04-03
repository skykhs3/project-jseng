"use client";

import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface CarouselProps {
  images: {
    imageUrl: string;
    description: string;
    image_position: string;
  }[];
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          arrows: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
        },
      },
    ],
  };

  return (
    <div className="relative w-full overflow-hidden">
      <Slider {...settings} className="w-full">
        {images.map((image, index) => (
          <div key={index} className="px-4">
            <div className="relative h-[500px] w-full overflow-hidden rounded-lg border border-gray-200 shadow-lg">
              <Image
                src={image.imageUrl}
                alt={`Slide ${index}`}
                fill
                className={`object-cover ${image.image_position}`}
                priority
              />
            </div>
            <p className="mt-4 text-center text-lg font-medium text-gray-800">
              {image.description}
            </p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
