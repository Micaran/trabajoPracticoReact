import React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";

const CustomPopMenu = ({ anchorEl, onClose }) => {
  return (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      keepMounted
      open={Boolean(anchorEl)}
      onClose={onClose}
    >
      <MenuItem onClick={onClose}>Profile</MenuItem>
      <MenuItem button component={Link} to="/" onClick={onClose}>
        Inicio
      </MenuItem>
    </Menu>
  );
};

export default CustomPopMenu;
