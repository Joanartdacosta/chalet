import Head from "next/head";
import Layout from "../components/layout";
import { getSortedPostsData } from "../lib/posts";
import ChaletEntrance from "../components/homepage/ChaletEntrance";
import Mission from "../components/homepage/Mission";
import styles from "../components/homepage/homeservices.module.css";

export default function Home() {
  return (
    <div>
      <Head />
      <section className={styles.background}>
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
