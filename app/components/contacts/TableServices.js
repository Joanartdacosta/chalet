export default function TableServices() {
  return (
    <div className="display-column text-center">
      <p>
        Se pretende solicitar um orcamento, são necessários os seguintes dados:
      </p>

      <table className="table-border">
        <tr>
          <th>Projeto de Design e Remodelacao de Interiores</th>
        </tr>

        <td>
          <ul className="list">
            <li>Localização do espaço e breve descrição do que é pretendido</li>
            <li>Medidas gerais do espaço</li>
            <li>Fotografias do espaço</li>
            <li>Estimativa do valor que prentende a investir.</li>
          </ul>
        </td>
      </table>

      <table className="table-border">
        <tr>
          <th>Projeto de Decoracao de Interiores</th>
        </tr>

        <td>
          <ul className="list">
            <li>Breve descrição do que é pretendido.</li>
            <li>Medidas gerais do espaço.</li>
            <li>Fotografias do espaço.</li>
            <li>Estimativa do valor que pretende investir.</li>
          </ul>
        </td>
      </table>

      <table className="table-border">
        <tr>
          <th>Consultoria Online de Decoracao de Interiores</th>
        </tr>

        <td>
          <ul className="list">
            <li>Plantas originais ou desenhadas.</li>
            <li>Medidas gerais do espaço.</li>
            <li>Fotografias do espaço.</li>
          </ul>
        </td>
      </table>

      <p>
        Para mais informações ou dúvidas, entre em contacto: a partir do
        formulario abaixo; por mensagem privada no Instagram ou envie email para
        chalet.designinteriores@gmail.com.
      </p>
    </div>
  );
}
