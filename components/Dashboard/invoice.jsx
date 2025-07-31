'use client';

import React from 'react';
import {
  Table, TableBody, TableCell, TableContainer, TableHead,
  TableRow, Paper, Typography, Chip
} from '@mui/material';

const invoices = [
  { ref: 'INV001', customer: 'John Doe', amount: 200, status: 'Paid' },
  { ref: 'INV002', customer: 'Jane Smith', amount: 450, status: 'Due' },
  { ref: 'INV003', customer: 'Ahmed Khan', amount: 300, status: 'Paid' },
  { ref: 'INV004', customer: 'Fatima Noor', amount: 150, status: 'Due' },
  { ref: 'INV005', customer: 'Ali Rehman', amount: 600, status: 'Paid' },
];

const InvoiceTable = () => {
  return (
    <Box ml={2} mt={2} mb={2}>
      <Typography variant="h6" gutterBottom>
        Invoice Table
      </Typography>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell><strong>Reference Code</strong></TableCell>
              <TableCell><strong>Customer</strong></TableCell>
              <TableCell><strong>Amount</strong></TableCell>
              <TableCell><strong>Status</strong></TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {invoices.map((invoice) => (
              <TableRow key={invoice.ref}>
                <TableCell>{invoice.ref}</TableCell>
                <TableCell>{invoice.customer}</TableCell>
                <TableCell>${invoice.amount}</TableCell>
                <TableCell>
                  <Chip
                    label={invoice.status}
                    color={invoice.status === 'Paid' ? 'success' : 'warning'}
                    size="small"
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default InvoiceTable;
