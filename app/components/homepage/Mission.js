import homeStyles from "./home.module.css";
import layoutStyles from "../layout.module.css";

export default function Mission() {
  return (
    <div>
      <div className={homeStyles.missionSentence}>
        <h1 className={layoutStyles.differentTitle}>Missao</h1>
        <h2>Cada projeto é o início de uma nova história!</h2>
        <div className={homeStyles.missionSentenceBlock}>
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
            className={homeStyles.missionSentenceBlockImg}
            src="https://chalet-webapp.s3.amazonaws.com/deco-articles02.png"
            alt="chalet-icon01"
          />
        </div>
      </div>
    </div>
  );
}
