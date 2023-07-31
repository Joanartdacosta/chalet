import homeStyles from "./home.module.css";
import SECTIONS from "./SECTIONS";
import createCardHome from "./createCardHome";

export default function HomeSections() {
  return (
    <div>
      <div className={homeStyles.homeSections}>
        {SECTIONS.map(createCardHome)}
      </div>
    </div>
  );
}
