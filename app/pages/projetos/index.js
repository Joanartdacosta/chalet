// import ProjectsList from "..."
// import PROJECTS
import Layout from "../../components/layout";
import layoutStyles from "../../components/layout.module.css";

export default function Projects() {
  return (
    <section className={layoutStyles.informationSection}>
      <Layout>
        <h1 className={layoutStyles.subtitles}>PROJECTOS</h1>
        {/* <ProjectsList ProjectsGallery={PROJECTS} /> */}
      </Layout>
    </section>
  );
}
