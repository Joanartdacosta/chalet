import Link from "next/link";

export default function NavBar() {
  return (
    <div className="wrap-section display-flex background-medium-brown padding-top-1-25 padding-bottom-1-25 media-display-grid">
      <div className="wrap-section display-grid media-display-grid">
        <Link
          className="font-title text-size link padding-right-1-25"
          href="/about"
        >
          SOBRE MIM
        </Link>
        <Link
          className="font-title text-size  link padding-right-1-25"
          href="/contacts"
        >
          CONTACTOS
        </Link>
      </div>
      <div className="display-grid media-display-grid">
        <Link
          className="font-title text-size  link padding-right-1-25"
          href="/services"
        >
          SERVIÇOS
        </Link>
        <Link
          className="font-title text-size link padding-right-1-25"
          href="/projects"
        >
          PROJETOS
        </Link>
      </div>
    </div>
  );
}
