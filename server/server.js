const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const config = require('./config');
const postRoutes = require('./routes/post');
const paymentRoutes = require('./routes/payment');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/post', postRoutes);
app.use('/payment', paymentRoutes);

app.use((error, req, res, next) => {
  const status = error.statusCode || 500;
  const message = error.message;
  const data = error.data;
  res.status(status).json({ message, data });
});

const connect = async () => {
  try {
    await mongoose.connect(config.db.url);
    console.log('Connected to MongoDB');
  } catch (err) {
    console.log(err);
  }
};

connect();

app.listen(config.port, () => {
  console.log(`Server is running on port ${config.port}`);
});
