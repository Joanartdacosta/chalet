import serviceStyles from "./service.module.css";

export default function CardService(props) {
  return (
    <div
      className={serviceStyles.serviceSection}
      style={{
        backgroundImage: props.imgURL,
      }}
    >
      {props.title}
    </div>
  );
}
