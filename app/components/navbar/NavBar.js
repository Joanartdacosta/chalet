import Link from "next/link";

export default function NavBar() {
  return (
    <div className="wrap-section display-flex background-medium-brown padding-top-1-25 padding-bottom-1-25 media-display-grid media-padding-bottom">
      <div className="wrap-section display-grid media-display-grid">
        <Link
          className="font-title font-size-11 link padding-right-1-25 media-font-text"
          href="/about"
        >
          SOBRE MIM
        </Link>
        <Link
          className="font-title font-size-11  link padding-right-1-25 media-font-text"
          href="/contacts"
        >
          CONTACTOS
        </Link>
      </div>
      <div className="display-grid media-display-grid">
        <Link
          className="font-title font-size-11  link padding-right-1-25 media-font-text"
          href="/services"
        >
          SERVIÇOS
        </Link>
        <Link
          className="font-title font-size-11 link padding-right-1-25 media-font-text"
          href="/projects"
        >
          PROJETOS
        </Link>
      </div>
    </div>
  );
}
