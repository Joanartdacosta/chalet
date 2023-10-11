import React from "react";

import CardGallery from "./CardGallery";

import HOUSE_10 from "../galleries/house-10";
import HOUSE_26 from "../galleries/house-26";
import COMERCIALS from "../galleries/comercials";
import CONCEPT_BOARDS from "../galleries/concept_board";
import MEZANINE from "../galleries//mezanine";
import KITCHEN_JM from "../galleries/kitchen-JM";
import KITCHEN_JS from "../galleries/kitchen-JS";
import OFFICE_S from "../galleries/office-S";
import HOUSE_TV from "../galleries/tv";
import STUDIO from "../galleries/studio";

export default function ProjectsGallery() {
  return (
    <div>
      <CardGallery
        gallery={MEZANINE}
        title={"Mezanine"}
        category1={"Projeto de Design e Remodelacao de Interiores"}
        id={"design"}
      />
      <CardGallery
        gallery={HOUSE_TV}
        title={"Moradia"}
        category1={"Projeto de Design e Remodelacao de Interiores"}
      />

      <CardGallery
        gallery={KITCHEN_JS}
        title={"Cozinha JS"}
        category1={"Projeto de Design e Remodelacao de Interiores"}
      />

      <CardGallery
        gallery={KITCHEN_JM}
        title={"Cozinha JM"}
        category1={"Projeto de Design e Remodelacao de Interiores"}
      />
      <CardGallery
        gallery={OFFICE_S}
        title={"Escritorio"}
        category1={"Projeto de Decoracao de Interiores"}
        id={"decor"}
      />

      <CardGallery
        gallery={STUDIO}
        title={"Sala"}
        category1={"Projeto de Decoracao de Interiores"}
      />

      <CardGallery
        gallery={HOUSE_10}
        title={"Apartamento 10"}
        category1={"Home Staging"}
        id={"staging"}
      />
      <CardGallery
        gallery={HOUSE_26}
        title={"Apartamento 26"}
        category1={"Home Staging"}
      />

      <CardGallery
        gallery={COMERCIALS}
        title={"Espacos Comerciais"}
        id={"comercial"}
      />

      <CardGallery
        gallery={CONCEPT_BOARDS}
        title={"Concept Boards"}
        id={"concept"}
      />
    </div>
  );
}
