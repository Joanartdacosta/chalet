import Link from "next/link";
import utilStyles from "../styles/utils.module.css";
import styles from "./layout.module.css";

export default function NavBar() {
  return (
    <>
      <Link className={styles.navBar} href="/about">
        SOBRE MIM
      </Link>
      <Link className={styles.navBar} href="/contactos">
        CONTACTOS
      </Link>
      <Link className={styles.navBar} href="/services">
        SERVICOS
      </Link>
      <Link className={styles.navBar} href="/projetos">
        PROJETOS
      </Link>
    </>
  );
}
