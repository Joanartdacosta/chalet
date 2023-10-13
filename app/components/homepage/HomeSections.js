import SECTIONS from "./sections";
import createCardHome from "./createCardHome";

export default function HomeSections() {
  return (
    <div className="wrap-section justify-center padding-top-section gap">
      {SECTIONS.map(createCardHome)}
    </div>
  );
}
