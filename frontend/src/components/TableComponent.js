import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

function TableComponent({ data }) {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Product ID</TableCell>
            <TableCell>Product Name</TableCell>
            <TableCell>Product Owner Name</TableCell>
            <TableCell>Developers</TableCell>
            <TableCell>Scrum Master Name</TableCell>
            <TableCell>Start Date</TableCell>
            <TableCell>Methodology</TableCell>
            <TableCell>Life Cycle State</TableCell>
            <TableCell>Location</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map(entry => (
            <TableRow key={entry.productId}>
              <TableCell>{entry.productId}</TableCell>
              <TableCell>{entry.productName}</TableCell>
              <TableCell>{entry.productOwnerName}</TableCell>
              <TableCell>{entry.developers.join(', ')}</TableCell>
              <TableCell>{entry.scrumMasterName}</TableCell>
              <TableCell>{entry.startDate}</TableCell>
              <TableCell>{entry.methodology}</TableCell>
              <TableCell>{entry.lifecycleState}</TableCell>
              <TableCell>{entry.location}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default TableComponent;