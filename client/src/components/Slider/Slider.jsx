import React from "react";
import slider1 from "../../assets/img/slider1.png";
import slider2 from "../../assets/img/slider2.png";
import "./Slider.css";
// import { FaAngleRight } from "react-icons";

const Slider = () => {
  // let slider = document.querySelectorAll(".slider-img");
  // function hideImg() {
  //   for (let i = 0; i < slider.length; i++) {
  //     slider[i].style.display = "none";
  //   }
  // }
  // function slide() {
  //   hideImg();
  //   slider[0].style.display = "block";
  // }

  return (
    <div className="slider">
      <div>
        <img className="slider-img" src={slider1} alt="slider" />
      </div>
      <div>
        <img className="slider-img" src={slider2} alt="slider" />
      </div>
    </div>
  );
};

export default Slider;
