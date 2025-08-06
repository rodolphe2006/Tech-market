import "./topnav.css";
import Search from "../searchbar/Search";
import Categories from "../categories/Categories";

function Topnav() {
  return (
    <nav className="navtop">
      <div className="Logo">
        <h1>Tech-Market</h1>
      </div>
      <Search />
      <Categories />
    </nav>
  );
}

export default Topnav;
