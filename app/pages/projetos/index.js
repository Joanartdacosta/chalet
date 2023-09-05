import layoutStyles from "../../components/layout/layout.module.css";
import ProjectMenu from "../../components/projects/ProjectMenu";
import HouseMenu from "../../components/projects/HouseMenu";
import COMPLEMENTARY from "../../components/services/galleries/complementary";
import ONLINE from "../../components/services/galleries/online";
import DESIGN from "../../components/services/galleries/design";
import REMODELING from "../../components/services/galleries/remodeling";
import HOME_STANGING from "../../components/services/galleries/homeStaging";
import DECOR from "../../components/services/galleries/decor";

import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

export default function Projects() {
  return (
    <div className={layoutStyles.informationSection}>
      <h1 className={layoutStyles.subtitles}>PROJECTOS</h1>
      <ProjectMenu />

      <HouseMenu />

      <div id={"online"}>
        <p>Online</p>
        <ResponsiveMasonry>
          <Masonry columnsCount={3}>
            {ONLINE.map((photo) => (
              <img src={photo.imgURL} alt="complementary-photo" />
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </div>

      <div id={"complementar"}>
        <p>Complementar</p>
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
          <Masonry>
            {COMPLEMENTARY.map((photo) => (
              <img src={photo.imgURL} alt="complementary-photo" />
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </div>

      <div id={"design"}>
        <p>Design</p>
        <ResponsiveMasonry>
          <Masonry columnsCount={3}>
            {DESIGN.map((photo) => (
              <img src={photo.imgURL} alt="design-photo" />
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </div>

      <div id={"decor"}>
        <p>Decoracao</p>
        <ResponsiveMasonry>
          <Masonry columnsCount={3}>
            {DECOR.map((photo) => (
              <img src={photo.imgURL} alt="decor-photo" />
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </div>

      <div id={"remodeling"}>
        <p>Staging</p>
        <ResponsiveMasonry>
          <Masonry columnsCount={3}>
            {REMODELING.map((photo) => (
              <img src={photo.imgURL} alt="remodeling-photo" />
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </div>

      <div id={"staging"}>
        <p>Staging</p>
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
          <Masonry>
            {HOME_STANGING.map((photo) => (
              <img src={photo.imgURL} alt="home-staging-photo" />
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </div>
    </div>
  );
}
