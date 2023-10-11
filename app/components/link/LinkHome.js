import Link from "next/link";

export default function LinkHome() {
  return (
    <div>
      <Link href="/">
        <img
          src="https://chalet-webapp.s3.amazonaws.com/Logotipo.png"
          alt="chalet-logo"
          className="icon"
        ></img>
      </Link>
    </div>
  );
}
