import Email from "../../components/contacts/Email";

import layoutStyles from "../../components/layout/layout.module.css";

export default function Contacts() {
  return (
    <div className={layoutStyles.informationSection}>
      <h1 className={layoutStyles.subtitles}>CONTACTOS</h1>
      <hr className={layoutStyles.hrSubtitle} />
      <Email />
    </div>
  );
}
