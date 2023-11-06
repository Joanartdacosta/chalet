import SECTIONS from "./sections";
import createCardHome from "./createCardHome";

export default function HomeSections() {
  return (
    <div className="wrap-section display-flex flex-column justify-center padding-top-5 gap-2">
      {SECTIONS.map(createCardHome)}
    </div>
  );
}
