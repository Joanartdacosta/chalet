import CardService from "./CardService";

export default function createCardService(services) {
  return (
    <CardService
      id={services.id}
      imgURL={services.imgURL}
      title={services.title}
    />
  );
}
