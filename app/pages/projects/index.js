import ProjectMenu from "../../components/projects/project_menu/ProjectMenu";
import ProjectsGallery from "../../components/projects/gallery/ProjectsGallery";

export default function Projects() {
  return (
    <div className="text-center margin-auto max-width padding-top-5">
      <h1 className="font-title title-size font-light letter-space-1">
        PROJECTOS
      </h1>
      <hr className="border-light-brown margin-auto opacity width-15" />
      <ProjectMenu />
      <ProjectsGallery />
    </div>
  );
}
