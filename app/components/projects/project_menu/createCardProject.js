import CardProject from "./CardProject";

export default function createCardProject(services) {
  return (
    <CardProject id={services.id} title={services.title} href={services.href} />
  );
}