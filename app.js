require('dotenv').config();
const express = require('express');

const connectDB = require('./db')
const app = express();
app.use(express.json());
const PORT = process.env.PORT


app.get('/', (req, res) => {
  res.send(`Hello from Node.js app 🚀 ${PORT}`);
});

app.get('/health', (req, res) => {
  res.send(`Health is ok  ${PORT}`);
});

app.get('/thankyou', (req, res) => {
  res.send('thankyou page');
});

app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'OK',
    message: `Application is running fine ${PORT}`,
    timestamp: new Date().toISOString()
  });
});


app.post('/employee', async (req, res) => {
  try {
    const db = await connectDB();
    const { name, email, salary } = req.body;

    const result = await db.collection("employees").insertOne({
      name,
      email,
      salary
    });

    res.status(201).json({
      message: "Employee created",
      id: result.insertedId
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(PORT, (error) => {
  if (!error)
    console.log(`Server is Successfully Running, 
                   and App is listening on port ${PORT}`);
  else
    console.log("Error occurred, server can't start", error);
}
);
