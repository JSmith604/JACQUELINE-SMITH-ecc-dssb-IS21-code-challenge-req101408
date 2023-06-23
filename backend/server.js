const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

const port = 3001; // Choose any available port number
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});