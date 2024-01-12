//Mongoose connection
const mongoose = require('mongoose');

// Replace 'your-database' with the name of your MongoDB database
const mongoURI = 'mongodb://127.0.0.1:27017/RealEstateDatabase';

mongoose.connect(mongoURI)

const db = mongoose.connection;

db.on('error', (err) => {
  console.error('MongoDB connection error:', err);
});

db.once('open', () => {
  console.log('Connected to MongoDB');
});


//Backend Code
const express = require('express');
const cors = require('cors');
const app = express()
app.use(cors());

const port = 5000


app.use(express.json())//middleware to use req.body

//Available routes
app.use('/api/auth',require('./routes/auth'));
app.use('/api/projects',require('./routes/projects'));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})