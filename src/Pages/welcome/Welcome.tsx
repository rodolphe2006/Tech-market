import Logo from "../../Components/Logo/Logo";
import "./welcome.css";
import "../../Components/menu_btn/Menu_btn";
import Menu_btn from "../../Components/menu_btn/Menu_btn";
import Carousel from "../../Components/caroussel/Carousel";
function Welcome() {
  return (
    <>
      <section className="welcome">
        <nav>
          <Logo />
          <Menu_btn />
        </nav>
        <section className="herosection">
          <h1>
            Welcome to <span>NovaZone</span>
          </h1>
          <p>
            Step Into <span> NovaZone</span>, Your Gateway to the Hottest Games,
            Exclusive Updates!
          </p>
        </section>
        <Carousel />

        <button className="get_started_btn">Start</button>
      </section>
    </>
  );
}
export default Welcome;
