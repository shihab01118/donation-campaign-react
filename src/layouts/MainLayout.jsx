import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Header/Navbar/Navbar";
import Header from "../components/Header/Header";


const MainLayout = () => {
    const location = useLocation()
    console.log(location)
    return (
        <div>
            <div>
                {
                    location.pathname === '/' ? <Header></Header> : <Navbar></Navbar>
                }
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;