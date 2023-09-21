import CardProject from "./CardProject";

export default function createCardProject(services) {
  return (
    <CardProject key={services.id} id={services.id} title={services.title} />
  );
}
