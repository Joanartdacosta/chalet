import layoutStyles from "../../components/layout/layout.module.css";
import ServiceList from "../../components/services/ServicesList";
import Search from "../../components/UI/modal/Search";

export default function Services() {
  return (
    <div className={layoutStyles.informationSection}>
      <h1 className={layoutStyles.subtitles}>SERVICOS</h1>
      <Search />
      <ServiceList />
    </div>
  );
}
