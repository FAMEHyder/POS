"use client";

import React from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from "@mui/material";



function Header() {
  const topNavItems = ['Home', 'POS', 'Notification', 'Contact Us'];

  return (
    <>
      {/* Top Navbar */}
      <AppBar position="fixed">
        <Toolbar sx={{ bgcolor: '#045956ff', height: '10vh', justifyContent: 'space-between' }}>
          {/* Left: Logo */}
          <Box display="flex" alignItems="center" gap={2}>
            <Box
              component={'img'}
              src='/CompanyLogo.png'
              alt='Logo'
              height={'50px'}
              width={'100px'}
             
            />
          </Box>

          {/* Right: Buttons */}
          <Box display={{ xs: 'none', md: 'flex' }} gap={1}>
            {topNavItems.map((text) => (
              <Button key={text} color="inherit">{text}</Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
   
    </>
  );
}

export default Header;
