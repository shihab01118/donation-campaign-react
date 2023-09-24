import Banner from "./Banner/Banner";
import Navbar from "./Navbar/Navbar";
import "./Header.css"


const Header = () => {
    return (
        <div className="header bg-cover bg-center">
            <div className="container mx-auto">
            <Navbar></Navbar>
            <Banner></Banner>
            </div>
        </div>
    );
};

export default Header;