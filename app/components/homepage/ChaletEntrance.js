import homeStyles from "./home.module.css";

export default function ChaletBackground() {
  return (
    <div className={homeStyles.background}>
      <h1 className={homeStyles.chaletTitle}>CHALET</h1>
      <hr className={homeStyles.hr} />
      <h1>DESIGN de INTERIORES</h1>
      <p>by</p>
      <h1 className={homeStyles.designerName}>Mariana Batista Ramadas</h1>
    </div>
  );
}
