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
    <div className="margin-auto">
      <img
        className="width-50 border-radius-12 transform180 media-width-size"
        src="https://chalet-webapp.s3.amazonaws.com/designer-photos/2024.JPG"
        alt="details"
      ></img>

      <form ref={form} onSubmit={sendEmail}>
        <input type="hidden" name="contact_number" required />
        <div className="padding-bottom-1-25">
          <label className="padding-05">Nome</label>
          <input
            className="width-18 text-size font-text"
            type="text"
            name="user_name"
          />
        </div>

        <div className="padding-bottom-1-25">
          <label className="padding-05">Email</label>
          <input
            className="width-18 text-size font-text"
            type="email"
            name="user_email"
            required
          />
        </div>

        <div className=" padding-bottom-1-25">
          <label className="padding-05">Mensagem</label>
          <textarea
            className="width-18 text-size font-text"
            name="message"
          ></textarea>
        </div>

        <button
          className="width-18 padding-05 border-light-brown text-color-brown text-size font-text"
          onClick={changeStyle}
          style={{ background: color }}
          type="submit"
          value="Send"
        >
          {label}
        </button>
      </form>
    </div>
  );
}

export default EmailJs;
