import layoutStyles from "../../components/layout/layout.module.css";
import ProjectMenu from "../../components/projects/project_menu/ProjectMenu";
import ProjectsGallery from "../../components/projects/gallery/ProjectsGallery";
import CategoryMenu from "../../components/projects/categories/CategoryMenu";
import { useState } from "react";
import ALL from "../../components/projects/galleries/all";
import GalleryFiltered from "../../components/projects/gallery/GalleryFiltered";

export default function Projects() {
  const [categories, setCategories] = useState(ALL);

  return (
    <div className={layoutStyles.informationSection}>
      <h1 className={layoutStyles.subtitles}>PROJECTOS</h1>
      <ProjectMenu />
      <CategoryMenu setCategories={setCategories} />
      <GalleryFiltered categories={categories} />
      <ProjectsGallery />
    </div>
  );
}
