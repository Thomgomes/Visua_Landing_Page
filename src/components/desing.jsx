// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Data_Mobile from "../data/Desing_Mobile";
// import { useState } from "react";
// import SampleArrow from "./sampleArrow";

import Slider_Carrosel from "./slider";

const Desing = () => {
  // const [isDragging, setIsDragging] = useState(false);

  // const handleDragDown = () => {
  //   setIsDragging(true);
  // };

  // const handleDragUp = () => {
  //   setIsDragging(false);
  // };
  // const settings = {
  //   className: "center",
  //   centerMode: true,
  //   infinite: true,
  //   centerPadding: "60px",
  //   slidesToShow: 3,
  //   swipeToSlide: true,
  //   initialSlide: 0,
  //   speed: 300,
  //   nextArrow: <SampleArrow />,
  //   prevArrow: <SampleArrow left={true} />,

  //   responsive: [
  //     {
  //       breakpoint: 1024,
  //       settings: {
  //         slidesToShow: 3,
  //       },
  //     },
  //     {
  //       breakpoint: 600,
  //       settings: {
  //         slidesToShow: 2,
  //       },
  //     },
  //     {
  //       breakpoint: 480,
  //       settings: {
  //         slidesToShow: 1.5,
  //       },
  //     },
  //   ],
  // };

  return (
    <div className="flex flex-col text-center p">
      <h1 className="text-6xl font-extrabold">Desing</h1>
      <div className="">
        {/* <h3 className="text-3xl font-semibold py-mid_mobile lg:py-mid_desktop">
          Mobile
        </h3> */}
        <Slider_Carrosel title="Mobile" data="mobile"/>
        <Slider_Carrosel title="Desktop" data="desktop"/>
        {/* <div
          className={`${isDragging ? "cursor-grabbing" : "cursor-grab" } py-mid_mobile lg:py-mid_desktop`}
          onTouchStart={handleDragDown}
          onTouchEnd={handleDragUp}
          onMouseDown={handleDragDown}
          onMouseUp={handleDragUp}
        >
          <Slider {...settings}>
            {Data_Mobile.map((image) => (
              <div key={image.id} className="flex flex-col items-center">
                <img
                  src={image.img}
                  alt={image.name}
                  className="rounded-lg shadow-md border-2 border-gray h-72"
                />
              </div>
            ))}
          </Slider>
        </div> */}

      </div>
    </div>
  );
};

export default Desing;
