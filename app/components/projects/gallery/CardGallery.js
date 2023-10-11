import projectStyles from "../projects.module.css";
import React from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

export default function CardGallery(props) {
  const GALLERY = [];

  for (let i = 0; i < props.gallery.length; i++) {
    GALLERY.push(props.gallery[i]);
  }

  return (
    <div id={props.id} key={props.id}>
      <h1 className={projectStyles.galleryTitle}>{props.title}</h1>
      <p className={projectStyles.galleryDescription}>{props.category1}</p>
      <Masonry>
        {GALLERY.map((photo) => {
          return (
            <div key={photo.id}>
              <img
                className={projectStyles.galleryMasonry}
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
