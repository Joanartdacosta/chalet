import aboutStyles from "./aboutme.module.css";

export default function Advantages() {
  return (
    <div>
      <div className={aboutStyles.advantages}>
        <h2 className={aboutStyles.advantagesTitle}>
          Vantagens de contratar um
        </h2>
        <h2 className={aboutStyles.advantagesDesigner}>Designer</h2>
      </div>

      <div className={aboutStyles.advantagesSections}>
        <div className={aboutStyles.advantagesSection}>
          <img
            className={aboutStyles.iconAdvantage}
            src="https://chalet-webapp.s3.amazonaws.com/icons/advantages/185041_target_arrow_icon.png"
            alt="icon-advantage01"
          />
          <p>
            O meu espaço espaço vai ficar funcional e esteticamente mais
            agradável! O Designer de Interiores tem conhecimentos, competências
            e habilidades técnicas específicas para o fazer!
          </p>
        </div>

        <div className={aboutStyles.advantagesSection}>
          <img
            className={aboutStyles.iconAdvantage}
            src="https://chalet-webapp.s3.amazonaws.com/icons/advantages/3512847_closet_clothes_furniture_home_house_icon.png"
            alt="icon-advantage01"
          />
          <p>
            Vou conseguir ter um espaço bem planeado e otimizado! O DI maximiza
            o potencial do espaço através dum planeamento elaborado e cuidadoso
            da disposição e organização de todos os elementos, tendo sempre em
            conta os gostos e necessidades do cliente!
          </p>
        </div>

        <div className={aboutStyles.advantagesSection}>
          <img
            className={aboutStyles.iconAdvantage}
            src="https://chalet-webapp.s3.amazonaws.com/icons/advantages/9310104_star_sparkles_stars_sparkle_icon.png"
            alt="icon-advantage01"
          />
          <p>
            O meu espaço vai ter um estilo e refletir a minha personalidade! O
            DI avalia os gostos e preferências do cliente, ajudando a
            desenvolver um espaço coerente no estilo mas que ao mesmo tempo
            reflete a identidade de quem vai usufruir deste!
          </p>
        </div>
      </div>

      <div className={aboutStyles.advantagesSections}>
        <div className={aboutStyles.advantagesSection}>
          <img
            className={aboutStyles.iconAdvantage}
            src="https://chalet-webapp.s3.amazonaws.com/icons/advantages/172507_box_money_icon.png"
            alt="icon-advantage01"
          />
          <p>
            O meu espaço/imóvel vai ser valorizado! Um projeto de design de
            interiores bem executado pode valorizar significativamente um
            imóvel, o que poderá traduzir-se, por exemplo, num maior valor de
            venda ou arrendamento!
          </p>
        </div>
        <div className={aboutStyles.advantagesSection}>
          <img
            className={aboutStyles.iconAdvantage}
            src="https://chalet-webapp.s3.amazonaws.com/icons/advantages/9122144_help_message_question_mark_question+mark_icon.png"
            alt="icon-advantage01"
          />
          <p>
            Consigo ter alguém que me apoie e acompanhe em todo o processo! O DI
            pode fazer a gestão de todas as fases do projeto, desde a fase de
            iniciação à fase de execução final, coordenando até outros
            profissionais envolvidos, evitando perdas de tempo e dinheiro
            desnecessárias para o cliente.
          </p>
        </div>
        <div className={aboutStyles.advantagesSection}>
          <img
            className={aboutStyles.iconAdvantage}
            src="https://chalet-webapp.s3.amazonaws.com/icons/advantages/4265801_building_home_house_live_living_icon.png"
            alt="icon-advantage01"
          />
          <p>
            Consigo ter acesso a mais recursos e fornecedores! O DI geralmente
            têm acesso a uma ampla rede de fornecedores, lojas e profissionais
            especializados, que de outra maneira o cliente não conseguiria. Isso
            pode facilitar o processo de compra e garantir condições mais
            vantajosas.
          </p>
        </div>
      </div>
    </div>
  );
}
