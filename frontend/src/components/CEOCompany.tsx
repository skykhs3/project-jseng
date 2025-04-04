"use client";

import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CEOCompany: React.FC = () => {
  const images = [
    {
      imageUrl: "/image_horizontal1.jpeg",
      description: "(주)KCC건설 소장 및 팀장 대상 하자 분쟁 대응방안 교육 연사",
      image_position: "object-center",
    },
    {
      imageUrl: "/image_horizontal2.jpeg",
      description: "(주)KCC건설 소장 및 팀장 대상 하자 분쟁 대응방안 교육 연사",
      image_position: "object-center",
    },
    {
      imageUrl: "/image_horizontal4.png",
      description: "LH 한국토지주택공사 주택품질·분쟁관리 전문가 초청강연 연사",
      image_position: "object-right",
    },
    {
      imageUrl: "/image_horizontal3.png",
      description: "LH 한국토지주택공사 주택품질·분쟁관리 전문가 초청강연 연사",
      image_position: "object-bottom",
    },
    {
      imageUrl: "/image_horizontal5.jpeg",
      description: "1군 건설사 CS협의체 하자소송 대응방안 강연 연사",
      image_position: "object-center",
    },
    {
      imageUrl: "/image_horizontal6.jpeg",
      description: "1군 건설사 CS협의체 하자소송 대응방안 강연 연사",
      image_position: "object-[center_right]",
    },
  ];

  const CustomPrevArrow = (props: any) => {
    const { onClick } = props;
    return (
      <button
        onClick={onClick}
        className="absolute left-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/80 p-3 shadow-md dark:bg-secondary-800/80 dark:text-secondary-200"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
    );
  };

  const CustomNextArrow = (props: any) => {
    const { onClick } = props;
    return (
      <button
        onClick={onClick}
        className="absolute right-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/80 p-3 shadow-md dark:bg-secondary-800/80 dark:text-secondary-200"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    );
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  return (
    <div className="container-custom pb-12" id="회사소식">
      <h2 className="heading-lg mb-6 text-primary-800 dark:text-primary-400">
        회사 소식
      </h2>
      <Slider {...settings} className="ceo-slider">
        {images.map((image, index) => (
          <div key={index} className="px-4">
            <div className="relative h-[300px] w-full overflow-hidden rounded-lg md:h-[400px] lg:h-[500px]">
              <Image
                src={image.imageUrl}
                alt={image.description}
                fill
                className={`object-cover ${image.image_position}`}
              />
            </div>
            <p className="mt-4 text-center text-sm text-secondary-700 dark:text-secondary-300 md:text-base">
              {image.description}
            </p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CEOCompany;
