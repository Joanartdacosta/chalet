import projectStyles from "../projects.module.css";

export default function Category(category, { children }) {
  return (
    <div className={projectStyles.category}>
      <h1>{category}</h1>
      <div>{children}</div>
    </div>
  );
}
