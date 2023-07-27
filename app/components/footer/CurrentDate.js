import styles from "./footer.module.css";

export default function CurrentDate() {
  const currentYear = new Date().getFullYear(),
    time = new Date().toLocaleTimeString();

  return (
    <div className={styles.footerTime}>
      <p className={styles.namesStyle}> CHALET © by Mariana Batista Ramadas</p>

      <p>
        {time} © {currentYear} developed by{" "}
        <a
          href="https://github.com/Joanartdacosta"
          className={styles.nameStylesLink}
        >
          Joana Costa
        </a>
      </p>
    </div>
  );
}
