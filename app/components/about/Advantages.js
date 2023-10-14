import AdvantagesList from "./AdvantageList";
import aboutStyles from "./aboutme.module.css";

export default function Advantages() {
  return (
    <div>
      <div className="text-center">
        <h2 className="font-title">Vantagens de contratar um</h2>
        <h2 className="windsong-subtitle">Designer</h2>
      </div>
      <AdvantagesList />
    </div>
  );
}
