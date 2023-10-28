import SOCIALS from "./socials";

export default function Social() {
  return (
    <div className="margin-auto padding-top-1-25">
      {SOCIALS.map((social) => (
        <a href={social.href} key={social.id}>
          <img
            className="width-3 padding-1 link"
            src={social.imgURL}
            alt={social.text}
          ></img>
        </a>
      ))}
    </div>
  );
}
