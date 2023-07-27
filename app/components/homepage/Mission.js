import styles from "./homeservices.module.css";

export default function Mission() {
  return (
    <div>
      <div className={styles.missionSentence}>
        <h1 className={styles.missionTitle}>Missao</h1>
        <h2>Cada projeto é o início de uma nova história!</h2>
        <div className={styles.missionSentenceBlock}>
          <p>
            O Chalet - Design de Interiores nasce com a finalidade de trazer
            ideias e soluções aos espaços dos seus clientes, quer sejam eles
            residenciais ou comerciais, que combinem três premissas essenciais -
            o conforto, a estética e a funcionalidade. Acreditamos que
            conseguimos tornar realidade o espaço que o cliente idealizou, tendo
            sempre em conta a sua identidade e objetivos adequados à sua vida e
            à da sua família.
          </p>
          <img
            className={styles.missionSentenceBlockImg}
            src="https://chalet-webapp.s3.amazonaws.com/deco-articles02.png"
            alt="chalet-icon01"
          />
        </div>
      </div>
    </div>
  );
}
