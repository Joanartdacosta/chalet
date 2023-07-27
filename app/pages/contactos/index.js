import Email from "../../components/contacts/Email";
import Layout from "../../components/layout";
import layoutStyles from "../../components/layout.module.css";
import contactsStyles from "../../components/contacts/contacts.module.css";

export default function Contacts() {
  return (
    <section className={layoutStyles.informationSection}>
      <Layout>
        <h1 className={layoutStyles.subtitles}>CONTACTOS</h1>
        <Email />
        <img
          className={contactsStyles.detailImg}
          src="https://chalet-webapp.s3.amazonaws.com/designer-photos/2024.JPG"
          alt="details"
        ></img>
      </Layout>
    </section>
  );
}
