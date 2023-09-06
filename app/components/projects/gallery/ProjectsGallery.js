import React from "react";
// import COMPLEMENTARY from "../../services/galleries/complementary";
// import ONLINE from "../../services/galleries/online";
// import DESIGN from "../../services/galleries/design";
// import HOME_STANGING from "../../services/galleries/homeStaging";
// import DECOR from "../../services/galleries/decor";
// import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import projectStyles from "../projects.module.css";
import createCardProject from "../project_menu/createCardProject";
import SERVICES from "../../services/services";
import { useState } from "react";
import ALL from "../../services/galleries/all";
//https://www.altogic.com/blog/passing-data-from-parent-to-child-in-react
export default function ProjectsGallery() {
  const [category1, setCategory1] = useState("");
  const [category2, setCategory2] = useState("");

  function filterImages() {
    const images = ALL.filter((image) => {
      if (image.category1 === category1 && image.category2 === category2) {
        return image;
      }
    });

    console.log(images);
  }

  function handleCategory1(event) {
    setCategory1(event.target.value);

    filterImages();
  }

  function handleCategory2(event) {
    setCategory2(event.target.value);

    filterImages();
  }

  return (
    <div>
      <div>
        <div className={projectStyles.buttonMenu}>
          <button
            value="consultoria"
            className={projectStyles.buttonPlace}
            onClick={handleCategory1}
          >
            Consultoria
          </button>
          <button
            value="consultoriaOnline"
            className={projectStyles.buttonPlace}
            onClick={handleCategory1}
          >
            Consultoria Online
          </button>
        </div>
      </div>

      <div>
        <div className={projectStyles.buttonMenu}>
          <button
            value="cozinha"
            className={projectStyles.buttonPlace}
            onClick={handleCategory2}
          >
            Cozinha
          </button>
          <button
            value="sala"
            className={projectStyles.buttonPlace}
            onClick={handleCategory2}
          >
            Sala
          </button>
        </div>
      </div>
    </div>
  );
}
