"use client";

import React from 'react';
import {
  Box,
  List,
  ListItemButton,
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
import Link from 'next/link';

const sidebarItems = [
  { label: 'Dashboard', icon: <Dashboard />, path: '/Dashboard' },
  { label: 'Product', icon: <Inventory />, path: '/product' },
  { label: 'Adjustments', icon: <Settings />, path: '/adjustments' },
  { label: 'Transfer', icon: <SyncAlt />, path: '/transfer' },
  { label: 'Expenses', icon: <Money />, path: '/expenses' },
  { label: 'Quotations', icon: <Description />, path: '/quotations' },
  { label: 'Purchase', icon: <ShoppingCart />, path: '/purchase' },
  { label: 'Sales', icon: <PointOfSale />, path: '/sales' },
  { label: 'Sales Returns', icon: <AssignmentReturn />, path: '/sales-returns' },
  { label: 'Purchase Returns', icon: <AssignmentReturn />, path: '/purchase-returns' },
  { label: 'Reviews', icon: <Reviews />, path: '/reviews' },
  { label: 'Reports', icon: <Assessment />, path: '/reports' },
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
          <Link key={item.label} href={item.path} passHref style={{ textDecoration: 'none', color: 'inherit' }}>
            <ListItemButton
              sx={{
                flexDirection: 'column',
                textAlign: 'center',
                py: 2,
                cursor: 'pointer'
              }}
            >
              <ListItemIcon sx={{ justifyContent: 'center', mb: 0.5 }}>
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.label} primaryTypographyProps={{ fontSize: 12 }} />
            </ListItemButton>
          </Link>
        ))}
      </List>
    </Box>
  );
};

export default Sidebar;
