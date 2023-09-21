import COMPLEMENTARY from "../services/galleries/complementary";

import projectStyles from "./projects.module.css";

export default function HouseMenu() {
  function FilterPlace() {
    Filter(COMPLEMENTARY, COMPLEMENTARY.category);
  }

  return (
    <div>
      <div className={projectStyles.buttonMenu}>
        <button className={projectStyles.buttonPlace}>Cozinha</button>
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
