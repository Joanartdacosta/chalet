export default function CurrentDate() {
  const currentYear = new Date().getFullYear();

  return (
    <div>
      <p className="font-text font-italic padding-top-1-25 media-padding-top">
        {" "}
        CHALET - Mariana Batista Ramadas
      </p>

      <p className="padding-top-1-25 padding-bottom-1-25 media-padding-bottom media-padding-top">
        © {currentYear} website developed by{" "}
        <a href="https://github.com/Joanartdacosta" className="link">
          Joana Costa
        </a>
      </p>
    </div>
  );
}
