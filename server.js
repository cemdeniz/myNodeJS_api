const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const studentRoutes = require('./routes/student');
const homeworkRoutes = require('./routes/homework');

const app = express();

// configure bodyParser to parse JSON data
app.use(bodyParser.json());

// connect to MongoDB database
mongoose
  .connect('mongodb://127.0.0.1/mydatabase', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB database');
  })
  .catch((error) => {
    console.error('Failed to connect to MongoDB database:', error);
  });

// set up routes
app.use('/students', studentRoutes);
app.use('/homeworks', homeworkRoutes);

// handle unknown routes
app.use((req, res, next) => {
  res.status(404).json({ message: 'Route not found' });
});

// start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});
