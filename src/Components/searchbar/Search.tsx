import { Search } from "lucide-react";

import "./search.css";
function Research() {
  return (
    <>
      <div className="search_section">
        <Search className="lens" size={25} />

        <input id="search" type="text" placeholder="Search..." />
      </div>
    </>
  );
}

export default Research;
