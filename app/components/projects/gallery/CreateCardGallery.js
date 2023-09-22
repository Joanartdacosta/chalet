import CardGallery from "./CardGallery";

export default function createCardGallery(galleries) {
  return (
    <CardGallery
      key={generateRandomKey}
      id={galleries.id}
      title={galleries.title}
      imgURL={galleries.imgURL}
      gallery={galleries.gallery}
      category1={galleries.category1}
      category2={galleries.category2}
    />
  );
}
