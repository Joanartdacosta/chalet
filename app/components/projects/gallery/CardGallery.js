import React from "react";
import { useState } from "react";
import ModalGallery from "./ModalGallery";

export default function CardGallery(props) {
  const GALLERY = [];

  for (let i = 0; i < props.gallery.length; i++) {
    GALLERY.push(props.gallery[i]);
  }

  const [modalIsOpen, setModalIsOpen] = useState(false);

  function handleSeeMore() {
    setModalIsOpen(true);
  }

  function handleClose() {
    setModalIsOpen(false);
  }

  return (
    <div>
      <div>
        {modalIsOpen && (
          <ModalGallery
            imgURL={props.imgURL}
            title={props.title}
            onClose={handleClose}
            id={props.id}
          />
        )}
      </div>
      <div id={props.id} key={props.id} className="padding-top-1-25">
        <h1 className="font-text font-light font-size-2 text-color-brown opacity">
          {props.title}
        </h1>
        <p className="font-text font-size-08 font-bold padding-bottom-1-25 padding-1">
          {props.category1}
        </p>

        <div className="masonry">
          {GALLERY.map((photo) => {
            return (
              <div key={photo.id}>
                <img
                  onClick={handleSeeMore}
                  className="cursor width-15 height-12 hover-scale media-image-gallery"
                  src={photo.imgURL}
                  alt={props.title}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
