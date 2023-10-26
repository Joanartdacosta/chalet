import ChaletEntrance from "../components/homepage/ChaletEntrance";
import Mission from "../components/homepage/Mission";
import HomeSections from "../components/homepage/HomeSections";

export default function Home() {
  return (
    <div>
      <div data-testid="chalet-entrance">
        <ChaletEntrance />
      </div>
      <div data-testid="mission" className="text-center margin-auto">
        <Mission />
        <HomeSections />
      </div>
    </div>
  );
}
