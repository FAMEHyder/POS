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
import {
  Dashboard,
  Inventory,
  Settings,
  SyncAlt,
  Money,
  Description,
  ShoppingCart,
  PointOfSale,
  AssignmentReturn,
  Reviews,
  Assessment
} from '@mui/icons-material';

const sidebarItems = [
  { label: 'Dashboard', icon: <Dashboard /> },
  { label: 'Product', icon: <Inventory /> },
  { label: 'Adjustments', icon: <Settings /> },
  { label: 'Transfer', icon: <SyncAlt /> },
  { label: 'Expenses', icon: <Money /> },
  { label: 'Quotations', icon: <Description /> },
  { label: 'Purchase', icon: <ShoppingCart /> },
  { label: 'Sales', icon: <PointOfSale /> },
  { label: 'Sales Returns', icon: <AssignmentReturn /> },
  { label: 'Purchase Returns', icon: <AssignmentReturn /> },
  { label: 'Reviews', icon: <Reviews /> },
  { label: 'Reports', icon: <Assessment /> },
];

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

      {/* Spacer to avoid overlap */}
      <Toolbar />

      {/* Sidebar */}
      <Box
        sx={{
          width: 250,
          bgcolor: '#f5f5f5',
          borderRight: '1px solid #ccc',
          height: '180vh',
          pt: 2,
        }}
      >
        <List>
          {sidebarItems.map((item) => (
            <ListItem
              button
              key={item.label}
              sx={{
                flexDirection: 'column',
                textAlign: 'center',
                py: 2,
              }}
            >
              <ListItemIcon sx={{ justifyContent: 'center', mb: 0.5 }}>
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.label} primaryTypographyProps={{ fontSize: 12 }} />
            </ListItem>
          ))}
        </List>
      </Box>
    </>
  );
}

export default Header;
