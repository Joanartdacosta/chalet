import createCardProject from "./createCardProject";
import SERVICES from "../../services/services";

export default function ProjectMenu() {
  return (
    <div className="wrap-section gap-10 max-width justify-center margin-auto padding-top-section padding-bottom-section">
      {SERVICES.map(createCardProject)}
    </div>
  );
}
