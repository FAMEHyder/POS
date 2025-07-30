
'use client'

import React from 'react';
import { Box, Grid, Paper, Typography } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ReplayIcon from '@mui/icons-material/Replay';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import UndoIcon from '@mui/icons-material/Undo';

export default function FirstBox() {
  const sections = [
    { label: 'Sales', icon: <ShoppingCartIcon fontSize="large" color="primary" /> },
    { label: 'Sales Return', icon: <ReplayIcon fontSize="large" color="secondary" /> },
    { label: 'Purchase', icon: <LocalMallIcon fontSize="large" color="success" /> },
    { label: 'Purchase Return', icon: <UndoIcon fontSize="large" color="error" /> },
  ];

  return (
    <Box sx={{ flexGrow: 1, padding: 2 }}>
      <Grid container spacing={2}>
        {sections.map((section, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Paper
              elevation={3}
              sx={{
                padding: 2,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 1,
                borderRadius: 3,
              }}
            >
              {section.icon}
              <Typography variant="h6">{section.label}</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
