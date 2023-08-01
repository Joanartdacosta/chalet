import footerStyles from "./footer.module.css";
import CurrentDate from "./CurrentDate";
import Social from "../socials/Social";

function Footer() {
  return (
    <div className={footerStyles.footer}>
      <Social />
      <CurrentDate />
    </div>
  );
}

export default Footer;
