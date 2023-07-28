import CardAdvantage from "./CardAdvantage";

export default function createCardAdvantage(ICONS) {
  return (
    <CardAdvantage
      key={ICONS.id}
      imgURL={ICONS.imgURL}
      description={ICONS.description}
    />
  );
}
