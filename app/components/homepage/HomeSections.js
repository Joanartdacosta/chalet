import homeStyles from "./home.module.css";
import sections from "./sections";
import createCardHome from "./createCardHome";

export default function HomeSections() {
  return (
    <div>
      <div className={homeStyles.homeSections}>
        {sections.map(createCardHome)}
      </div>
    </div>
  );
}
