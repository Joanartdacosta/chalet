import React from "react";

import { getFeaturedProjects } from "../../../helpers/api-util";
import CardGallery from "./CardGallery";

export default function ProjectsGallery(props) {
  return (
    <div className="padding-top-5">
      <CardGallery gallery={props.projects} />
    </div>
  );
}

export async function getStaticProps() {
  const getFeaturedProject = await getFeaturedProjects();

  return {
    props: {
      projects: getFeaturedProject,
    },
    revalidate: 1800,
  };
}
