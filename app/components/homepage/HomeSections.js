import SECTIONS from "./sections";
import createCardHome from "./createCardHome";

export default function HomeSections() {
  return (
    <div className="wrap-section justify-center gap-50">
      {SECTIONS.map(createCardHome)}
    </div>
  );
}
