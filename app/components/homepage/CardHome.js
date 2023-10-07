import Link from "next/link";

export default function CardHome(props) {
  return (
    <div>
      <Link href={props.href} key={props.id}>
        {" "}
        <img src={props.imgURL} alt={props.title} />
        <div>
          <div>
            <h1>{props.title}</h1>

            <button>
              <p>{props.description}</p>
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
}
