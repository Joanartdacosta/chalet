import ChaletEntrance from "../components/homepage/ChaletEntrance";
import Mission from "../components/homepage/Mission";
import HomeSections from "../components/homepage/HomeSections";
import homeStyles from "../components/homepage/home.module.css";
import layoutStyles from "../components/layout/layout.module.css";

export default function Home() {
  return (
    <div>
      <div className={homeStyles.background} data-testid="chalet-entrance">
        <ChaletEntrance />
      </div>
      <div className={layoutStyles.informationSection} data-testid="mission">
        <Mission />
        <HomeSections />
      </div>
    </div>
  );
}
