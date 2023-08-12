import homeStyles from "./home.module.css";
import SECTIONS from "./sections";
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
