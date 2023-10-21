import { useState } from "react";
import ServiceList from "../../components/services/ServicesList";
import ModalSearch from "../../components/UI/modal/ModalSearch";
import SERVICES from "../../components/services/services";

export default function Services() {
  const [services, setServices] = useState(SERVICES);
  return (
    <div className="padding-top-section">
      <h1 className="font-title text-center">SERVICOS</h1>
      <hr className="hr hr-subtitle margin-auto" />
      <ModalSearch setServices={setServices} />
      <ServiceList services={services} />
    </div>
  );
}
