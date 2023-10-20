import Link from "next/link";

export default function CardProjects(props) {
  return (
    <div>
      <Link className="link font-text" href={props.href}>
        <p className="text-center">{props.title + " ·"}</p>
      </Link>
    </div>
  );
}
