import serviceStyle from "./service.module.css";

export default function ModalService(props) {
  return (
    <div>
      <p>Mais informacoes</p>
      <p>{props.step1}</p>
      <p>{props.step2}</p>
      <p>{props.step3}</p>
      <p>{props.step4}</p>
      <p>{props.step5}</p>

      <button className={serviceStyle.buttonModal} onClick={props.onClose}>
        Close
      </button>
      <button className={serviceStyle.buttonModal} onClick={props.onClose}>
        Pedir orcamento
      </button>
    </div>
  );
}
