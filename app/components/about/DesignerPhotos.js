import DESIGNER from "./designer";

export default function DesignerPhotos() {
  return (
    <div className="wrap-section display-flex justify-center">
      {DESIGNER.map((designer) => (
        <div id={designer.id}>
          <img
            className="gallery width-19 media-width-photo"
            src={designer.imgURL}
            alt={designer.title}
          />{" "}
        </div>
      ))}
    </div>
  );
}
