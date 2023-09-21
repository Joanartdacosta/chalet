import projectStyles from "./projects.module.css";
import Link from "next/link";

export default function CardProjects(props) {
  return (
    <div className={projectStyles.projectTitleMenu}>
      <Link className={projectStyles.projectTitle} href={props.href}>
        <p>{props.title}</p>
      </Link>
    </div>
  );
}
