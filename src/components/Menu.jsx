import { useState } from "react";
import { Box, Drawer } from "@mui/material";
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
        className="cursor-pointer flex mr-8 text-5xl sm:text-3xl lg:hidden"
        onClick={toggleDrawer(true)}
      />
      <Drawer open={isOpen} anchor="right" onClose={toggleDrawer(false)}>
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={toggleDrawer(false)}
          className="menuItem flex flex-col h-full"
        >
          <>
            <NavLink to="/">Home</NavLink>
            <NavLink
              to="/About"
              className={({ isActive, isPending }) =>
                // Developer Note : Change "menuDisable" to "" when the link is active
                isPending ? "pending" : isActive ? "active" : "menuDisable"
              }
            >
              About
            </NavLink>
            <NavLink
              to="/Services"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : "menuDisable"
              }
            >
              Services
            </NavLink>
            <NavLink
              to="/Products"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : "menuDisable"
              }
            >
              Products
            </NavLink>
            <NavLink to="/LabEquipments">Lab Equipments</NavLink>
            <NavLink
              to="/Projects"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : "menuDisable"
              }
            >
              Projects
            </NavLink>
            <NavLink
              to="/Contact"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : "menuDisable"
              }
            >
              Contact
            </NavLink>
          </>
        </Box>
      </Drawer>
    </>
  );
};

export default Menu;
