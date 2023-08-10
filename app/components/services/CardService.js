import serviceStyles from "./service.module.css";

export default function CardService(props) {
  return (
    <div>
      <img
        className={serviceStyles.serviceLine}
        src="https://chalet-webapp.s3.amazonaws.com/line-icon/1.png"
        alt="line"
      />
      <div className={serviceStyles.serviceSection}>
        <div className={serviceStyles.serviceText}>
          <div className={serviceStyles.serviceColumn}></div>
          <h1> {props.title}</h1>
          <p className={serviceStyles.serviceDescription}>
            {props.description}
          </p>

          <li className={serviceStyles.serviceBullets}>{props.detail1}</li>
          <li className={serviceStyles.serviceBullets}>{props.detail2}</li>
          <li className={serviceStyles.serviceBullets}>{props.detail3}</li>
          <li className={serviceStyles.serviceBullets}>{props.detail4}</li>

          <button className={serviceStyles.button}>Saber mais</button>
        </div>

        <div
          className={serviceStyles.serviceImage}
          style={{
            backgroundImage: props.imgURL,
          }}
        ></div>
      </div>
    </div>
  );
}
