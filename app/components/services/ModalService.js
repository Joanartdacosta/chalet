import serviceStyle from "./service.module.css";

export default function ModalService(props) {
  return (
    <div>
      <h3>Mais informacoes</h3>
      <p>{props.step1}</p>
      <p>{props.step2}</p>
      <p>{props.step3}</p>
      <p>{props.step4}</p>
      <p>{props.step5}</p>

      <button onClick={props.onClose}>Close</button>
      <a href="/contactos">
        <button>Pedir orcamento</button>
      </a>
    </div>
  );
}
