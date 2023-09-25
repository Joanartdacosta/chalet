import layoutStyles from "../../components/layout/layout.module.css";
import ProjectMenu from "../../components/projects/project_menu/ProjectMenu";
import ProjectsGallery from "../../components/projects/gallery/ProjectsGallery";
import CategoryMenu from "../../components/projects/categories/CategoryMenu";

export default function Projects() {
  return (
    <div className={layoutStyles.informationSection}>
      <h1 className={layoutStyles.subtitles}>PROJECTOS</h1>
      <div>
        <ProjectMenu />
        <CategoryMenu />
        <ProjectsGallery />
      </div>
    </div>
  );
}
