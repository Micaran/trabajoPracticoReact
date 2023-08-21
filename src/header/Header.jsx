import React, { useState } from 'react';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Avatar from '@mui/material/Avatar';
import CustomPopMenu from '../popUpMenu/PopUpMenu';
import CustomDrawer from '../drawer/Drawer';
import { Typography } from '@mui/material';

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };


  return (
    <Toolbar>
      <IconButton onClick={drawerOpen ? handleDrawerClose : handleDrawerOpen}>
        <MenuIcon />
      </IconButton>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        Pilarweb
      </Typography>
      <Avatar
        alt="User Avatar"
        src="ruta_de_la_imagen.png"
        onClick={handleMenu}
      />
      <CustomPopMenu anchorEl={anchorEl} onClose={handleClose} />
      <CustomDrawer open={drawerOpen} onClose={handleDrawerClose} />
    </Toolbar>
  );
};

export default Header;
