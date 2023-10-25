export default function TableServices() {
  return (
    <div className="display-flex gap-3 text-align-center padding-top-5 padding-bottom-1-25">
      <div className="padding-bottom-1-25">
        <p>
          Se pretende solicitar um orcamento, são necessários os seguintes
          dados:
        </p>
      </div>

      <div className="border-light-brown shadow-dark padding-1">
        <h1 className="font-text text-size font-bold padding-bottom-1-25">
          Projeto de Design e Remodelacao de Interiores
        </h1>

        <ul className="list text-justify">
          <li>Localização do espaço e breve descrição do que é pretendido</li>
          <li>Medidas gerais do espaço</li>
          <li>Fotografias do espaço</li>
          <li>Estimativa do valor que prentende investir.</li>
        </ul>
      </div>

      <div className="border-light-brown shadow-dark padding-1">
        <h1 className="font-text text-size font-bold padding-bottom-1-25">
          Projeto de Decoracao de Interiores
        </h1>

        <ul className="list">
          <li>Breve descrição do que é pretendido.</li>
          <li>Medidas gerais do espaço.</li>
          <li>Fotografias do espaço.</li>
          <li>Estimativa do valor que pretende investir.</li>
        </ul>
      </div>

      <div className="border-light-brown shadow-dark padding-1 gap-3">
        <h1 className="font-text text-size font-bold padding-bottom-1-25">
          Consultoria Online de Decoracao de Interiores
        </h1>

        <ul className="list">
          <li>Plantas originais ou desenhadas.</li>
          <li>Medidas gerais do espaço.</li>
          <li>Fotografias do espaço.</li>
        </ul>
      </div>

      <div>
        <p>
          Para mais informações ou dúvidas, entre em contacto: a partir do
          formulario abaixo; por mensagem privada no Instagram ou envie email
          para chalet.designinteriores@gmail.com.
        </p>
      </div>
    </div>
  );
}
