import React from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

export default function CardGallery(props) {
  const GALLERY = [];

  for (let i = 0; i < props.gallery.length; i++) {
    GALLERY.push(props.gallery[i]);
  }

  return (
    <div
      id={props.id}
      key={props.id}
      className="text-center margin-auto max-width padding-bottom-section padding-top-section"
    >
      <h1 className="font-subtitle padding-bottom-element">{props.title}</h1>

      <Masonry>
        {GALLERY.map((photo) => {
          return (
            <div
              key={photo.id}
              className="wrap-section justify-center padding-50"
            >
              <img
                className="gallery wrap-section"
                src={photo.imgURL}
                alt={props.title}
              />
            </div>
          );
        })}
      </Masonry>
    </div>
  );
}
