import createCard from "./createCardAdvantage";

import ICONS from "./icons";

export default function AdvantagesList() {
  return (
    <div className="display-flex wrap-section justify-center gap-2">
      {ICONS.map(createCard)}
    </div>
  );
}
