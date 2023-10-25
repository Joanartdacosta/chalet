import createCard from "./createCardAdvantage";

import ICONS from "./icons";

export default function AdvantagesList() {
  return (
    <div className="display-flex wrap-section justify-center gap-3">
      {ICONS.map(createCard)}
    </div>
  );
}
