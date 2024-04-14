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
    autoplaySpeed: 2000,
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
