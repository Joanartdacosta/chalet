import Layout from "../../components/layout";
import layoutStyles from "../../components/layout.module.css";
import ServiceList from "../../components/services/ServicesList";

export default function Services() {
  return (
    <div className={layoutStyles.informationSection}>
      <Layout>
        <h1 className={layoutStyles.subtitles}>SERVICOS</h1>
        <ServiceList />
      </Layout>
    </div>
  );
}
