import CardService from "./CardService";

export default function createCardService(services) {
  return (
    <CardService
      id={services.id}
      imgURL={services.imgURL}
      title={services.title}
      description={services.description}
      detail1={services.detail1}
      detail2={services.detail2}
      detail3={services.detail3}
      detail4={services.detail4}
    />
  );
}
