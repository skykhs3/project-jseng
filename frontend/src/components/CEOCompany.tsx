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
      description: "1군 건설사 CS협의체 하자소송 대응방안 강연",
      image_position: "object-center",
    },
    {
      imageUrl: "/image_horizontal6.jpeg",
      description: "1군 건설사 CS협의체 하자소송 대응방안 강연",
      image_position: "object-[center_right]",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
        },
      },
    ],
  };

  return (
    <div className="relative w-full overflow-hidden pb-10 md:pb-16">
      <h2 className="p-10 pb-5 text-start text-3xl font-medium text-[#09090b] md:p-16 md:pb-8 lg:min-w-80 lg:text-4xl">
        대표가 직접 뛰는 회사
      </h2>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="px-4">
            <div className="relative h-[300px] w-full overflow-hidden rounded-lg md:h-[400px] lg:h-[500px]">
              <Image
                src={image.imageUrl}
                alt={image.description}
                fill
                className={`object-cover ${image.image_position}`}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <p className="mt-4 text-center text-sm text-[#52525b] md:text-base">
              {image.description}
            </p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CEOCompany;
