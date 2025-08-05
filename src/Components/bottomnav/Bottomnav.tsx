import { Link } from "react-router-dom";

import { useState, useEffect } from "react";
import "./bottom.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faBagShopping,
  faSun,
  faMoon,
  faBook,
} from "@fortawesome/free-solid-svg-icons";
function Bottomnav() {
  const [theme, setTheme] = useState("light");

  const [visibleBar, setVisibleBar] = useState(true);

  const handleThemeChange = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);

    document.documentElement.setAttribute("data-theme", newTheme);
  };

  useEffect(() => {
    let lastScrollY = window.scrollY;
    const hidingNavBottom = () => {
      const currentScroll = window.scrollY;
      console.log(currentScroll);
      if (currentScroll > lastScrollY && currentScroll > 100) {
        setVisibleBar(false);
      } else {
        setVisibleBar(true);
      }
      lastScrollY = currentScroll;
    };
    window.addEventListener("scroll", hidingNavBottom);

    return () => {
      window.removeEventListener("scroll", hidingNavBottom);
    };
  }, []);

  return (
    <nav className={visibleBar ? "nav" : "nav_off"}>
      <Link to="/" className="link">
        <FontAwesomeIcon icon={faHome} /> Home
      </Link>
      <Link to="added" className="link">
        <FontAwesomeIcon icon={faBagShopping} />
        Added
      </Link>
      <Link to="about" className="link">
        <FontAwesomeIcon icon={faBook} />
        About
      </Link>
      <button onClick={handleThemeChange} className="switch">
        <FontAwesomeIcon
          icon={faSun}
          className={theme === "light" ? "sun" : "sun_off"}
        />
        <FontAwesomeIcon
          icon={faMoon}
          className={theme === "dark" ? "moon" : "moon_off"}
        />
      </button>
    </nav>
  );
}

export default Bottomnav;
