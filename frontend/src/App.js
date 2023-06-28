
import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ListComponent from './components/ListComponent';
import TableComponent from './components/TableComponent';
import ProductFormComponent from './components/ProductFormComponent';


function App() {
  const [data, setData] = useState([]);

 //function to calculate the total number of products
  function getTotalProductsCount(data) {
    return data.length;
  }

  //fetch data from the server on component mount
  useEffect(() => {
    fetchData();
  }, []);

  //function to fetch data from the server
  const fetchData = () => {
    axios.get('http://localhost:3001/api')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  };

  //fetch data on window load so it persists after refresh
  window.onload = fetchData;

  //function to handle adding a new entry
  const handleAddEntry = (newEntry) => {
    const updatedEntry = {
      ...newEntry,
      productId: data.length + 1, // Generate a new unique ID
    };
  
  //send a POST request to add the new entry
    axios.post('http://localhost:3001/api/add-entry', updatedEntry)
      .then(response => {
        fetchData(); // Refresh data after adding the entry
      })
      .catch(error => {
        console.error(error);
      });
  };
  
  return (
    <div>
      <h1>BC Government Ministry of Education and Child Care</h1>
      <ListComponent totalProductsCount={data.length}/>
      <ProductFormComponent onAddEntry={handleAddEntry} />
      {data.length > 0 ? (
        <TableComponent data={data} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default App;
