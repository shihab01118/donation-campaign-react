import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Header/Navbar/Navbar";

const MainLayout = () => {
  const location = useLocation();
  return (
    <div>
      <div>
        {location.pathname !== "/" ? <Navbar></Navbar> : ''}
      </div>
      <div className="">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default MainLayout;
