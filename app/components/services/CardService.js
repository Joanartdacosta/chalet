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
          <div className="display-flex align-center">
            <div className="display-flex padding-bottom-1-25">
              <hr className="border-light-green border-vertical-02 opacity-40 media-display-none" />
              <div className="margin-left-1-25 margin-right-1-25">
                <div className="padding-bottom-1-25">
                  <h1 className="font-title font-size-11 padding-bottom-1-25">
                    {" "}
                    {props.title}
                  </h1>
                  <p className="font-text font-size-11 padding-bottom-1-25">
                    {props.description}
                  </p>
                  {props.detail1 && (
                    <li className="font-text font-size-11">{props.detail1}</li>
                  )}{" "}
                  {props.detail2 && (
                    <li className="font-text font-size-11">{props.detail2}</li>
                  )}{" "}
                  {props.detail3 && (
                    <li className="font-text font-size-11">{props.detail3}</li>
                  )}{" "}
                  {props.detail4 && (
                    <li className="font-text font-size-11">{props.detail4}</li>
                  )}
                </div>
                <div className="padding-top-1-25">
                  <button
                    className="border-light-brown background-brown border-radius-075 font-text font-size-08 font-bold text-color-brown padding-05 width-8 link"
                    onClick={handleSeeMore}
                  >
                    {" "}
                    Saber mais
                  </button>
                </div>
              </div>
            </div>
            <div
              className="object-cover background-cover background-norepeat border-radius-075  max-width-15 media-display-none"
              style={{
                backgroundImage: props.imgURL,
              }}
            ></div>
          </div>
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
