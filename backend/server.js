const express = require('express');
const cors = require('cors');
const port = 3001; // Choose any available port number
const app = express();
const mockData = require('./data/mockData');
app.use(cors());

app.get('/', (req, res) => {
  res.json(mockData.products);
});

app.get('/api', (req, res) => {
  res.json(mockData.products);
})

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});