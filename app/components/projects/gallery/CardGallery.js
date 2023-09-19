import projectStyles from "../projects.module.css";
import React from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import ALL from "../../services/galleries/all";

export default function CardGallery(props) {
  return (
    <div id={props.id}>
      <h1 className={projectStyles.galleryTitle}>{props.title}</h1>
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
        <Masonry>
          {Array(props.gallery).map((photo) => {
            return (
              <div key={Math.floor(Math.random() * 1000)}>
                <img
                  className={projectStyles.galleryMasonry}
                  src={photo.imgURL}
                  alt={props.title}
                />
              </div>
            );
          })}
        </Masonry>
      </ResponsiveMasonry>
    </div>
  );
}
