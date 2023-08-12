import CardHome from "./CardHome";

export default function createCardHome(Sections) {
  return (
    <CardHome
      title={Sections.title}
      imgURL={Sections.imgURL}
      href={Sections.href}
      description={Sections.description}
    />
  );
}
