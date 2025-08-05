import axios from "axios";
import { useState } from "react";
import "./selectbtn.css";

function Selectbtn() {
  const [category, setCategory] = useState<string[]>([]);
  const [show, setshow] = useState(false);

  const handleCathegory = () => {
    axios
      .get("https://fakestoreapi.in/api/products/category")
      .then((resp) => {
        setCategory(resp.data.categories);
        setshow((prev) => !prev);
        console.log(show);
      })
      .catch((error) => console.log("what's wrong?:" + error));
  };

  return (
    <>
      <button onClick={handleCathegory}>categories</button>
      <div className={show ? "select" : "select_off"}>
        {category.map((item, index) => (
          <button key={index}>{item}</button>
        ))}
      </div>
    </>
  );
}

export default Selectbtn;
