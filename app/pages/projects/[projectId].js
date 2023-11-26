import { getByIdProject, getFeaturedProjects } from "../../helpers/api-util";
import CardGallery from "../../components/projects/gallery/CardGallery";
export default function ProjectDetails(props) {
  const tour = props.selectedTour;

  if (!tour) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>Project</h1>
      <CardGallery array={props.projects} />
    </div>
  );
}

export async function getStaticProps(context) {
  const projectId = context.params.projectId;

  const project = await getByIdProject(projectId);

  return {
    props: {
      selectedProject: project,
    },
    revalidate: 1800,
  };
}

export async function getStaticPaths() {
  const projects = await getFeaturedProjects();
  const paths = projects.map((project) => ({
    params: { projectId: project.id },
  }));

  return {
    paths: paths,
    fallback: false,
  };
}
