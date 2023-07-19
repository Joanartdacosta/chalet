import UtilStyles from "../../styles/utils.module.css";

export default function Mission() {
  return (
    <div>
      <section className={UtilStyles.missionSentence}>
        <h1>Missao</h1>
        <h2>Cada projeto é o início de uma nova história!</h2>
        <p>
          O Chalet - Design de Interiores nasce com a finalidade de trazer
          ideias e soluções aos espaços dos seus clientes, quer sejam eles
          residenciais ou comerciais, que combinem três premissas essenciais - o
          conforto, a estética e a funcionalidade. Acreditamos que conseguimos
          tornar realidade o espaço que o cliente idealizou, tendo sempre em
          conta a sua identidade e objetivos adequados à sua vida e à da sua
          família.
        </p>
      </section>
      {/* {allPostsData.map(({ id, date, title }) => (
          <li className={utilStyles.listItem} key={id}>
            <Link href={`/posts/${id}`}>{title}</Link>
            <br />
            <small className={utilStyles.lightText}>
              <Date dateString={date} />
            </small> */}
      {/* ))} */}
    </div>
  );
}
