import styles from "./homeservices.module.css";

export default function ChaletBackground() {
  return (
    <div>
      <h1 className={styles.chaletTitle}>CHALET</h1>
      <hr className={styles.hr} />
      <h1>DESIGN de INTERIORES</h1>
      <p>by</p>
      <h1 className={styles.designerName}>Mariana Batista Ramadas</h1>
    </div>
  );
}
