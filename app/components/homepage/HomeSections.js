import SECTIONS from "./sections";
import createCardHome from "./createCardHome";

export default function HomeSections() {
  return (
    <div className=" justify-center padding-top-5 media-flex padding-top-5 gap-2 margin-auto">
      {SECTIONS.map(createCardHome)}
    </div>
  );
}
