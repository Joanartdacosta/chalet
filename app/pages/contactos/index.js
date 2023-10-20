import Email from "../../components/contacts/Email";
import TableServices from "../../components/contacts/TableServices";

export default function Contacts() {
  return (
    <div className="padding-top-section">
      <h1 className="font-subtitle text-center">CONTACTOS</h1>
      <hr className="hr-sub margin-auto " />
      <TableServices />
      <Email />
      <div className="padding-top-section margin-auto text-center max-width">
        <p>
          Outras vias de contacto - mensagem privada no Instagram ou envie email
          para{" "}
        </p>{" "}
        <p className="font-bold">chalet.designinteriores@gmail.com.</p>
      </div>
    </div>
  );
}
