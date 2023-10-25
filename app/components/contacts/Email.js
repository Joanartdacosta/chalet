import emailjs from "@emailjs/browser";
import React, { useRef, useState } from "react";

function EmailJs() {
  const [color, setColor] = useState("#e9dccf");
  const [label, setLabel] = useState("Enviar");

  function changeStyle() {
    setColor("#a89582");
    setLabel("Enviado");
  }

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
    <div className="display-flex height-18 padding-top-5">
      <img
        className="width-50  object-fit"
        src="https://chalet-webapp.s3.amazonaws.com/designer-photos/2024.JPG"
        alt="details"
      ></img>
      <div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="hidden" name="contact_number" required />
          <label>Nome</label>
          <input type="text" name="user_name" />

          <label>Email</label>
          <input type="email" name="user_email" required />
          <label>Mensagem de contacto</label>
          <textarea name="message"></textarea>
          <button
            onClick={changeStyle}
            style={{ background: color }}
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
