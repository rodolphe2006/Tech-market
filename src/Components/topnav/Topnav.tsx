import "./topnav.css";
import Search from "../searchbar/Search";
import Categories from "../categories/Categories";

function Topnav() {
  return (
    <nav className="navtop">
      <Search />
      <Categories />
    </nav>
  );
}

export default Topnav;
