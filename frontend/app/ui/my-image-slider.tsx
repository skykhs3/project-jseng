import { access } from "fs";
import React, { useEffect } from "react";
import Slider from "react-slick";
interface MyImageSliderProps {
  height: number;
  width: number;
}
const MyImageSlider: React.FC<MyImageSliderProps> = ({ height, width }) => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 2000,
    centerPadding: "0px",
    arrows: false,
    accessibility: false,
    adaptiveHeight: true,
  };

  return (
    <div style={{ width: "100%", margin: "0 auto" }}>
      <Slider {...settings}>
        <div style={{ position: "relative", width: "100%" }}>
          <div className="relative flex flex-col items-center justify-center">
            <div className="absolute h-full w-full bg-black opacity-50"></div>
            <div className="absolute flex w-full justify-center p-6">
              <p className="text-lg font-light text-white md:text-xl lg:text-3xl">
                <strong>정석기술연구소</strong> - 국내 최고의 건설 전문가 팀.
                <br />
                <br />
                설계부터 시공, 법률 자문까지, 모든 건설 프로젝트에 최적화된
                솔루션을 제공합니다.
                <br />
                <br />
                <em>
                  안전과 품질을 최우선으로, 국내 최고 건설 전문 로펌과 협력하여
                  송무 지원 및 기술 자문을 제공합니다.
                </em>
              </p>
            </div>

            <img
              src="image_banner.jpg"
              alt="배너"
              style={{
                width: "100%",
                height: `${height}px`,
                objectFit: "cover",
              }}
            />
          </div>
        </div>
        <div style={{ position: "relative", width: "100%" }}>
          <div className="relative">
            <div className="absolute h-full w-full bg-black opacity-50"></div>
            <img
              src="image_banner.jpg"
              alt="배너"
              style={{
                width: "100%",
                height: `${height}px`,
                objectFit: "cover",
              }}
            />
          </div>
        </div>
        <div style={{ position: "relative", width: "100%" }}>
          <div className="relative">
            <div className="absolute h-full w-full bg-black opacity-50"></div>
            <img
              src="image_banner.jpg"
              alt="배너"
              style={{
                width: "100%",
                height: `${height}px`,
                objectFit: "cover",
              }}
            />
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default MyImageSlider;
