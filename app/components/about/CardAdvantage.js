import aboutStyles from "./aboutme.module.css";

export default function CardAdvantage(props) {
  return (
    <div className={aboutStyles.advantagesSection}>
      <img
        className={aboutStyles.iconAdvantage}
        src={props.imgURL}
        alt={props.alt}
      />
      <p>{props.description}</p>
    </div>
  );
}
