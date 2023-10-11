export default function CurrentDate() {
  const currentYear = new Date().getFullYear();

  return (
    <div>
      <p className="font-italic"> CHALET - Mariana Batista Ramadas</p>

      <p>
        © {currentYear} website developed by{" "}
        <a href="https://github.com/Joanartdacosta" className="link">
          Joana Costa
        </a>
      </p>
    </div>
  );
}
