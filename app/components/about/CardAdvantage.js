import aboutStyles from "./aboutme.module.css";

export default function CardAdvantage(props) {
  return (
    <div className={aboutStyles.advantagesSection}>
      <img
        className={aboutStyles.iconAdvantage}
        src={props.imgURL}
        alt={props.alt}
      />
      <h2 className={aboutStyles.titleAdvantage}>{props.title}</h2>
      <p>{props.description}</p>
    </div>
  );
}
