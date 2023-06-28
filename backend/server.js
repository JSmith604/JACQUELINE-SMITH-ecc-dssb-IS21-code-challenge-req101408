const express = require('express');
const cors = require('cors');
const port = 3001; // Choose any available port number
const app = express();
const mockData = require('./data/mockData');
const bodyParser = require('body-parser');
app.use(cors());
app.use(express.json());

// Get request handler for the root path, send a success response with the mockData products or error response with 500 status code
app.get('/', (req, res) => {
  try {
    res.status(200).json(mockData.products);
  } catch (error) {
    console.error('Error occurred:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Get request handler for the /api path, send a success response with the mockData products or error response with 500 status code
app.get('/api', (req, res) => {
  try {
    res.status(200).json(mockData.products);
  } catch (error) {
    console.error('Error occurred:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// POST request handler for the '/api/add-entry' path, attempt to entry to the data, sends success or failure response with status codes
app.post('/api/add-entry', (req, res) => {
  const newEntry = req.body;
  try {
    mockData.products.push(newEntry);
    res.status(201).json({ message: 'Entry added successfully' });
  } catch (error) {

    res.status(500).json({ error: 'Failed to add the entry' });
  }
});

// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});