import serviceStyle from "./service.module.css";

export default function ModalService(props) {
  return (
    <div>
      <p>Mais informacoes</p>

      <button className={serviceStyle.buttonModal} onClick={props.onClose}>
        Close
      </button>
      <button className={serviceStyle.buttonModal} onClick={props.onClose}>
        Pedir orcamento
      </button>
    </div>
  );
}
