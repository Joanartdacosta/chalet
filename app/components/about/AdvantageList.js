import createCard from "./createCardAdvantage";
import ICONS_1 from "./icons_1";
import ICONS_2 from "./icons_2";

export default function AdvantagesList() {
  return (
    <div className="padding-cards padding-top-section">
      <div className=" justify-center wrap-section gap padding-bottom-element">
        {ICONS_1.map(createCard)}
      </div>
      <div className=" justify-center wrap-section gap">
        {ICONS_2.map(createCard)}
      </div>
    </div>
  );
}
