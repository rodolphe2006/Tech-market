import axios from "axios";
import { useState } from "react";
import "./categories.css";
function Categories() {
  const [categories, setCategories] = useState([]);
  const [active, setActive] = useState("all");

  const handleActiveness = (current: string) => {
    setActive(current);
  };
  axios
    .get("https://fakestoreapi.in/api/products/category")
    .then((resp) => setCategories(resp.data.categories))
    .catch((error) => console.log(error));
  return (
    <div className="selection">
      <button
        className={`choice ${active === "all" && "choice_active"}`}
        onClick={() => handleActiveness("all")}
      >
        all
      </button>
      {categories.map((item, index) => (
        <button
          key={index}
          className={`choice  ${active === item && "choice_active"}`}
          onClick={() => handleActiveness(item)}
        >
          {item}
        </button>
      ))}
    </div>
  );
}

export default Categories;
