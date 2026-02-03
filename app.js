// server.js
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello from Node.js app 🚀');
});

app.get('/health', (req, res) => {
  res.send('Health is ok');
});

app.get('/thankyou', (req, res) => {
  res.send('thankyou page');
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
