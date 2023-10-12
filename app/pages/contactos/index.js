import Email from "../../components/contacts/Email";
import TableServices from "../../components/contacts/TableServices";

import layoutStyles from "../../components/layout/layout.module.css";

export default function Contacts() {
  return (
    <div className={layoutStyles.informationSection}>
      <h1 className={layoutStyles.subtitles}>CONTACTOS</h1>
      <TableServices />
      <Email />
    </div>
  );
}
