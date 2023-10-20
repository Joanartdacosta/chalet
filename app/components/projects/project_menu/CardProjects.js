import Link from "next/link";

export default function CardProjects(props) {
  return (
    <div>
      <Link className="link font-text" href={props.href}>
        <p>{props.title + " ·"}</p>
      </Link>
    </div>
  );
}
