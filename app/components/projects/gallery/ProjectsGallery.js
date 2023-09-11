import React from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import COMPLEMENTARY from "../../services/galleries/complementary";
import ONLINE from "../../services/galleries/online";
import DESIGN from "../../services/galleries/design";
import HOME_STANGING from "../../services/galleries/homeStaging";
import DECOR from "../../services/galleries/decor";
import CONCEPT_BOARD from "../../services/galleries/concept_board";
import projectStyles from "../projects.module.css";

export default function ProjectsGallery() {
  return (
    <div>
      <div id={"complementar"}>
        <h1 className={projectStyles.galleryTitle}>Consultoria Complementar</h1>
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
          <Masonry>
            {COMPLEMENTARY.map((photo) => (
              <img
                className={projectStyles.galleryMasonry}
                src={photo.imgURL}
                alt="complementary-photo"
              />
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </div>

      <div id={"online"}>
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

      <div id={"concept-board"}>
        <h1 className={projectStyles.galleryTitle}>Concept Boards</h1>
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
          <Masonry>
            {CONCEPT_BOARD.map((photo) => (
              <img
                className={projectStyles.galleryMasonry}
                src={photo.imgURL}
                alt="concept-board"
              />
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </div>
    </div>
  );
}
