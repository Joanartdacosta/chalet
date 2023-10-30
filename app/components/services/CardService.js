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
          <div className="display-flex flex-end">
            <hr className="border-light-green border-vertical-02 opacity-40 height-15 media-display-none" />
            <div className="padding-1">
              <h1 className="font-title font-size-11 padding-bottom-1-25 media-font-text media-padding-bottom">
                {" "}
                {props.title}
              </h1>
              <p className="font-text font-size-11 padding-bottom-1-25 media-font-text media-padding-bottom">
                {props.description}
              </p>

              <li className="font-text font-size-11 media-font-text">
                {props.detail1}
              </li>
              <li className="font-text font-size-11 media-font-text">
                {props.detail2}
              </li>
              <li className="font-text font-size-11 media-font-text">
                {props.detail3}
              </li>
              <li className="font-text font-size-11 media-font-text">
                {props.detail4}
              </li>
            </div>
            <div
              className="margin-08 width-18 height-15 object-cover background-cover background-norepeat border-radius-075 padding-2 media-display-none media-with-card"
              style={{
                backgroundImage: props.imgURL,
              }}
            ></div>
          </div>

          <div className="padding-1">
            <button
              className="border-light-brown background-brown border-radius-075 font-text font-size-08 font-bold text-color-brown padding-05 width-8 link"
              onClick={handleSeeMore}
            >
              {" "}
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
    </div>
  );
}
