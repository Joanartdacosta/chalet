import footerStyles from "./footer.module.css";
import Social from "../socials/Social";

function Footer() {
  return (
    <div className={footerStyles.footer}>
      <Social />
    </div>
  );
}

export default Footer;
