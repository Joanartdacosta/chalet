import { useState } from "react";
import searchStyles from "./search.module.css";
import ModalSearch from "./ModalSearch";

export default function Search(props) {
  const [searchIsOpen, setSearchIsOpen] = useState(false);

  function handleSearch() {
    setSearchIsOpen(true);
  }

  function handleClose() {
    setSearchIsOpen(false);
  }

  return (
    <div className={searchStyles.searchSection}>
      <img
        src="https://chalet-webapp.s3.amazonaws.com/icons/969259_magnifier_search_seo_magnifying_zoom_icon.png"
        alt="search"
        className={searchStyles.image}
        onClick={handleSearch}
      />
      {searchIsOpen && (
        <ModalSearch setServices={props.setServices} onClick={handleClose} />
      )}
    </div>
  );
}
