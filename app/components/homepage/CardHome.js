import Link from "next/link";

export default function CardHome(props) {
  return (
    <div className="padding-cards justify-center width-card">
      <Link className="link" href={props.href} key={props.id}>
        {" "}
        <img className="image-service" src={props.imgURL} alt={props.title} />
        <div>
          <div>
            <p className="font-title text-center padding-bottom-element">
              {props.title}
            </p>

            <button className="button button-green width-100 ">
              <p className="font-subtitle">{props.description}</p>
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
}
