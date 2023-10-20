export default function ModalService(props) {
  return (
    <div className="text-justify margin-auto max-width padding-top-section">
      <hr className="hr hr-horizontal" />
      <p className="font-subtitle font-bold padding-top-section padding-bottom-element">
        Mais informacoes
      </p>
      <div className="font-text padding-bottom-element">
        <p>{props.step1}</p>
        <p>{props.step2}</p>
        <p>{props.step3}</p>
        <p>{props.step4}</p>
        <p>{props.step5}</p>
      </div>

      <div className="wrap-section justify-space-around padding-bottom-section">
        <button
          className="button button-brown font-text"
          onClick={props.onClose}
        >
          Close
        </button>
        <a href="/contactos">
          <button className="button button-brown font-text">
            Pedir orcamento
          </button>
        </a>
      </div>

      <hr className="hr hr-horizontal" />
    </div>
  );
}
