import createCardProject from "./createCardProject";
import services from "../services/services";
import projectStyles from "./projects.module.css";

export default function ProjectMenu() {
  return (
    <div className={projectStyles.projectsMenu}>
      {services.map(createCardProject)}
    </div>
  );
}
