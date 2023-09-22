import React from "react";
import COMPLEMENTARY from "../galleries/complementary";
import ONLINE from "../galleries/online";
import DESIGN from "../galleries/design";
import HOME_STANGING from "../galleries/homeStaging";
import DECOR from "../galleries/decor";
import CONCEPT_BOARDS from "../galleries/concept_board";
import CardGallery from "./CardGallery";

export default function ProjectsGallery() {
  return (
    <div>
      <CardGallery
        gallery={COMPLEMENTARY}
        title={"Consultoria Complementar"}
        id={"complementar"}
      />

      <CardGallery
        gallery={ONLINE}
        title={"Consultoria Online"}
        id={"online"}
      />
      <CardGallery
        gallery={DECOR}
        title={"Projeto de Decoracao de Interiores"}
        id={"decor"}
      />
      <CardGallery
        gallery={DESIGN}
        title={"Projeto de Design de Interiores"}
        id={"design"}
      />
      <CardGallery
        gallery={HOME_STANGING}
        title={"Home Staging"}
        id={"staging"}
      />
      <CardGallery
        gallery={CONCEPT_BOARDS}
        title={"Concept Boards"}
        id={"concept"}
      />
    </div>
  );
}
