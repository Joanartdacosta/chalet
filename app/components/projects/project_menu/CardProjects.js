import Link from "next/link";

export default function CardProjects(props) {
  return (
    <div>
      <Link href={props.href}>
        <p>{props.title}</p>
      </Link>
    </div>
  );
}
