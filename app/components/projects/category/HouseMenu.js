import Category from "./Category";
import projectStyles from "../projects.module.css";
import COMPLEMENTARY from "../../services/galleries/complementary";
import ONLINE from "../../services/galleries/online";
import DESIGN from "../../services/galleries/design";
import REMODELING from "../../services/galleries/remodeling";
import HOME_STANGING from "../../services/galleries/homeStaging";
import DECOR from "../../services/galleries/decor";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

export default function HouseMenu() {
  const categories = ["cozinha", "sala", "quarto", "casa de banho"];

  function filterCategory(id) {
    return COMPLEMENTARY.filter((photo) => photo.category === categories[id]);
  }

  function handleCategory() {
    return (
      <div>
        <Category category="cozinha">
          {GALLERY_SERVICES.map((gallery) => (
            <section className={gallery.id}>
              <h1>{gallery.title}</h1>
              <ResponsiveMasonry
                columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
              >
                <Masonry>
                  {filterCategory[id].map((photo) => (
                    <img src={photo.imgURL} alt={gallery.title} />
                  ))}
                </Masonry>
              </ResponsiveMasonry>
            </section>
          ))}
        </Category>
      </div>
    );
  }

  return (
    <div>
      <div className={projectStyles.buttonMenu}>
        <button className={projectStyles.buttonPlace} onClick={handleCategory}>
          Cozinha
        </button>
        <button className={projectStyles.buttonPlace}>Sala</button>
        <button className={projectStyles.buttonPlace}>Quarto</button>
        <button className={projectStyles.buttonPlace}>Casa de Banho</button>
      </div>
      <div className={projectStyles.buttonMenu}>
        <button className={projectStyles.buttonPlace}>Comerciais</button>
        <button className={projectStyles.buttonPlace}>MoodBoards</button>
        <button className={projectStyles.buttonPlace}>ConceptBoards</button>
      </div>
    </div>
  );
}
