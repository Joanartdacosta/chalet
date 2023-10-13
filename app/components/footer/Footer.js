import Social from "../socials/Social";
import CurrentDate from "./CurrentDate";

function Footer() {
  return (
    <div className="font-text footer-background width-100 text-center">
      <Social />
      <CurrentDate />
    </div>
  );
}

export default Footer;
