import emailjs from "@emailjs/browser";
import React, { useRef, useState } from "react";

export default function EmailJs() {
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
    <div>
      <div className="margin-auto text-center max-width">
        <p className="padding-bottom-section">
          {" "}
          Para mais informações ou dúvidas, entre em contacto connosco:
        </p>

        <div className="wrap-section margin-auto max-width">
          <div className="margin-auto">
            <img
              className="image"
              src="https://chalet-webapp.s3.amazonaws.com/designer-photos/2024.JPG"
              alt="details"
            />
          </div>

          <div className="margin-auto">
            <form ref={form} onSubmit={sendEmail}>
              <div className="padding-bottom-element">
                <label className="wrap-section font-subtitle width-100">
                  Nome
                </label>
                <input
                  className="width-100 font-subtitle border-radius"
                  type="text"
                  name="user_name"
                />
              </div>

              <div className="padding-bottom-element">
                <label className="wrap-section font-subtitle width-100 ">
                  Email
                </label>
                <input
                  className="width-100 font-subtitle border-radius"
                  type="email"
                  name="user_email"
                  size="30"
                  required
                />
              </div>

              <div className=" padding-bottom-element">
                <label className="wrap-section font-subtitle width-100">
                  Mensagem de contacto
                </label>
                <textarea
                  className="width-100 font-subtitle border-radius"
                  name="message"
                  size="200"
                ></textarea>
              </div>

              <div>
                <button
                  onClick={changeStyle}
                  style={{ background: color }}
                  className="button button-brown width-100 border-none font-subtitle padding-10 border-radius"
                  type="submit"
                  value="Send"
                >
                  {label}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
