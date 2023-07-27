import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
import ChaletEntrance from "../components/homepage/ChaletEntrance";
import Mission from "../components/homepage/Mission";

export default function Home() {
  return (
    <div>
      <Head />
      <section className={utilStyles.background}>
        <Layout home>
          <ChaletEntrance />
        </Layout>
      </section>
      <section>
        <Mission />
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
