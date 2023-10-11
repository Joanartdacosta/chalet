import Link from "next/link";

export default function CardHome(props) {
  return (
    <div>
      <Link className="link" href={props.href} key={props.id}>
        {" "}
        <img className="image-service" src={props.imgURL} alt={props.title} />
        <div>
          <div>
            <h1 className="font-subtitle">{props.title}</h1>

            <button className="button button-green">
              <p className="font-text">{props.description}</p>
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
}
