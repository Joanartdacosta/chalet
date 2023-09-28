import React from "react";
import CardGallery from "./CardGallery";

export default function GalleryFiltered(props) {
  const NEW_GALLERY = [];

  for (let i = 0; i < props.categories.length; i++) {
    NEW_GALLERY.push(props.categories[i]);
  }

  return (
    <div>
      <CardGallery
        gallery={NEW_GALLERY}
        title={NEW_GALLERY.title}
        id={NEW_GALLERY.href}
      />
    </div>
  );
}
