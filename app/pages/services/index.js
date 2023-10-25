import { useState } from "react";

import ServiceList from "../../components/services/ServicesList";
import ModalSearch from "../../components/UI/modal/ModalSearch";
import SERVICES from "../../components/services/services";

export default function Services() {
  const [services, setServices] = useState(SERVICES);
  return (
    <div className="margin-auto max-width padding-top-5">
      <h1 className="text-center font-title title-size font-light letter-space-1">
        SERVICOS
      </h1>
      <hr className="border-light-brown margin-auto opacity width-15" />
      <ModalSearch setServices={setServices} />
      <ServiceList services={services} />
    </div>
  );
}
