import { useState } from "react";
import serviceStyles from "./service.module.css";
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
      <img
        className={serviceStyles.serviceLine}
        src="https://chalet-webapp.s3.amazonaws.com/line-icon/1.png"
        alt="line"
      />
      <div className={serviceStyles.serviceSection}>
        <div className={serviceStyles.serviceText}>
          <div className={serviceStyles.serviceColumn}></div>
          <h1> {props.title}</h1>
          <p className={serviceStyles.serviceDescription}>
            {props.description}
          </p>

          <li className={serviceStyles.serviceBullets}>{props.detail1}</li>
          <li className={serviceStyles.serviceBullets}>{props.detail2}</li>
          <li className={serviceStyles.serviceBullets}>{props.detail3}</li>
          <li className={serviceStyles.serviceBullets}>{props.detail4}</li>

          <button className={serviceStyles.button} onClick={handleSeeMore}>
            Saber mais
          </button>
          {modalIsOpen && <ModalService onClose={handleClose} />}
        </div>

        <div
          className={serviceStyles.serviceImage}
          style={{
            backgroundImage: props.imgURL,
          }}
        ></div>
      </div>
    </div>
  );
}
