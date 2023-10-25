import ChaletEntrance from "../components/homepage/ChaletEntrance";
import Mission from "../components/homepage/Mission";
import HomeSections from "../components/homepage/HomeSections";

export default function Home() {
  return (
    <div>
      <div data-testid="chalet-entrance">
        <ChaletEntrance />
      </div>
      <div data-testid="mission">
        <Mission />
        <HomeSections />
      </div>
    </div>
  );
}
