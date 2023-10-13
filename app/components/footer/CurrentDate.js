export default function CurrentDate() {
  const currentYear = new Date().getFullYear();

  return (
    <div>
      <p className="font-italic padding-top-element">
        {" "}
        CHALET - Mariana Batista Ramadas
      </p>

      <p className="padding-top-element">
        © {currentYear} website developed by{" "}
        <a href="https://github.com/Joanartdacosta" className="link">
          Joana Costa
        </a>
      </p>
    </div>
  );
}
