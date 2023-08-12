import CardService from "./CardService";

export default function createCardService(Services) {
  return (
    <CardService
      id={Services.id}
      imgURL={Services.imgURL}
      title={Services.title}
    />
  );
}
