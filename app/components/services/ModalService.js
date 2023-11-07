import Link from "next/link";
import CloseButton from "../UI/closebutton/CloseButton";

export default function ModalService(props) {
  return (
    <div className="margin-top-1-25 ">
      <hr className="border-light-green border-width-0-2 opacity-40" />

      <div className="padding-1">
        <CloseButton onClose={props.onClose} />
      </div>

      <div>
        <h3 className="padding-top-1-25 padding-bottom-1-25 font-text font-size-11">
          Mais informações
        </h3>

        <p className="padding-bottom-1-25">{props.step1}</p>
        <p className="padding-bottom-1-25">{props.step2}</p>
        <p className="padding-bottom-1-25">{props.step3}</p>
        <p className="padding-bottom-1-25">{props.step4}</p>
      </div>

      <div className="display-flex justify-evenly media-display-button padding-bottom-1-25">
        <Link href="/contacts">
          <button className="border-light-brown background-brown border-radius-075 font-text font-size-08 font-bold text-color-brown padding-05 width-8 link">
            Pedir orçamento
          </button>
        </Link>
      </div>

      <hr className="border-light-green border-width-0-2 opacity-40" />
    </div>
  );
}
