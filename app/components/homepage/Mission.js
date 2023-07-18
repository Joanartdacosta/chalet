export default function Mission() {
  return (
    <section>
      <h2>Missao</h2>
      <p>Frase bonita</p>
      <img src="profile.jpg" alt="" />
      <ul>
        <li>
          Sobre mim
          <img src="profile.jpg" alt="" />
        </li>
        <li>
          Servicos
          <img src="profile.jpg" alt="" />
        </li>
        <li>
          Projetos
          <img src="profile.jpg" alt="" />
        </li>
        {/* {allPostsData.map(({ id, date, title }) => (
          <li className={utilStyles.listItem} key={id}>
            <Link href={`/posts/${id}`}>{title}</Link>
            <br />
            <small className={utilStyles.lightText}>
              <Date dateString={date} />
            </small> */}
        {/* ))} */}
      </ul>
    </section>
  );
}
