import createCard from "./createCardAdvantage";
import aboutStyles from "./aboutme.module.css";
import ICONS_1 from "./icons_1";
import ICONS_2 from "./icons_2";

export default function AdvantagesList() {
  return (
    <div>
      <div className={aboutStyles.advantagesSections}>
        {ICONS_1.map(createCard)}
      </div>
      <div className={aboutStyles.advantagesSections}>
        {ICONS_2.map(createCard)}
      </div>
    </div>
  );
}
