import Link from "next/link";
import homeStyles from "./home.module.css";

export default function CardHome(props) {
  return (
    <div className={homeStyles.cardHomeServices}>
      <Link
        className={homeStyles.cardHomeServicesLink}
        href={props.href}
        key={props.id}
      >
        {" "}
        <img
          className={homeStyles.cardHomeServicesImage}
          src={props.imgURL}
          alt={props.title}
        />
        <div className={homeStyles.cardHomeServicesInfos}>
          <div>
            <h1 className={homeStyles.cardHomeServicesTitle}>{props.title}</h1>

            <button className={homeStyles.buttonService}>
              <p className={homeStyles.cardHomeServicesDescription}>
                {props.description}
              </p>
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
}
