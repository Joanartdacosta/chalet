import SECTIONS from "./sections";
import createCardHome from "./createCardHome";

export default function HomeSections() {
  return (
    <div className="wrap-section display-flex justify-center padding-top-5 gap-3">
      {SECTIONS.map(createCardHome)}
    </div>
  );
}
