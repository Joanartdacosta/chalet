import ProjectMenu from "../../components/projects/project_menu/ProjectMenu";
import ProjectsGallery from "../../components/projects/gallery/ProjectsGallery";
import { useState } from "react";
import ALL from "../../components/projects/galleries/all";

export default function Projects() {
  const [categories, setCategories] = useState(ALL);

  return (
    <div className="padding-top-section">
      <h1 className="font-title text-center">PROJECTOS</h1>
      <hr className="hr hr-subtitle margin-auto " />
      <ProjectMenu />
      <ProjectsGallery />
    </div>
  );
}
