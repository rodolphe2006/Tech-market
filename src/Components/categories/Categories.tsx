import axios from "axios";
import { useState, useEffect } from "react";
import "./categories.css";

type Category = {
  name: string;
};

function Categories() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [active, setActive] = useState("all");
  const handleActiveness = (current: string) => {
    setActive(current);
  };

  useEffect(() => {
    axios
      .get("https://api.escuelajs.co/api/v1/categories")
      .then((resp) => {
        setCategories(resp.data);
        console.log(resp.data);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <div className="selection">
      <button
        className={`choice ${active === "all" && "choice_active"}`}
        onClick={() => handleActiveness("all")}
      >
        all
      </button>
      {categories.slice(0, 3).map((item, index) => (
        <button
          key={index}
          className={`choice  ${active === item.name && "choice_active"}`}
          onClick={() => handleActiveness(item.name)}
        >
          {item.name}
        </button>
      ))}
    </div>
  );
}

export default Categories;
