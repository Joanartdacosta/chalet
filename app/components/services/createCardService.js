import CardService from "./CardService";

export default function createCardService(SERVICES) {
  return (
    <CardService
      id={SERVICES.id}
      imgURL={SERVICES.imgURL}
      title={SERVICES.title}
      description={SERVICES.description}
      detail1={SERVICES.detail1}
      detail2={SERVICES.detail2}
      detail3={SERVICES.detail3}
      detail4={SERVICES.detail4}
    />
  );
}
