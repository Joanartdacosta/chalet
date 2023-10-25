import ProjectMenu from "../../components/projects/project_menu/ProjectMenu";
import ProjectsGallery from "../../components/projects/gallery/ProjectsGallery";
import { useState } from "react";
import ALL from "../../components/projects/galleries/all";

export default function Projects() {
  const [categories, setCategories] = useState(ALL);

  return (
    <div className="text-center margin-auto max-width">
      <h1 className="font-title title-size font-light letter-space-1">
        PROJECTOS
      </h1>
      <hr className="border-light-brown margin-auto opacity width-15" />
      <ProjectMenu />
      <ProjectsGallery />
    </div>
  );
}
