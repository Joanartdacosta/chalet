import createCard from "./createCardAdvantage";
import ICONS_1 from "./icons_1";
import ICONS_2 from "./icons_2";

export default function AdvantagesList() {
  return (
    <div className=" padding-top-element">
      <div className=" justify-center wrap-section gap-50 padding-bottom-element">
        {ICONS_1.map(createCard)}
      </div>
      <div className="justify-center wrap-section gap-50">
        {ICONS_2.map(createCard)}
      </div>
    </div>
  );
}
