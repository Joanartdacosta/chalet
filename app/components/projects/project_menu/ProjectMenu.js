import createCardProject from "./createCardProject";
import SERVICES from "../../services/services";
import projectStyles from "../projects.module.css";

export default function ProjectMenu() {
  return (
    <div className={projectStyles.projectsMenu}>
      {SERVICES.map(createCardProject)}
    </div>
  );
}
