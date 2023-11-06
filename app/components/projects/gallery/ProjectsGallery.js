import React from "react";

import CardGallery from "./CardGallery";

import HOUSE_10 from "../galleries/house-10";
import HOUSE_26 from "../galleries/house-26";
import COMERCIALS from "../galleries/comercials";
import CONCEPT_BOARDS from "../galleries/concept_board";
import MEZZANINE from "../galleries//mezanine";
import KITCHEN_JM from "../galleries/kitchen-JM";
import KITCHEN_JS from "../galleries/kitchen-JS";
import OFFICE_S from "../galleries/office-S";
import HOUSE_TV from "../galleries/tv";
import STUDIO from "../galleries/studio";

export default function ProjectsGallery() {
  return (
    <div className="padding-top-5">
      <CardGallery
        gallery={MEZZANINE}
        title={"Mezzanine"}
        category1={
          "Projeto de Design/Remodelação de Interiores & Projeto de Decoração de Interiores"
        }
        id={"design"}
      />
      <CardGallery
        gallery={HOUSE_TV}
        title={"Projeto Moradia Torres Vedras"}
        category1={
          "Projeto de Design/Remodelação de Interiores & Projeto de Decoração de Interiores"
        }
      />

      <CardGallery
        gallery={KITCHEN_JS}
        title={"Projeto Cozinha Oeiras"}
        category1={"Projeto de Design/Remodelação de Interiores"}
      />

      <CardGallery
        gallery={KITCHEN_JM}
        title={"Projeto Cozinha Benfica"}
        category1={
          "Projeto de Design/Remodelação de Interiores & Projeto de Decoração de Interiores"
        }
      />
      <CardGallery
        gallery={OFFICE_S}
        title={"Projeto Home Office Massamá"}
        category1={"Projeto de Decoração de Interiores"}
        id={"decor"}
      />

      <CardGallery
        gallery={STUDIO}
        title={"Projeto Studio - Porto "}
        category1={"Projeto de Decoração de Interiores"}
      />

      <CardGallery
        gallery={HOUSE_10}
        title={"Projeto Moradia 10 - Torres Vedras"}
        category1={"Home Staging"}
        id={"staging"}
      />
      <CardGallery
        gallery={HOUSE_26}
        title={"Projeto Moradia 26 - Torres Vedras"}
        category1={"Home Staging"}
      />

      <CardGallery
        gallery={COMERCIALS}
        title={"Projeto de Espaço Comercial"}
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
