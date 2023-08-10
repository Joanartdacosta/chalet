import CardProject from "./CardProject";

export default function createCardProject(SERVICES) {
  return <CardProject id={SERVICES.id} title={SERVICES.title} />;
}
