import searchStyle from "./search.module.css";
import { useState } from "react";

export default function ModalSearch() {
  const [value, setValue] = useState("");

  function catchValue(event) {
    setValue(event.target.value);
  }

  return (
    <div>
      <input
        className={searchStyle.searchInput}
        type="text"
        placeholder="Procure pelo servico que pretende"
        onChange={catchValue}
      />
      <button className={searchStyle.searchButton}>Procurar Servico</button>
    </div>
  );
}
