import createCard from "./createCardAdvantage";
import aboutStyles from "./aboutme.module.css";
import Icons1 from "./icons1";
import Icons2 from "./icons2";

export default function AdvantagesList() {
  return (
    <div>
      <div className={aboutStyles.advantagesSections}>
        {Icons1.map(createCard)}
      </div>
      <div className={aboutStyles.advantagesSections}>
        {Icons2.map(createCard)}
      </div>
    </div>
  );
}
