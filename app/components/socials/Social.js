import socials from "./socials";
import styles from "./social.module.css";

export default function Social() {
  return (
    <div className={styles.socialIcons}>
      {socials.map((social) => (
        <a href={social.href}>
          <img
            className={styles.socialIcon}
            src={social.url}
            alt={social.text}
          ></img>
        </a>
      ))}
    </div>
  );
}
