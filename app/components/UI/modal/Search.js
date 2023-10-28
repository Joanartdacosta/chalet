import { useState } from "react";

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
    <div>
      <img
        src="https://chalet-webapp.s3.amazonaws.com/icons/969259_magnifier_search_seo_magnifying_zoom_icon.png"
        alt="search"
        onClick={handleSearch}
      />
      {searchIsOpen && (
        <ModalSearch setServices={props.setServices} onClick={handleClose} />
      )}
    </div>
  );
}
