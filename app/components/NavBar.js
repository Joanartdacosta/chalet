import Link from "next/link";
import utilStyles from "../styles/utils.module.css";
import styles from "./layout.module.css";

export default function NavBar() {
  return (
    <>
      <Link className={styles.navBar} href="/about">
        Sobre mim
      </Link>
      <Link className={styles.navBar} href="/contactos">
        Contactos
      </Link>
      <Link className={styles.navBar} href="/services">
        Servicos
      </Link>
      <Link className={styles.navBar} href="/projetos">
        Projetos
      </Link>
    </>
  );
}
