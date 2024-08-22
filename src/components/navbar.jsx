import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navItem pr-4 flex items-center w-full gap-8 bg-DarkBlue">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/About" className="Disable">
        About
      </NavLink>
      <NavLink to="/Services" className="Disable">
        Services
      </NavLink>
      <NavLink to="/Products" className="Disable">
        Products
      </NavLink>
      <NavLink to="/LabEquipments">
        Lab&nbsp;Equipments
      </NavLink>
      <NavLink to="/Projects" className="Disable">
        Projects
      </NavLink>
      <NavLink to="/Contact" className="Disable">
        Contact
      </NavLink>
    </div>
  );
};

export default Navbar;
