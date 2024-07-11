import About from "../../components/about/About";
import Advantages from "../../components/about/Advantages";

export default function AboutMe() {
  return (
    <div className="text-center margin-auto max-width padding-top-5">
      <h1 className="font-title font-size-2 font-light letter-space-02">
        SOBRE MIM
      </h1>

      <hr className="border-light-brown margin-auto opacity width-15" />

      <About />
      <Advantages />
    </div>
  );
}
