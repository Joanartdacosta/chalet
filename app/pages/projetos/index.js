import layoutStyles from "../../components/layout.module.css";
import ProjectMenu from "../../components/projects/ProjectMenu";

export default function Projects() {
  return (
    <div className={layoutStyles.informationSection}>
      <h1 className={layoutStyles.subtitles}>PROJECTOS</h1>
      <ProjectMenu />
    </div>
  );
}
