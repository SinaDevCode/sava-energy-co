import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navItem pr-4 flex items-center w-full gap-8 bg-DarkBlue">
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
          // Change "Disable" to "" when the link is active
          isPending ? "pending" : isActive ? "active" : "Disable"
        }
      >
        About
      </NavLink>
      <NavLink
        to="/Services"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : "Disable"
        }
      >
        Services
      </NavLink>
      <NavLink
        to="/Products"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : "Disable"
        }
      >
        Products
      </NavLink>
      <NavLink
        to="/LabEquipments"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : "Disable"
        }
      >
        Lab&nbsp;Equipments
      </NavLink>
      <NavLink
        to="/Projects"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : "Disable"
        }
      >
        Projects
      </NavLink>
      <NavLink
        to="/Contact"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : "Disable"
        }
      >
        Contact
      </NavLink>
    </div>
  );
};

export default Navbar;
