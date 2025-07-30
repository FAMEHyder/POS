'use client';

import { Box, Grid, Paper, Typography, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

const stockData = [
  { code: '87305928', product: 'Smartphone', warehouse: 'Warehouse 02', quantity: 5, alert: 10 },
  { code: '87305912', product: 'Mask', warehouse: 'Warehouses 02', quantity: 10, alert: 5 },
  { code: '87305452', product: 'Laptop', warehouse: 'Warehouse 01', quantity: 100, alert: 5 },
  { code: '87305231', product: 'Earphone', warehouse: 'Warehouse 03', quantity: 10, alert: 50 },
  { code: '87305452', product: 'Laptop', warehouse: 'Warehouse 01', quantity: 100, alert: 5 },
];

const pieData = [
  { name: 'Toggy Business', value: 25.6 },
  { name: 'Solit IT', value: 32.0 },
  { name: 'Walk-In Customer', value: 23.8 },
  { name: 'Medizo Enterprize', value: 9.9 },
  { name: 'Coze IT', value: 8.7 },
];

const COLORS = ['#7D3C98', '#D2B4DE', '#2E86C1', '#F4D03F', '#EC7063'];

export default function DashboardPage() {
  return (
    <Box ml={2} mt={2}>
      <Grid container spacing={4}>
        {/* Left - Stock Alert */}
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 2 }}>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              Stock Alert
            </Typography>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>CODE</TableCell>
                  <TableCell>PRODUCT</TableCell>
                  <TableCell>WAREHOUSE</TableCell>
                  <TableCell>QUANTITY</TableCell>
                  <TableCell>ALERT QUANTITY</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {stockData.map((row, idx) => (
                  <TableRow key={idx}>
                    <TableCell>{row.code}</TableCell>
                    <TableCell>{row.product}</TableCell>
                    <TableCell>{row.warehouse}</TableCell>
                    <TableCell>{String(row.quantity).padStart(2, '0')}</TableCell>
                    <TableCell sx={{ color: 'red', fontWeight: 'bold' }}>
                      {String(row.alert).padStart(2, '0')}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Paper>
        </Grid>

        {/* Right - Donut Chart */}
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 2, textAlign: 'center' ,height:'92%'}}>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              Top 05 Customer (January)
            </Typography>
            <PieChart width={350} height={250}>
              <Pie
                data={pieData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={70}
                innerRadius={40}
                label={({ percent }) => `${(percent * 100).toFixed(1)}%`}
              >
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend verticalAlign="bottom" height={36} />
            </PieChart>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
