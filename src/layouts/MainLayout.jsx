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
      <div className="mx-8 md:mx-16 lg:mx-auto lg:container">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default MainLayout;
