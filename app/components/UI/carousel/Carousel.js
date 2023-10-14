import React from "react";
import Slider from "react-slick";

export default function Carousel(props) {
  const SLIDES = [];

  for (let i = 0; i < props.slides.length; i++) {
    SLIDES.push(props.slides[i]);
  }

  return (
    <div>
      <Slider>
        {SLIDES.map((slide) => {
          return (
            <div key={slide.id}>
              <img className="gallery" src={slide.imgURL} alt={slide.title} />
            </div>
          );
        })}
      </Slider>
    </div>
  );
}
