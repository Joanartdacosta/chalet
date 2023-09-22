import searchStyles from "./search.module.css";
import SERVICES from "../../services/services";

export default function ModalSearch(props) {
  function filterServices(event) {
    const LOWER_CASE_SEARCH = event.target.value.toLowerCase();

    const filtered = SERVICES.filter((category) =>
      category.title.toLowerCase().includes(LOWER_CASE_SEARCH)
    );

    props.setServices(filtered);
  }

  return (
    <div className={searchStyles.searchSection}>
      <input
        className={searchStyles.searchInput}
        type="text"
        placeholder="Procure pelo servico que pretende"
        onChange={filterServices}
      />
    </div>
  );
}
