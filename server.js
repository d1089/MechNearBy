const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const shops = require('./routes/shops');

dotenv.config({ path: './config/config.env' });

const app = express();

//Loggin middleware for development mode
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use('/api/v1/shops', shops);

const PORT = process.env.PORT || 8080;

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
