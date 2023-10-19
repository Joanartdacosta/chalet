import DESIGNER from "./designer";

export default function DesignerPhotos() {
  return (
    <div className="wrap-section justify-center">
      {DESIGNER.map((designer) => (
        <div id={designer.id}>
          <img className="gallery" src={designer.imgURL} alt={designer.title} />{" "}
        </div>
      ))}
    </div>
  );
}
