import Link from "next/link";

export default function CardHome(props) {
  return (
    <div className="display-flex justify-center shadow-dark padding-2 width-15 height-21-2">
      <div>
        {" "}
        <img
          className="object-cover width-18 height-15"
          src={props.imgURL}
          alt={props.title}
        />
        <h1 className="font-title text-center font-size-11 padding-bottom-1-25 padding-top-1-25">
          {props.title}
        </h1>
        <Link href={props.href} key={props.id}>
          <button className="font-title text-center font-size-08 no-border background-green width-100 height-3 padding-05 link">
            <p>{props.description}</p>
          </button>
        </Link>
      </div>
    </div>
  );
}
