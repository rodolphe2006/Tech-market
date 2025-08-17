import { Link } from "react-router-dom";
import { Home, ShoppingBag, Book, Sun, Moon } from "lucide-react";

import { useState, useEffect } from "react";
import "./bottom.css";

function Bottomnav() {
  const [theme, setTheme] = useState("light");

  const [visibleBar, setVisibleBar] = useState(true);
  const [active, setActive] = useState("home");

  const handleThemeChange = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);

    document.documentElement.setAttribute("data-theme", newTheme);
  };
  const handleActiveness = (current: string) => {
    setActive(current);
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
      <Link
        to="/"
        className={`link  ${active === "home" && "link_active"}`}
        onClick={() => handleActiveness("home")}
      >
        <Home /> Home
      </Link>
      <Link
        to="added"
        className={`link  ${active === "added" && "link_active"}`}
      >
        <ShoppingBag onClick={() => handleActiveness("added")} />
        Added
      </Link>
      <Link
        to="about"
        className={`link  ${active === "about" && "link_active"}`}
        onClick={() => handleActiveness("about")}
      >
        <Book />
        About
      </Link>
      <button onClick={handleThemeChange} className="switch">
        <Sun className={theme === "light" ? "sun" : "sun_off"} />
        <Moon className={theme === "dark" ? "moon" : "moon_off"} />
      </button>
    </nav>
  );
}

export default Bottomnav;
