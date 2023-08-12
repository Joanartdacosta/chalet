import homeStyles from "./home.module.css";
import Sections from "./sections";
import createCardHome from "./createCardHome";

export default function HomeSections() {
  return (
    <div>
      <div className={homeStyles.homeSections}>
        {Sections.map(createCardHome)}
      </div>
    </div>
  );
}
