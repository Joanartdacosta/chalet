import Services from "./services";
import createCardService from "./createCardService";
import serviceStyles from "./service.module.css";

export default function ServicesList() {
  return (
    <div className={serviceStyles.servicesSection}>
      {Services.map(createCardService)}
    </div>
  );
}
