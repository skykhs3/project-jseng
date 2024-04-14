import { access } from "fs";
import React, { useEffect } from "react";
import Slider from "react-slick";
interface MyImageSliderProps {
  height: number;
  width: number;
}
const MyImageSlider: React.FC<MyImageSliderProps> = ({ height, width }) => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 1000,
    centerPadding: "0px",
    arrows: false,
    accessibility: false,
    adaptiveHeight: true,
  };

  useEffect(() => {
    console.log(`Current width2: ${width}px`);
    console.log(`Current width2: ${height}px`);
  }, [width]);

  return (
    <Slider {...settings}>
      <div className={`h-96 w-[${width}px] bg-red-100`}>
        <div className="h-full bg-black"></div>
      </div>
      <div className={`h-96 w-[${width}px] bg-red-100`}>
        <div className="h-full bg-blue-100"></div>
      </div>
    </Slider>
  );
};

export default MyImageSlider;
