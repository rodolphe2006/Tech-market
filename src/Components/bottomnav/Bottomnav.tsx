import { Link } from "react-router-dom";

import { useState } from "react";
import "./bottom.css";

function Bottomnav() {
  const [theme, setTheme] = useState("light");

  const handlethemechange = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);

    document.documentElement.setAttribute("data-theme", newTheme);
  };
  return (
    <nav>
      <Link to="/" className="link">
        Home
      </Link>
      <Link to="added" className="link">
        Added
      </Link>
      <Link to="about" className="link">
        About
      </Link>
      <button onClick={handlethemechange} className="switch">
        {theme}
      </button>
    </nav>
  );
}

export default Bottomnav;
