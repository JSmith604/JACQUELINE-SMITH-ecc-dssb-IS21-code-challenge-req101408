
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
        if (error.response) {
          // The request was made and the server responded with a status code
          console.error('Request failed with status code:', error.response.status);
        } else if (error.request) {
          // The request was made but no response was received
          console.error('No response received');
        } else {
          // Something happened in setting up the request that triggered an error
          console.error('Error occurred:', error.message);
        }
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
  
  // Send a POST request to add the new entry
    axios.post('http://localhost:3001/api/add-entry', updatedEntry)
    .then(response => {
      fetchData(); // Refresh data after adding the entry
    })
    .catch(error => {
      if (error.response) {
        // The request was made and the server responded with a status code
        console.error('Request failed with status code:', error.response.status);
      } else if (error.request) {
        // The request was made but no response was received
        console.error('No response received');
      } else {
        // Something happened in setting up the request that triggered an error
        console.error('Error occurred:', error.message);
      }
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
