import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Welcome from "./Pages/welcome/Welcome";
import "./index.css";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Welcome />} />
        </Routes>
      </Router>
    </>
  );
  <></>;
}

export default App;
