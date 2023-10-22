import layoutStyles from "../../components/layout/layout.module.css";
import ProjectsGallery from "../../components/projects/gallery/ProjectsGallery";

export default function Projects() {
  return (
    <div className={layoutStyles.informationSection}>
      <h1 className={layoutStyles.subtitles}>PROJECTOS</h1>
      <hr className={layoutStyles.hrSubtitle} />

      <ProjectsGallery />
    </div>
  );
}
