import projectsStyles from "../projects.module.css";
import CATEGORIES from "./categories";
import ALL from "../galleries/all";

export default function CategoryMenu(props) {
  function filterCategory(event) {
    const CATEGORY_CHECKED = event.target.value;

    const filtered = ALL.filter((category) =>
      category.category2.includes(CATEGORY_CHECKED)
    );

    props.setProjects(filtered);
  }

  return (
    <div className={projectsStyles.categorySection}>
      {CATEGORIES.map((category) => {
        return (
          <div className={projectsStyles.categoryElement} key={category.id}>
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
    </div>
  );
}
