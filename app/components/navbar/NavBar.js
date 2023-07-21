import Link from "next/link";
import styles from "./navbar.module.css";

export default function NavBar() {
  return (
    <>
      <div className={styles.navBar}>
        <div className={styles.menuLeft}>
          <Link className={styles.navBarLink} href="/about">
            SOBRE MIM
          </Link>
          <Link className={styles.navBarLink} href="/contactos">
            CONTACTOS
          </Link>
        </div>
        <div className={styles.menuRight}>
          <Link className={styles.navBarLink} href="/services">
            SERVICOS
          </Link>
          <Link className={styles.navBarLink} href="/projetos">
            PROJETOS
          </Link>
        </div>
      </div>
    </>
  );
}
