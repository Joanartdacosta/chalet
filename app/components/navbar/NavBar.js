import Link from "next/link";

export default function NavBar() {
  return (
    <div className="navbar-background font-subtitle width-100 wrap-section">
      <div className=" wrap-section navbar-menu">
        <Link className="link padding-icon" href="/sobre">
          SOBRE MIM
        </Link>
        <Link className="link padding-icon" href="/contactos">
          CONTACTOS
        </Link>
      </div>
      <div className="wrap-section navbar-menu flex-end">
        <Link className="link padding-icon" href="/servicos">
          SERVICOS
        </Link>
        <Link className="link padding-icon" href="/projetos">
          PROJETOS
        </Link>
      </div>
    </div>
  );
}
