import AdvantagesList from "./AdvantageList";
import aboutStyles from "./aboutme.module.css";

export default function Advantages() {
  return (
    <div>
      <div className={aboutStyles.advantages}>
        <h2 className={aboutStyles.advantagesTitle}>
          Vantagens de contratar um
        </h2>
        <h2 className={aboutStyles.advantagesDesigner}>Designer</h2>
      </div>
      <AdvantagesList />
    </div>
  );
}
