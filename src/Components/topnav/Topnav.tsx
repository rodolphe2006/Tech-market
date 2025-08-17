import "./topnav.css";

import Logo from "../Logo/Logo";
import Research from "../searchbar/Search";

function Topnav() {
  return (
    <nav className="navtop">
      <Logo />
      <Research />
    </nav>
  );
}

export default Topnav;
