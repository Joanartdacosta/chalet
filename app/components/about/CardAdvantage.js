export default function CardAdvantage(props) {
  return (
    <div className="width-15 height-21-2 align-center border-double shadow-dark border-radius-075 padding-1 gap-2 link">
      <img
        className="width-5 padding-bottom-1-25 padding-top-1-25 media-padding-bottom media-padding-top"
        src={props.imgURL}
        alt={props.alt}
      />
      <p className="font-text font-size-11 font-bold padding-bottom-1-25 text-color-brown media-font-text media-padding-bottom">
        {props.title}
      </p>
      <p className="font-text font-size-08">{props.description}</p>
    </div>
  );
}
