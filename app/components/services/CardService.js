import serviceStyles from "./service.module.css";
import layoutStyles from "../layout.module.css";

export default function CardService(props) {
  return (
    <div>
      <div className={serviceStyles.serviceSection}>
        <div className={serviceStyles.serviceText}>
          <h1> {props.title}</h1>
          <p className={serviceStyles.serviceDescription}>
            {props.description}
          </p>

          <li className={serviceStyles.serviceBullets}>{props.detail1}</li>
          <li className={serviceStyles.serviceBullets}>{props.detail2}</li>
          <li className={serviceStyles.serviceBullets}>{props.detail3}</li>
          <li className={serviceStyles.serviceBullets}>{props.detail4}</li>
        </div>

        <div
          className={serviceStyles.serviceImage}
          style={{
            backgroundImage: props.imgURL,
          }}
        ></div>
        <div> </div>
      </div>
      <button className={layoutStyles.button}>Saber mais</button>
    </div>
  );
}
