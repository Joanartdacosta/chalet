import Layout from "../../components/layout";
import About from "../../components/about/About";
import layoutStyles from "../../components/layout.module.css";
import Advantages from "../../components/about/Advantages";

export default function SobreMim() {
  return (
    <>
      <section className={layoutStyles.informationSection}>
        <Layout>
          <About />
          <Advantages />
        </Layout>
      </section>
    </>
  );
}
