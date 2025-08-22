import Logo from "../../Components/Logo/Logo";
import "./welcome.css";
import "../../Components/menu_btn/Menu_btn";
import Menu_btn from "../../Components/menu_btn/Menu_btn";

function Welcome() {
  return (
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

      <button className="get_started_btn">Start</button>

      <section className="entrance_img">
        <div className="image1"></div>
        <div className="image2"></div>
        <div className="image3"></div>
      </section>
    </section>
  );
}
export default Welcome;
