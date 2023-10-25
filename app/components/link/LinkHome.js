import Link from "next/link";

export default function LinkHome() {
  return (
    <div className="wrap-section display-flex justify-center padding-bottom-5 padding-top-5">
      <Link href="/">
        <img
          src="https://chalet-webapp.s3.amazonaws.com/Logotipo.png"
          alt="chalet-logo"
          className="width-5"
        ></img>
      </Link>
    </div>
  );
}
