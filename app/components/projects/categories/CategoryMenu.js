import CATEGORIES from "./categories";
import ALL from "../galleries/all";
import GalleryFiltered from "../gallery/GalleryFiltered";
import { useState } from "react";

export default function CategoryMenu(props) {
  const [show, setShow] = useState(false);

  function filterCategory(event) {
    const CATEGORY_CHECKED = event.target.value;

    const filtered = ALL.filter((category) =>
      category.category2.includes(CATEGORY_CHECKED)
    );
    props.setCategories(filtered);
    setShow(true);
  }

  return (
    <div>
      <div>
        {CATEGORIES.map((category) => {
          return (
            <div key={category.id}>
              <input
                value={category.category}
                id={category.id}
                type="radio"
                name="option"
                onChange={filterCategory}
              />
              <label>{category.category}</label>
            </div>
          );
        })}
        <GalleryFiltered categories={props.categories} show={show} />
      </div>
    </div>
  );
}
