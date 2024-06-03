import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar/Navbar";
import Footer from "../Pages/Shared/Footer/Footer";

const Root = () => {
  const location = useLocation();
  return (
    <div>
      {location.pathname === "/login" || location.pathname === "/signUp" || (
        <Navbar></Navbar>
      )}
      <Outlet></Outlet>
      {location.pathname === "/login" || location.pathname === "/signUp" || (
        <Footer></Footer>
      )}
    </div>
  );
};

export default Root;
