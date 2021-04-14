import React, { useState, useEffect } from "react";
import "./Slider.css";
import slider_1 from "../../../utils/slider-1.jpg";
import slider_2 from "../../../utils/slider-2.jpg";
import slider_3 from "../../../utils/slider-3.jpg";

const Slider = () => {
  const [slide, setSlide] = useState(0);
  // to check when the pictures change the number of slide dont go more than 2 and give us error
  useEffect(() => {
    if (slide < 0) {
      setSlide(2);
    }
    if (slide > 2) {
      setSlide(0);
    }
  }, [slide]);
  // for sliding after 3 sec
  useEffect(() => {
    let slider = setInterval(() => {
      setSlide(slide + 1);
    }, 3000);
    return () => clearInterval(slider);
  }, [slide]);
  return (
    <section style={{ height: "100vh" }}>
      {/* the section with the images and text inside them */}
      <div
        className={slide === 0 ? "slider-image active-slide" : "slider-image"}
      >
        <img className="slider-img w-100" src={slider_1} alt="Food and more" />
        <div className="slider-text text-white">
          <h1 className="display-1 font-weight-bolder">Food and more</h1>
          <p className="font-weight-bold">by chef mohammad tayebi</p>
        </div>
      </div>
      <div
        className={slide === 1 ? "slider-image active-slide" : "slider-image"}
      >
        <img className="slider-img w-100" src={slider_2} alt="Food and more" />
        <div className="slider-text text-white">
          <h1 className="display-1 font-weight-bolder">Special Dish</h1>
          <p className="font-weight-bold">by chef mohammad tayebi</p>
        </div>
      </div>
      <div
        className={slide === 2 ? "slider-image active-slide" : "slider-image"}
      >
        <img className="slider-img w-100" src={slider_3} alt="Food and more" />
        <div className="slider-text text-white">
          <h1 className="display-1 font-weight-bolder">Hygienic Food</h1>
          <p className="font-weight-bold">by chef mohammad tayebi</p>
        </div>
      </div>
      {/* the section with the circle that change the slide image  */}
      <div className="slider-circle text-white">
        <i
          className={
            slide === 0
              ? "fas fa-circle px-1 circle"
              : "far fa-circle px-1 circle"
          }
          onClick={() => setSlide(0)}
        ></i>
        <i
          className={
            slide === 1
              ? "fas fa-circle px-1 circle"
              : "far fa-circle px-1 circle"
          }
          onClick={() => setSlide(1)}
        ></i>
        <i
          className={
            slide === 2
              ? "fas fa-circle px-1 circle"
              : "far fa-circle px-1 circle"
          }
          onClick={() => setSlide(2)}
        ></i>
      </div>
    </section>
  );
};

export default Slider;
