'use client';

import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  RadialBarChart, RadialBar, Legend
} from 'recharts';

const radialData = [
  { name: 'Weekly', value: 95, fill: '#6A5AE0' },
  { name: 'Monthly', value: 75, fill: '#2E91FC' },
  { name: 'Yearly', value: 60, fill: '#FC763E' },
];

const lineData = [
  { name: '1k', sent: 55, received: 35 },
  { name: '2k', sent: 62, received: 40 },
  { name: '3k', sent: 40, received: 62 },
  { name: '4k', sent: 25, received: 38 },
  { name: '5k', sent: 42, received: 10 },
  { name: '6k', sent: 29, received: 22 },
  { name: '7k', sent: 30, received: 33 },
  { name: '8k', sent: 20, received: 34 },
  { name: '9k', sent: 10, received: 36 },
  { name: '10k', sent: 25, received: 50 },
  { name: '11k', sent: 15, received: 31 },
  { name: '12k', sent: 9, received: 35 },
];

export default function Dashboard() {
  return (
    <Box sx={{ p: 4 }}>
      <Grid container spacing={4}>
        {/* Sales Target - Radial Chart */}
        <Grid item xs={12} md={6}>
          <Typography variant="h6" fontWeight="bold" mb={2}>Sales Target</Typography>
          <ResponsiveContainer width="100%" height={300}>
            <RadialBarChart
              cx="50%" cy="50%" innerRadius="20%" outerRadius="90%" barSize={15}
              data={radialData}>
              <RadialBar
                background
                dataKey="value"
                cornerRadius={10}
              />
              <Legend iconSize={10} layout="horizontal" verticalAlign="bottom" align="center" />
            </RadialBarChart>
          </ResponsiveContainer>
        </Grid>

        {/* Payment Chart - Line */}
        <Grid item xs={12} md={6}>
          <Typography variant="h6" fontWeight="bold" mb={2}>
            Payment Sent & Received (Last 5 Days)
          </Typography>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={lineData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="sent" stroke="#6A5AE0" strokeWidth={2} />
              <Line type="monotone" dataKey="received" stroke="#B0BEC5" strokeDasharray="5 5" />
            </LineChart>
          </ResponsiveContainer>
        </Grid>
      </Grid>
    </Box>
  );
}
