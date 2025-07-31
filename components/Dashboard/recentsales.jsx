'use client';

import React, { useState } from 'react';
import {
  Table, TableBody, TableCell, TableContainer, TableHead,
  TableRow, Paper, Typography, Select, MenuItem
} from '@mui/material';

const initialData = [
  {
    ref: 'SAL001',
    customer: 'John Doe',
    status: 'Paid',
    grandTotal: 1000,
    paid: 800,
    due: 200,
    paymentStatus: 'Due'
  },
  {
    ref: 'SAL002',
    customer: 'Jane Smith',
    status: 'Due',
    grandTotal: 600,
    paid: 600,
    due: 0,
    paymentStatus: 'Paid'
  },
  {
    ref: 'SAL003',
    customer: 'Ali Rehman',
    status: 'Paid',
    grandTotal: 1500,
    paid: 1500,
    due: 0,
    paymentStatus: 'Paid'
  }
];

const RecentSalesTable = () => {
  const [salesData, setSalesData] = useState(initialData);

  const handleChange = (index, field, value) => {
  const updated = [...salesData];
  updated[index][field] = value;
  setSalesData(updated);
};


  return (
    <>
      <Typography variant="h6" gutterBottom>
        Recent Sales
      </Typography>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell><strong>Reference</strong></TableCell>
              <TableCell><strong>Customer</strong></TableCell>
              <TableCell><strong>Status</strong></TableCell>
              <TableCell><strong>Grand Total</strong></TableCell>
              <TableCell><strong>Paid</strong></TableCell>
              <TableCell><strong>Due</strong></TableCell>
              <TableCell><strong>Payment Status</strong></TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {salesData.map((row, index) => (
              <TableRow key={row.ref}>
                <TableCell>{row.ref}</TableCell>
                <TableCell>{row.customer}</TableCell>

                {/* Status (selectable) */}
                <TableCell>
                  <Select
                    value={row.status}
                    onChange={(e) => handleChange(index, 'status', e.target.value)}
                    size="small"
                  >
                    <MenuItem value="Paid">Paid</MenuItem>
                    <MenuItem value="Due">Due</MenuItem>
                  </Select>
                </TableCell>

                <TableCell>${row.grandTotal}</TableCell>
                <TableCell>${row.paid}</TableCell>
                <TableCell>${row.due}</TableCell>

                {/* Payment Status (selectable) */}
                <TableCell>
                  <Select
                    value={row.paymentStatus}
                    onChange={(e) => handleChange(index, 'paymentStatus', e.target.value)}
                    size="small"
                  >
                    <MenuItem value="Paid">Paid</MenuItem>
                    <MenuItem value="Due">Due</MenuItem>
                  </Select>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default RecentSalesTable;
