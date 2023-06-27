
import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '@mui/material/styles';
import { Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';

function App() {
  const [data, setData] = useState('');

  useEffect(() => {
    axios.get('http://localhost:3001/api')
      .then(response => setData(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h1>Data from Backend:</h1>
      {data.length > 0 ? (
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Product ID</TableCell>
              <TableCell>Product Name</TableCell>
              <TableCell>Product Owner Name</TableCell>
              <TableCell>Developers</TableCell>
              <TableCell>Scrum Master Name</TableCell>
              <TableCell>Start Date</TableCell>
              <TableCell>methodology</TableCell>
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
                {product.location}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default App;

