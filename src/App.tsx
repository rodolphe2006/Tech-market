import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Layout from "./Components/Layout";
import Home from "./Pages/home/Home";
import About from "./Pages/about/About";
import Added from "./Pages/added/Added";
import Welcome from "./Pages/welcome/welcome";
import { AnimatePresence } from "framer-motion";
import "./Components/bottomnav/bottom.css";

function AnimateRoutes() {
  const location = useLocation();
  return (
    <>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route index element={<Welcome />} />
          <Route path="/" element={<Layout />}>
            <Route path="home" element={<Home />} />
            <Route path="added" element={<Added />} />
            <Route path="about" element={<About />} />
          </Route>
        </Routes>
      </AnimatePresence>
    </>
  );
}

function App() {
  return (
    <>
      <Router>
        <AnimateRoutes />
      </Router>
    </>
  );
  <></>;
}

export default App;
