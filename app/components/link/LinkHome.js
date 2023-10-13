import Link from "next/link";

export default function LinkHome() {
  return (
    <div className="wrap-section justify-center padding-bottom-section padding-top-section">
      <Link href="/">
        <img
          className="logo"
          src="https://chalet-webapp.s3.amazonaws.com/Logotipo.png"
          alt="chalet-logo"
        ></img>
      </Link>
    </div>
  );
}
