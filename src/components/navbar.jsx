import { useState } from "react";
import { NavLink } from "react-router-dom";
import { IconContext } from "react-icons";
import { LuMenu } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import { Tooltip } from "@mui/material";

function Navbar() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  return (
    <>
      <div className="h-11 w-full flex items-center gap-8 relative bg-blue before:content-['']">
        <NavLink to="/" className="text-white text-sm hidden lg:block">
          Home
        </NavLink>

        {/* Developer Note: These below links are disable, remove the tooltips when they become enable and add 'to="path"' to the NavLink */}
        <Tooltip
          title="Disabled"
          arrow
          componentsProps={{
            tooltip: {
              sx: {
                bgcolor: "#2d325a",
                "& .MuiTooltip-arrow": {
                  color: "#2d325a",
                },
              },
            },
          }}
        >
          <NavLink className="text-white text-sm hidden lg:block">
            About
          </NavLink>
        </Tooltip>

        <Tooltip
          title="Disabled"
          arrow
          componentsProps={{
            tooltip: {
              sx: {
                bgcolor: "#2d325a",
                "& .MuiTooltip-arrow": {
                  color: "#2d325a",
                },
              },
            },
          }}
        >
          <NavLink className="text-white text-sm hidden lg:block">
            Services
          </NavLink>
        </Tooltip>

        <Tooltip
          title="Disabled"
          arrow
          componentsProps={{
            tooltip: {
              sx: {
                bgcolor: "#2d325a",
                "& .MuiTooltip-arrow": {
                  color: "#2d325a",
                },
              },
            },
          }}
        >
          <NavLink className="text-white text-sm hidden lg:block">
            Products
          </NavLink>
        </Tooltip>

        <Tooltip
          title="Disabled"
          arrow
          componentsProps={{
            tooltip: {
              sx: {
                bgcolor: "#2d325a",
                "& .MuiTooltip-arrow": {
                  color: "#2d325a",
                },
              },
            },
          }}
        >
          <NavLink className="text-white text-sm hidden lg:block">
            Lab Equipments
          </NavLink>
        </Tooltip>

        <Tooltip
          title="Disabled"
          arrow
          componentsProps={{
            tooltip: {
              sx: {
                bgcolor: "#2d325a",
                "& .MuiTooltip-arrow": {
                  color: "#2d325a",
                },
              },
            },
          }}
        >
          <NavLink className="text-white text-sm hidden lg:block">
            Projects
          </NavLink>
        </Tooltip>

        <Tooltip
          title="Disabled"
          arrow
          componentsProps={{
            tooltip: {
              sx: {
                bgcolor: "#2d325a",
                "& .MuiTooltip-arrow": {
                  color: "#2d325a",
                },
              },
            },
          }}
        >
          <NavLink className="text-white text-sm hidden lg:block">
            Contact
          </NavLink>
        </Tooltip>

        <IconContext.Provider value={{ color: "#fff" }}>
          <div
            className="cursor-pointer absolute right-16 lg:hidden"
            onClick={() =>
              // This event get the previous boolean value and change to the new one
              setMenuIsOpen((previous) => {
                setMenuIsOpen(!previous);
              })
            }
          >
            {menuIsOpen ? <IoClose size="20" /> : <LuMenu size="20" />}
          </div>
        </IconContext.Provider>
      </div>
    </>
  );
}

export default Navbar;
