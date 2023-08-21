import React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';

const CustomPopMenu = ({ anchorEl, onClose }) => {
  return (
    // Renderiza el componente Menu de Material-UI
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      keepMounted
      open={Boolean(anchorEl)}
      onClose={onClose}
    >
      {/* Cada elemento del menú es un MenuItem con acciones */}
      <MenuItem onClick={onClose}>Profile</MenuItem>
      <MenuItem button component={Link} to="/" onClick={onClose}>Inicio</MenuItem>
    </Menu>
  );
};

export default CustomPopMenu;
