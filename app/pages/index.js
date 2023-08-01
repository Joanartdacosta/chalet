import Head from "next/head";
import ChaletEntrance from "../components/homepage/ChaletEntrance";
import Mission from "../components/homepage/Mission";

import homeStyles from "../components/homepage/home.module.css";
import layoutStyles from "../components/layout.module.css";
import HomeSections from "../components/homepage/HomeSections";

export default function Home() {
  return (
    <div>
      <Head />
      <section className={homeStyles.background}>
        <ChaletEntrance />
      </section>
      <section className={layoutStyles.informationSection}>
        <Mission />
        <HomeSections />
      </section>
    </div>
  );
}
