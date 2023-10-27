import Email from "../../components/contacts/Email";
import TableServices from "../../components/contacts/TableServices";

export default function Contacts() {
  return (
    <div className="text-center margin-auto max-width padding-top-5">
      <h1 className="font-title title-size font-light letter-space-02">
        CONTACTOS
      </h1>

      <hr className="border-light-brown margin-auto opacity width-15" />

      <Email />
      <TableServices />
    </div>
  );
}
