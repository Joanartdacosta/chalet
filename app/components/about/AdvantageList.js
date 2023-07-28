import createCard from "./createCardAdvantage";
import aboutStyles from "./aboutme.module.css";
import ICONS1 from "./ICONS1";
import ICONS2 from "./ICONS2";

export default function AdvantagesList() {
  return (
    <div>
      <div className={aboutStyles.advantagesSections}>
        {ICONS1.map(createCard)}
      </div>
      <div className={aboutStyles.advantagesSections}>
        {ICONS2.map(createCard)}
      </div>
    </div>
  );
}
