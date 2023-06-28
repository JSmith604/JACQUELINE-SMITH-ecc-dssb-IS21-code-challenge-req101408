
import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ListComponent from './components/ListComponent';
import TableComponent from './components/TableComponent';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:3001/api')
      .then(response => setData(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h1>Data from Backend:</h1>
      <ListComponent />
      {data.length > 0 ? (
        <TableComponent data={data} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default App;
