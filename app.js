// server.js
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello from Node.js app 🚀');
});

app.get('/health', (req, res) => {
  res.send('Health is ok');
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
