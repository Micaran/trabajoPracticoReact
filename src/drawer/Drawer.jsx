import React from "react";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { Link } from "react-router-dom";

const CustomDrawer = ({ open, onClose }) => {
  return (
    <Drawer anchor="left" open={open} onClose={onClose}>
      <List>
        <ListItem button component={Link} to="/">
          <ListItemText primary="Inicio" />
        </ListItem>
        <ListItem button component={Link} to="/todo">
          <ListItemText primary="Todo Page" />
        </ListItem>
        <ListItem button component={Link} to="/fetchlist">
          <ListItemText primary="FetchList Page" />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default CustomDrawer;
