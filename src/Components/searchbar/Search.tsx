import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import "./search.css";
function Search() {
  return (
    <>
      <div className="search_section">
        <label htmlFor="search">
          <FontAwesomeIcon icon={faSearch} className="faSearch" />
        </label>
        <input
          id="search"
          type="search"
          placeholder="Search..."
          className="search_categories"
        />
      </div>
    </>
  );
}

export default Search;
