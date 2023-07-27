// import ServicesList from "";
import Layout from "../../components/layout";
import layoutStyles from "../../components/layout.module.css";

export default function Services() {
  return (
    <div className={layoutStyles.informationSection}>
      <Layout>
        <h1 className={layoutStyles.subtitles}>SERVICOS</h1>

        {/* <ServicesList services={SERVICES} /> */}
      </Layout>
    </div>
  );
}
