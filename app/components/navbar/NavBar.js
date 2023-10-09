import Link from "next/link";

export default function NavBar() {
  return (
    <div className="background">
      <div className="display">
        <Link className="link" href="/sobre">
          SOBRE MIM
        </Link>
        <Link className="link" href="/contactos">
          CONTACTOS
        </Link>
      </div>
      <div>
        <Link className="link" href="/servicos">
          SERVICOS
        </Link>
        <Link className="link" href="/projetos">
          PROJETOS
        </Link>
      </div>
    </div>
  );
}
