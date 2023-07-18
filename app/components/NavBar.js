import Link from "next/link";

export default function NavBar() {
  return (
    <>
      <Link href="/about">Sobre mim</Link>
      <Link href="/contactos">Contactos</Link>
      <Link href="/services">Servicos</Link>
      <Link href="/projetos">Projetos</Link>
    </>
  );
}
