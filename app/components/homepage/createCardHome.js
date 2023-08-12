import CardHome from "./CardHome";

export default function createCardHome(sections) {
  return (
    <CardHome
      title={sections.title}
      imgURL={sections.imgURL}
      href={sections.href}
      description={sections.description}
    />
  );
}
