require('dotenv').config(); 
const express = require('express');

const app = express();

const PORT = process.env.PORT 

app.get('/', (req, res) => {
  res.send(`Hello from Node.js app 🚀 ${PORT}`);
});

app.get('/health', (req, res) => {
  res.send('Health is ok');
});

app.get('/thankyou', (req, res) => {
  res.send('thankyou page');
});
app.listen(PORT, (error) =>{
    if(!error)
        console.log(`Server is Successfully Running, 
                   and App is listening on port ${PORT}`);
    else 
        console.log("Error occurred, server can't start", error);
    }
);
