import layoutStyles from "../../components/layout/layout.module.css";
import ProjectMenu from "../../components/projects/project_menu/ProjectMenu";
import ProjectsGallery from "../../components/projects/gallery/ProjectsGallery";
import { useState } from "react";
import ALL from "../../components/projects/galleries/all";

export default function Projects() {
  const [categories, setCategories] = useState(ALL);

  return (
    <div className={layoutStyles.informationSection}>
      <h1 className={layoutStyles.subtitles}>PROJECTOS</h1>
      <hr className={layoutStyles.hrSubtitle} />
      <ProjectMenu />
      <ProjectsGallery />
    </div>
  );
}
