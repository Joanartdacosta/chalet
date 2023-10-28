import createCardProject from "./createCardProject";
import SERVICES from "../../services/services";

export default function ProjectMenu() {
  return <div>{SERVICES.map(createCardProject)}</div>;
}
