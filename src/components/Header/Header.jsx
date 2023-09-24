import Banner from "./Banner/Banner";
import Navbar from "./Navbar/Navbar";
import Cover from '../../assets/cover.jpg';


const Header = () => {
    return (
        <div className="bg-rose-200">
            <Navbar></Navbar>
            <Banner></Banner>
        </div>
    );
};

export default Header;