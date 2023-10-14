import aboutStyles from "./aboutme.module.css";

export default function CardAdvantage(props) {
  return (
    <div>
      <img className="logo" src={props.imgURL} alt={props.alt} />
      <h2 className="font-title">{props.title}</h2>
      <p className="text-center">{props.description}</p>
    </div>
  );
}
