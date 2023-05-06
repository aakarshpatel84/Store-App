import React, { useState } from "react";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import "./Slider.scss";
function Slider() {
  const [currentSlide, setCurrentSilide] = useState(0);

  const prevSlide = () => {
    setCurrentSilide(currentSlide === 0 ? 2 : (prev) => prev - 1);
  };

  const nextSlide = () => {
    setCurrentSilide(currentSlide === 2 ? 2 : (prev) => prev + 1);
  };

  const data = [
    "/img/pexels-evg-kowalievska-1381556.jpg",
    "/img/pexels-cole-keister-2466756.jpg",
    "/img/pexels-the-lazy-artist-gallery-1300550.jpg",
  ];
  return (
    <div className="slider">
      <div
        className="container"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        <img src={data[0]} alt="" />
        <img src={data[1]} alt="" />
        <img src={data[2]} alt="" />
        {/* <img src={data[3]} alt="" /> */}
      </div>
      <div className="icons">
        <div className="icon" onClick={prevSlide}>
          <ArrowBackOutlinedIcon />
        </div>
        <div className="icon" onClick={nextSlide}>
          <ArrowForwardOutlinedIcon />
        </div>
      </div>
    </div>
  );
}

export default Slider;
