import Banner from "./Banner/Banner";
import Navbar from "./Navbar/Navbar";

const Header = () => {
  return (
    <div className="relative h-[100vh]">
      <img
        src={`https://img.freepik.com/free-photo/people-meeting-community-center_23-2149155300.jpg?w=740&t=st=1695649978~exp=1695650578~hmac=748b94a11f1315697c70e096a9364273b968b1431dfc5f18e8681ee6336b66c0`}
        alt=""
        className="h-[100vh] w-full"
      />
      <div className="absolute inset-0 bg-gray-200 opacity-70">
        <div className="">
          <Navbar></Navbar>
          <Banner></Banner>
        </div>
      </div>
    </div>
  );
};

export default Header;
