import React from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { Link } from 'react-router-dom';

const CustomDrawer = ({ open, onClose }) => {
  return (
    // Renderiza el componente Drawer de Material-UI
    <Drawer anchor="left" open={open} onClose={onClose}>
      {/* Lista de elementos en el Drawer */}
      <List>
        {/* Cada elemento es un ListItem que enlaza a diferentes rutas */}
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
