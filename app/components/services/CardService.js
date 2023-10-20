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
    <div>
      <div className="text-justify padding-bottom-section">
        <div>
          <hr className="hr hr-vertical" />
        </div>

        <div className="margin-auto padding-30">
          <h1 className="font-subtitle padding-bottom-element">
            {" "}
            {props.title}
          </h1>
          <p className="font-text padding-bottom-element">
            {props.description}
          </p>

          <div className="font-text padding-bottom-element">
            <li>{props.detail1}</li>
            <li>{props.detail2}</li>
            <li>{props.detail3}</li>
            <li>{props.detail4}</li>
          </div>

          <button
            className="button button-brown font-text"
            onClick={handleSeeMore}
          >
            Saber mais
          </button>
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
      </div>
    </div>
  );
}
