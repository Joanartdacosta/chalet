import SOCIALS from "./socials";
import socialStyles from "./social.module.css";

export default function Social() {
  return (
    <div className={socialStyles.socialIcons}>
      {SOCIALS.map((social) => (
        <a href={social.href} key={social.id}>
          <img
            className={socialStyles.socialIcon}
            src={social.imgURL}
            alt={social.text}
          ></img>
        </a>
      ))}
    </div>
  );
}
