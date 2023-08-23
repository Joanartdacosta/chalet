import searchStyle from "./search.module.css";
import { useState } from "react";

export default function ModalSearch() {
  const [value, setValue] = useState("");

  function catchValue(event) {
    setValue(event.target.value);
  }

  return (
    <div className={searchStyle.searchSection}>
      <input type="text" placeholder="Servico" onChange={catchValue} />;
    </div>
  );
}
