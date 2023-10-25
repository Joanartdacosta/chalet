import React from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

export default function CardGallery(props) {
  const GALLERY = [];

  for (let i = 0; i < props.gallery.length; i++) {
    GALLERY.push(props.gallery[i]);
  }

  return (
    <div id={props.id} key={props.id} className="padding-top-1-25">
      <h1 className="font-text font-light title-size text-color-brown opacity">
        {props.title}
      </h1>
      <p className="font-text text-size-08 font-bold padding-bottom-1-25 padding-1">
        {props.category1}
      </p>

      <Masonry className="margin-auto">
        {GALLERY.map((photo) => {
          return (
            <div key={photo.id}>
              <img
                className="hover-scale width-18 padding-1"
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
