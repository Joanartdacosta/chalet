import React, { useState } from "react";
import contactsStyle from "./contacts.module.css";
import layoutStyle from "../layout/layout.module.css";
import { toast } from "react-hot-toast";

function EmailJs() {
  const [color, setColor] = useState("#e9dccf");
  const [label, setLabel] = useState("Enviar");

  function changeStyle() {
    setColor("#a89582");
    setLabel("Enviado");
  }

  const [data, setData] = useState({
    name: "",
    email: "",
    message: "",
  });

  async function sendEmail(event) {
    event.preventDefault();
    const response = await fetch("/api/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (response.status === 200) {
      setData({});
      toast.success(`Hey ${data.name} your message was sent`);
    }
  }

  return (
    <div className={contactsStyle.contactsSection}>
      <img
        className={contactsStyle.detailImg}
        src="https://chalet-webapp.s3.amazonaws.com/designer-photos/2024.JPG"
        alt="details"
      ></img>
      <div className={contactsStyle.contactsForm}>
        <form onSubmit={sendEmail}>
          <input type="hidden" name="contact_number" required />
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
            required
          />
          <label>Mensagem de contacto</label>
          <textarea
            className={contactsStyle.formTextArea}
            name="message"
          ></textarea>
          <button
            onClick={changeStyle}
            style={{ background: color }}
            className={layoutStyle.button}
            type="submit"
            value="Send"
          >
            {label}
          </button>
        </form>
      </div>
    </div>
  );
}

export default EmailJs;
