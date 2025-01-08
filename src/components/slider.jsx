/* eslint-disable react/prop-types */
import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SampleArrow from "./sampleArrow";
import Data_Mobile from "../data/Desing_Mobile";
import Data_Desktop from "../data/Desing_Desktop";

const Slider_Carrosel = ({ title, data }) => {
  const [isDragging, setIsDragging] = useState(false);

  const isDesktop = (desktop, mobile) => {
    return data === "desktop" ? desktop : mobile 
  }


  const getData = () => {
    // Certifique-se de que a propriedade `data` é "desktop" ou "mobile"
    if (data === "desktop") {
      return Data_Desktop;
    } else if (data === "mobile") {
      return Data_Mobile;
    } else {
      return []; // Caso contrário, retornamos um array vazio
    }
  };

  const handleDragDown = () => {
    setIsDragging(true);
  };

  const handleDragUp = () => {
    setIsDragging(false);
  };

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: isDesktop(2, 6),
    swipeToSlide: true,
    initialSlide: 0,
    speed: 300,
    nextArrow: <SampleArrow />,
    prevArrow: <SampleArrow left={true} />,

    responsive: [
      {
        breakpoint: 1320,
        settings: {
          slidesToShow: isDesktop(2, 5),
        },
      },
      {
        breakpoint: 1180,
        settings: {
          slidesToShow: isDesktop(1.6, 4),
        },
      },
      {
        breakpoint: 830,
        settings: {
          slidesToShow: isDesktop(1, 3),
        },
      },
      {
        breakpoint: 680,
        settings: {
          slidesToShow: isDesktop(1, 2),
          centerPadding: "60px",
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: isDesktop(1, 2.1),
          centerPadding: "0px",
        },
      },
    ],
  };

  return (
    <>
      <h3 className="text-3xl font-semibold py-mid_mobile lg:py-mid_desktop">
        {title}
      </h3>
      <div
        className={`${
          isDragging ? "cursor-grabbing" : "cursor-grab"
        } py-mid_mobile lg:py-mid_desktop`}
        onTouchStart={handleDragDown}
        onTouchEnd={handleDragUp}
        onMouseDown={handleDragDown}
        onMouseUp={handleDragUp}
      >
        <Slider {...settings}>
          {getData().map((image) => (
            <div key={image.id} className={`flex flex-col items-center ${data === "desktop" ? "px-4" : ""}`}>
              <img
                src={image.img}
                alt={image.name}
                className="rounded-lg shadow-md border-2 border-gray h-img_desing_mobile lg:h-img_desing_desktop"
              />
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default Slider_Carrosel;
