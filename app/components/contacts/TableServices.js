export default function TableServices() {
  return (
    <div className="display-column text-center max-width margin-auto padding-top-section padding-bottom-section">
      <p className="padding-bottom-element">
        Se pretende solicitar um orcamento, são necessários os seguintes dados:
      </p>

      <table className="table-border padding-cards">
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

      <table className="table-border padding-cards">
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

      <table className="table-border padding-cards">
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
    </div>
  );
}
