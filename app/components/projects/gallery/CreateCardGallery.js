import CardGallery from "./CardGallery";

export default function createCardGallery(galleries) {
  return (
    <CardGallery
      id={galleries.id}
      title={galleries.title}
      imgURL={galleries.imgURL}
      gallery={galleries.gallery}
    />
  );
}
