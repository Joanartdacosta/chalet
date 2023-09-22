import CardHome from "./CardHome";

export default function createCardHome(sections) {
  return (
    <CardHome
      key={sections.id}
      title={sections.title}
      imgURL={sections.imgURL}
      href={sections.href}
      description={sections.description}
    />
  );
}
