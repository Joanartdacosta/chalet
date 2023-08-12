import CardAdvantage from "./CardAdvantage";

export default function createCardAdvantage(Icons) {
  return (
    <CardAdvantage
      key={Icons.id}
      imgURL={Icons.imgURL}
      description={Icons.description}
    />
  );
}
