import React from "react";
import Slider from "react-slick";
import carouselStyles from "./carousel.module.css";

export default function Carousel(props) {
  return (
    <div>
      <Slider {...props.settings}>
        {props.slides.map((slide) => {
          return (
            <div key={slide.id}>
              <img
                className={carouselStyles.Image}
                src={slide.imgURL}
                alt="slide"
              />
            </div>
          );
        })}
      </Slider>
    </div>
  );
}
