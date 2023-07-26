import emailjs from "@emailjs/browser";
import React, { useRef } from "react";
import contactsStyle from "./contacts.module.css";
import layoutStyle from "../layout.module.css";

function EmailJs() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_1wug8mb",
        "contact_form",
        form.current,
        "gZCM5ZN3kriwCjMvy"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className={contactsStyle.contactsSection}>
      <img
        className={contactsStyle.detailImg}
        src="https://chalet-webapp.s3.amazonaws.com/designer-photos/2024.JPG"
        alt="details"
      ></img>
      <div className={contactsStyle.contactsForm}>
        <form ref={form} onSubmit={sendEmail}>
          <input type="hidden" name="contact_number" />
          <label>Nome</label>
          <input
            className={contactsStyle.formName}
            type="text"
            name="user_name"
          />

          <label>Email</label>
          <input
            className={contactsStyle.formEmail}
            type="email"
            name="user_email"
          />
          <label>Messagem de contacto</label>
          <textarea
            className={contactsStyle.formTextArea}
            name="message"
          ></textarea>
          <button className={layoutStyle.button} type="submit" value="Send">
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
}

export default EmailJs;
