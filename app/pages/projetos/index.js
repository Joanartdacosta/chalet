import layoutStyles from "../../components/layout/layout.module.css";
import ProjectMenu from "../../components/projects/project_menu/project_menu/ProjectMenu";
import ProjectsGallery from "../../components/projects/gallery/ProjectsGallery";
import Link from "next/link";
import projectStyles from "../../components/projects/projects.module.css";

export default function Projects() {
  return (
    <div className={layoutStyles.informationSection}>
      <h1 className={layoutStyles.subtitles}>PROJECTOS</h1>
      <ProjectMenu />

      <div className={projectStyles.conceptBoard}>
        <Link className={projectStyles.projectTitle} href={"#concept-board"}>
          <p>Concept Boards</p>
        </Link>
      </div>
      <ProjectsGallery />
    </div>
  );
}
