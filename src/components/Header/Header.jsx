import Banner from "./Banner/Banner";
import Navbar from "./Navbar/Navbar";
import PropTypes from 'prop-types';

const Header = ({ handleSearch }) => {
  return (
    <div className="relative h-[100vh]">
      <img
        src={`https://img.freepik.com/free-photo/people-meeting-community-center_23-2149155300.jpg?w=740&t=st=1695649978~exp=1695650578~hmac=748b94a11f1315697c70e096a9364273b968b1431dfc5f18e8681ee6336b66c0`}
        alt=""
        className="h-[100vh] w-full"
      />
      <div className="absolute inset-0 bg-gray-100 opacity-90">
        <div className="">
          <Navbar></Navbar>
          <Banner handleSearch={handleSearch}></Banner>
        </div>
      </div>
    </div>
  );
};

Header.propTypes = {
  handleSearch: PropTypes.func,
}

export default Header;
