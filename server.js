const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const connectDB = require('./config/db');

dotenv.config({ path: './config/config.env' });

connectDB();

const shops = require('./routes/shops');

const app = express();

//Loggin middleware for development mode
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use('/api/v1/shops', shops);

const PORT = process.env.PORT || 8080;

const server = app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);

//for Unhandled Rejection from server
process.on('unhandledRejection', (err, promise) => {
  console.log(`Error: ${err.message}`);
  //close the server and exit()
  server.close(() => process.exit(1));
});
