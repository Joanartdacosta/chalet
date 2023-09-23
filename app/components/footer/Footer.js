import footerStyles from "./footer.module.css";
import Social from "../socials/Social";
import CurrentDate from "./CurrentDate";

function Footer() {
  return (
    <div className={footerStyles.footer}>
      <Social />
      <CurrentDate />
    </div>
  );
}

export default Footer;
