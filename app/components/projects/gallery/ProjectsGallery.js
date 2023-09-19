import React from "react";
import COMPLEMENTARY from "../../services/galleries/complementary";
import ONLINE from "../../services/galleries/online";
import DESIGN from "../../services/galleries/design";
import HOME_STANGING from "../../services/galleries/homeStaging";
import DECOR from "../../services/galleries/decor";
import CONCEPT_BOARDS from "../../services/galleries/concept_board";
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

{
  /* <div id={"online"}>
        <h1 className={projectStyles.galleryTitle}>Consultoria Online</h1>
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
          <Masonry>
            {ONLINE.map((photo) => (
              <img
                className={projectStyles.galleryMasonry}
                src={photo.imgURL}
                alt="home-staging-photo"
              />
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </div>

      <div id={"design"}>
        <h1 className={projectStyles.galleryTitle}>
          Projetos de Design de Interiores
        </h1>
        <ResponsiveMasonry>
          <Masonry columnsCount={3}>
            {DESIGN.map((photo) => (
              <img
                className={projectStyles.galleryMasonry}
                src={photo.imgURL}
                alt="design-photo"
              />
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </div>

      <div id={"decor"}>
        <h1 className={projectStyles.galleryTitle}>
          Projetos de Decoracao de Interiores
        </h1>
        <ResponsiveMasonry>
          <Masonry columnsCount={3}>
            {DECOR.map((photo) => (
              <img
                className={projectStyles.galleryMasonry}
                src={photo.imgURL}
                alt="decor-photo"
              />
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </div>

      <div id={"staging"}>
        <h1 className={projectStyles.galleryTitle}>Home Staging</h1>
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
          <Masonry>
            {HOME_STANGING.map((photo) => (
              <img
                className={projectStyles.galleryMasonry}
                src={photo.imgURL}
                alt="home-staging-photo"
              />
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </div>
    </div> */
}
