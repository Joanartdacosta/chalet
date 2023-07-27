import Head from "next/head";
import Layout from "../components/layout";
import { getSortedPostsData } from "../lib/posts";
import ChaletEntrance from "../components/homepage/ChaletEntrance";
import Mission from "../components/homepage/Mission";

import HomeSections from "../components/homepage/HomeSections";
import homeStyles from "../components/homepage/home.module.css";
import layoutStyles from "../components/layout.module.css";

export default function Home() {
  return (
    <div>
      <Head />
      <section className={homeStyles.background}>
        <Layout home>
          <ChaletEntrance />
        </Layout>
      </section>
      <section className={layoutStyles.informationSection}>
        <Mission />
        <HomeSections />
      </section>
    </div>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
