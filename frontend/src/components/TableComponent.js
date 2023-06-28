import React from 'react';
import { Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';

function TableComponent({ data }) {
  return (
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
        {data.map((product, index) => (
          <TableRow key={index}>
            <TableCell>{product.productId}</TableCell>
            <TableCell>{product.productName}</TableCell>
            <TableCell>{product.productOwnerName}</TableCell>
            <TableCell>
              <ul>
                {Object.values(product.developers).map((developer, index) => (
                  <li key={index}>{developer}</li>
                ))}
              </ul>
            </TableCell>
            <TableCell>{product.scrumMasterName}</TableCell>
            <TableCell>{product.startDate}</TableCell>
            <TableCell>{product.methodology}</TableCell>
            <TableCell>{product.lifecycleState}</TableCell>
            <TableCell>{product.location}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export default TableComponent;
