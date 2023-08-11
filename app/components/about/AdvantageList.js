import createCard from "./createCardAdvantage";
import aboutStyles from "./aboutme.module.css";
import icons1 from "./icons1";
import icons2 from "./icons2";

export default function AdvantagesList() {
  return (
    <div>
      <div className={aboutStyles.advantagesSections}>
        {icons1.map(createCard)}
      </div>
      <div className={aboutStyles.advantagesSections}>
        {icons2.map(createCard)}
      </div>
    </div>
  );
}
