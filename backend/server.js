const express = require('express');
const cors = require('cors');
const port = 3001; // Choose any available port number
const app = express();
const mockData = require('./data/mockData');
const bodyParser = require('body-parser');
//app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  try {
    res.status(200).json(mockData.products);
  } catch (error) {
    console.error('Error occurred:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

app.get('/api', (req, res) => {
  try {
    res.status(200).json(mockData.products);
  } catch (error) {
    console.error('Error occurred:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.post('/api/add-entry', (req, res) => {
  const newEntry = req.body;
  mockData.products.push(newEntry);
  res.status(201).json({ error: 'Entry added successfully' });
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});