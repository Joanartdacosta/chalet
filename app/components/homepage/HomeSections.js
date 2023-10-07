import homeStyles from "./home.module.css";
import SECTIONS from "./sections";
import createCardHome from "./createCardHome";

export default function HomeSections() {
  return <div>{SECTIONS.map(createCardHome)}</div>;
}
