const express = require('express');
const cors = require('cors');
const port = 3001; // Choose any available port number
const app = express();
const mockData = require('./data/mockData');
const bodyParser = require('body-parser');
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json(mockData.products);
});

app.get('/api', (req, res) => {
  res.json(mockData.products);
})

app.post('/api/add-entry', (req, res) => {
  const newEntry = req.body;
  mockData.products.push(newEntry);
  res.status(201).json({ message: 'Entry added successfully' });
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});