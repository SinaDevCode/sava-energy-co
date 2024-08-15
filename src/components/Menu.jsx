import { useState } from "react";
import { Box, Drawer, Divider } from "@mui/material";
import { HiMenuAlt3 } from "react-icons/hi";
import { NavLink } from "react-router-dom";
import "../styles/menu.css";

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setIsOpen(newOpen);
  };

  return (
    <>
      <HiMenuAlt3
        color="white"
        className="cursor-pointer flex mr-8 text-3xl lg:hidden"
        onClick={toggleDrawer(true)}
      />
      <Drawer open={isOpen} anchor="right" onClose={toggleDrawer(false)}>
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={toggleDrawer(false)}
          className="menuItem flex flex-col h-full "
        >
          <>
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
                isPending ? "pending hidden lg:block" : isActive ? "active" : ""
              }
            >
              Lab Equipments
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
          </>
          <Divider />
          <NavLink to="/Login">Login</NavLink>
        </Box>
      </Drawer>
    </>
  );
};

export default Menu;
