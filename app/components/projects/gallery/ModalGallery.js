import CloseButton from "../../UI/closebutton/CloseButton";

export default function ModalGallery(props) {
  return (
    <div className="background-green width-100 index-z width-100">
      <CloseButton onClose={props.onClose} />
      <div className="width-70vw height-70vh" key={props.id}>
        <center>
          <img
            src={props.imgURL}
            alt={props.title}
            className="width-18 height-18"
          />
        </center>
      </div>
    </div>
  );
}
