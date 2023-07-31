import CardHome from "./CardHome";

export default function createCardHome(SECTIONS) {
  return (
    <CardHome
      title={SECTIONS.title}
      imgURL={SECTIONS.imgURL}
      href={SECTIONS.href}
    />
  );
}
