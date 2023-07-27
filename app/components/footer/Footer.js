import styles from "./footer.module.css";
import CurrentDate from "./CurrentDate";
import Social from "../socials/Social";

function Footer() {
  return (
    <div className={styles.footer}>
      <Social />
      <CurrentDate />
    </div>
  );
}

export default Footer;
