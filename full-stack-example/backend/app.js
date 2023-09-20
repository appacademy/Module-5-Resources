const express = require('express');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const { ValidationError } = require('sequelize');

const routes = require('./routes');

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser());

app.use(routes);

app.use((_req, _res, next) => {
  const err = new Error("The requested resource couldn't be found.");
  err.title = "Resource Not Found";
  err.errors = ["The requested resource couldn't be found."];
  err.status = 404;
  next(err);
});

app.use((err, _req, _res, next) => {
  if (err instanceof ValidationError) {
    err.errors = err.errors.map((e) => e.message);
    err.title = 'Validation Error';
  }
  next(err);
});

app.use((err, _req, res, _next) => {
  res.status(err.status || 500);
  console.error(err);
  res.json({
    title: err.title || 'Server Error',
    message: err.message,
    errors: err.errors,
    stack: err.stack,
  });
});

module.exports = app;
