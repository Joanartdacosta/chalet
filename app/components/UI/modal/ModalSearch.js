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
    <div className="padding-top-section margin-auto max-width padding-bottom-element">
      <input
        className="width-100 padding-10 font-text border-radius"
        type="text"
        placeholder="Procure pelo servico que pretende"
        onChange={filterServices}
      />
    </div>
  );
}
