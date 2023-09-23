import layoutStyles from "../layout/layout.module.css";
import Link from "next/link";

export default function LinkHome() {
  return (
    <div className={layoutStyles.backToHome}>
      <Link href="/">
        <img
          src="https://chalet-webapp.s3.amazonaws.com/Logotipo.png"
          alt="chalet-logo"
          className={layoutStyles.logo}
        ></img>
      </Link>
    </div>
  );
}
