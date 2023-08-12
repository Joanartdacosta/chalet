import projectStyles from "./projects.module.css";
import Link from "next/link";

export default function CardProjects(props) {
  return (
    <div className={projectStyles.projectTitleMenu}>
      <p>{props.title}</p>
    </div>
  );
}
