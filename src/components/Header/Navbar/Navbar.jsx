import Logo from "../../../assets/Logo.png";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center py-8">
      <div className="w-[200px]">
        <img src={Logo} alt="Logo" />
      </div>
      <div>
        <ul className="text-lg text-[#0B0B0B] flex gap-12">
          <li>
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-[#FF444A] underline font-bold" : ""
              }
            >
              Home
            </NavLink>
          </li>
          <li>
          <NavLink
              to="/donations"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-[#FF444A] underline font-bold" : ""
              }
            >
              Donations
            </NavLink>
          </li>
          <li>
          <NavLink
              to="/statistics"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-[#FF444A] underline font-bold" : ""
              }
            >
              Statistics
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
