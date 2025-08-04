import { Outlet } from "react-router-dom";
import Bottomnav from "./bottomnav/Bottomnav";

function Layout() {
  return (
    <>
      <Outlet />
      <Bottomnav />
    </>
  );
}

export default Layout;
