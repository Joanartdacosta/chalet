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
    <div className="padding-top-5">
      <p>
        Para mais informações ou dúvidas, entre em contacto: a partir do
        formulário abaixo; por mensagem privada no Instagram ou envie email para
        chalet.designinteriores@gmail.com.
      </p>
      <div className="display-flex margin-auto justify-center padding-top-1-25">
        <img
          className="object-cover width-19-dot-3 border-radius-075 media-width-size media-display-none transform180"
          src="https://chalet-webapp.s3.amazonaws.com/designer-photos/2024.JPG"
          alt="details"
        ></img>

        <div className="width-50 padding-2">
          <form
            ref={form}
            onSubmit={sendEmail}
            className="text-justify margin-auto"
          >
            <input type="hidden" name="contact_number" required />
            <div className="padding-bottom-1-25 display-flex flex-column">
              <label className="padding-05">Nome</label>
              <input
                className="max-width  font-size-11 font-text padding-05"
                type="text"
                name="user_name"
              />
            </div>

            <div className="padding-bottom-1-25 display-flex flex-column">
              <label className="padding-05">Email</label>
              <input
                className="max-width font-size-11 font-text padding-05"
                type="email"
                name="user_email"
                required
              />
            </div>

            <div className=" padding-bottom-1-25 display-flex flex-column">
              <label className="padding-05">Mensagem de contacto</label>
              <textarea
                className="max-width font-size-11 font-text  padding-05"
                name="message"
              ></textarea>
            </div>

            <div className="padding-bottom-1-25  display-flex flex-column">
              <label className="padding-05">
                Fotografias da divisao (se disponivel)
              </label>
              <input
                className="max-width font-text padding-05 border-light-brown margin-top-1-25"
                type="file"
                id="myFile"
                name="filename"
              />
              <input
                className="max-width font-text padding-05 border-light-brown margin-top-1-25"
                type="file"
                id="myFile"
                name="filename"
              />
              <input
                className="max-width font-text padding-05 border-light-brown margin-top-1-25"
                type="file"
                id="myFile"
                name="filename"
              />
            </div>

            <div padding-top-1-25>
              <button
                className="cursor width-100 padding-05 border-light-brown text-color-brown font-size-11 font-text align-self link"
                onClick={changeStyle}
                style={{ background: color }}
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
  );
}

export default EmailJs;
