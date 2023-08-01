import About from "../../components/about/About";
import layoutStyles from "../../components/layout.module.css";
import Advantages from "../../components/about/Advantages";

export default function SobreMim() {
  return (
    <div className={layoutStyles.informationSection}>
      <About />
      <Advantages />
    </div>
  );
}
