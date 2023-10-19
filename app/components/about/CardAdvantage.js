export default function CardAdvantage(props) {
  return (
    <div className="width-card padding-cards text-center">
      <img
        className="logo padding-bottom-element padding-top-element"
        src={props.imgURL}
        alt={props.alt}
      />
      <h2 className="font-subtitle">{props.title}</h2>
      <p className="padding-top-element">{props.description}</p>
    </div>
  );
}
