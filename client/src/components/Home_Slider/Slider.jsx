import React from "react";
import slider1 from "../../assets/img/slider1.png";
import slider2 from "../../assets/img/slider2.png";
import "./Slider.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";

const Slider = () => {
  let imageSlider = [slider1, slider2];
  return (
    <Splide
      options={{
        rewind: true,
        type: "loop",

        rewindByDrag: true,
        autoplay: true,
        interval: "3000",
        pauseOnHover: false,
        speed: "1500",
      }}
      aria-label="My Favorite Images"
    >
      <SplideSlide>
        <div
          className="slider-img"
          style={{
            backgroundImage: `URL(${imageSlider[0]})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
      </SplideSlide>
      <SplideSlide>
        <div
          className="slider-img"
          style={{
            backgroundPosition: "center",
            backgroundImage: `URL(${imageSlider[1]})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
      </SplideSlide>
    </Splide>
  );
};

export default Slider;
