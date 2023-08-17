const express = require('express');
const app = express();
const port = 3000;

// Import the test.js module
const testModule = require('./test');

app.get('/', (req, res) => {
  res.send('Backend is running at 3000');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
