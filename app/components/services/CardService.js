import { useState } from "react";

import ModalService from "./ModalService";

export default function CardService(props) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function handleSeeMore() {
    setModalIsOpen(true);
  }

  function handleClose() {
    setModalIsOpen(false);
  }

  return (
    <div className="padding-top-5">
      <div>
        <div>
          <div></div>
          <h1> {props.title}</h1>
          <p>{props.description}</p>

          <li>{props.detail1}</li>
          <li>{props.detail2}</li>
          <li>{props.detail3}</li>
          <li>{props.detail4}</li>

          <button onClick={handleSeeMore}>Saber mais</button>
          {modalIsOpen && (
            <ModalService
              step1={props.step1}
              step2={props.step2}
              step3={props.step3}
              step4={props.step4}
              step5={props.step5}
              onClose={handleClose}
            />
          )}
        </div>

        <div
          style={{
            backgroundImage: props.imgURL,
          }}
        ></div>
      </div>
    </div>
  );
}
