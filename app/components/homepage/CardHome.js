import Link from "next/link";

export default function CardHome(props) {
  return (
    <div className="display-flex justify-center shadow-dark padding-2 width-18 height-21-2 media-with-card">
      <Link className="link" href={props.href} key={props.id}>
        {" "}
        <img
          className="object-cover width-18 height-15 media-with-card"
          src={props.imgURL}
          alt={props.title}
        />
        <h1 className="font-title text-center font-size-11 padding-bottom-1-25 padding-top-1-25 media-font-text media-padding-bottom media-padding-top">
          {props.title}
        </h1>
        <button className="font-title text-center font-size-08 no-border background-green width-100 height-2-8 padding-05">
          <p>{props.description}</p>
        </button>
      </Link>
    </div>
  );
}
