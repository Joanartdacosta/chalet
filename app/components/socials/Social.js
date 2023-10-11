import SOCIALS from "./socials";

export default function Social() {
  return (
    <div>
      {SOCIALS.map((social) => (
        <a href={social.href} key={social.id}>
          <img className="icon" src={social.imgURL} alt={social.text}></img>
        </a>
      ))}
    </div>
  );
}
