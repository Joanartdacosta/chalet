import CardService from "./CardService";

export default function createCardService(SERVICES) {
  return (
    <CardService
      id={SERVICES.id}
      imgURL={SERVICES.imgURL}
      title={SERVICES.title}
    />
  );
}
