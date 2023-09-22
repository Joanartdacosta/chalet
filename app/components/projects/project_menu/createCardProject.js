import generateRandomKey from "../../utils/generate_random_key";
import CardProjects from "./CardProjects";

export default function createCardProject(services) {
  return (
    <CardProjects
      key={services.id}
      id={services.id}
      title={services.title}
      href={services.href}
    />
  );
}
