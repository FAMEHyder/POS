"use client";

import React from 'react';
import {
  Box,
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

const Sidebar = () => {
  return (
    <Box
      sx={{
        width: 150,
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
  );
};

export default Sidebar;
