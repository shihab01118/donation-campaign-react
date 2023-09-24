import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Header/Navbar/Navbar";
import Header from "../components/Header/Header";

const MainLayout = () => {
  const location = useLocation();
  return (
    <div>
      <div>
        {location.pathname === "/" ? <Header></Header> : <Navbar></Navbar>}
      </div>
      <div className="container mx-auto">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default MainLayout;
