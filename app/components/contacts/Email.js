import React, { useState } from "react";

function EmailJs() {
  const [color, setColor] = useState("#e9dccf");
  const [label, setLabel] = useState("Enviar");

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  function changeStyle() {
    setColor("#a89582");
    setLabel("Enviado");
  }

  return (
    <div className="padding-top-5">
      <p>
        Para mais informações ou dúvidas, entre em contacto: a partir do
        formulário abaixo; por mensagem privada no Instagram ou envie email para
        chalet.designinteriores@gmail.com.
      </p>
      <div className="display-flex margin-auto justify-center padding-top-1-25">
        <img
          className="width-15 border-radius-075 media-width-size media-display-none transform180"
          src="https://chalet-webapp.s3.amazonaws.com/designer-photos/2024.JPG"
          alt="details"
        />

        <div className="width-50 padding-2">
          <form
            className="pb-20"
            id="freetour"
            action="https://formcarry.com/s/OlAl-K2DqOh"
            method="POST"
          >
            <input type="hidden" name="contact_number" required />
            <div className="padding-bottom-1-25 display-flex flex-column">
              <label className="padding-05">Nome</label>
              <input
                className="max-width  font-size-11 font-text padding-05"
                type="text"
                value={name}
                name="name"
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div className="padding-bottom-1-25 display-flex flex-column">
              <label className="padding-05">Email</label>
              <input
                className="max-width font-size-11 font-text padding-05"
                type="email"
                value={email}
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className=" padding-bottom-1-25 display-flex flex-column">
              <label className="padding-05">Mensagem de contacto</label>
              <textarea
                className="max-width font-size-11 font-text  padding-05"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                id="message"
                name="message"
                placeholder="Enter your message..."
                required
              />
            </div>

            <div>
              <button
                className="cursor width-100 padding-05 border-light-brown text-color-brown font-size-11 font-text align-self link"
                onClick={changeStyle}
                style={{ background: color }}
                type="submit"
                id="submit"
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
