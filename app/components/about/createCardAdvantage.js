import CardAdvantage from "./CardAdvantage";

export default function createCardAdvantage(icons) {
  return (
    <CardAdvantage
      key={icons.id}
      imgURL={icons.imgURL}
      description={icons.description}
    />
  );
}
