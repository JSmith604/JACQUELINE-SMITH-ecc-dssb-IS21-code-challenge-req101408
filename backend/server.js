const express = require('express');
const cors = require('cors');
const port = 3001; // Choose any available port number
const app = express();

app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.get('/api', (req, res) => {
  const data = 'This is the data from the backend!'
  res.json(data)
})

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});