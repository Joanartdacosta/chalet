import ProjectsGallery from "../../components/projects/gallery/ProjectsGallery";

export default function Projects() {
  return (
    <div className="text-center margin-auto max-width padding-top-5">
      <h1 className="font-title font-size-2 font-light letter-space-02">
        PROJETOS
      </h1>
      <hr className="border-light-brown margin-auto opacity width-15" />

      <ProjectsGallery />
    </div>
  );
}
