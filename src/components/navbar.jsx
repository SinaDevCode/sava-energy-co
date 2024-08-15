import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navItem flex items-center w-full gap-8 bg-DarkBlue">
      <NavLink
        to="/"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : ""
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/About"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : ""
        }
      >
        About
      </NavLink>
      <NavLink
        to="/Services"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : ""
        }
      >
        Services
      </NavLink>
      <NavLink
        to="/Products"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : ""
        }
      >
        Products
      </NavLink>
      <NavLink
        to="/LabEquipments"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : ""
        }
      >
        Lab&nbsp;Equipments
      </NavLink>
      <NavLink
        to="/Projects"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : ""
        }
      >
        Projects
      </NavLink>
      <NavLink
        to="/Contact"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : ""
        }
      >
        Contact
      </NavLink>
    </div>
  );
};

export default Navbar;
