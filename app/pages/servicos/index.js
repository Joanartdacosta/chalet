import { useState } from "react";
import layoutStyles from "../../components/layout/layout.module.css";
import ServiceList from "../../components/services/ServicesList";
import ModalSearch from "../../components/UI/modal/ModalSearch";
import SERVICES from "../../components/services/services";

export default function Services() {
  const [services, setServices] = useState(SERVICES);
  return (
    <div className={layoutStyles.informationSection}>
      <h1 className={layoutStyles.subtitles}>SERVICOS</h1>
      <hr className={layoutStyles.hrSubtitle} />
      <ModalSearch setServices={setServices} />
      <ServiceList services={services} />
    </div>
  );
}
