

const HttpError = require('../models/error.model');

const notFound = (req, res, next) => {
  const error = new HttpError('Not Found', 404);
  next(error);
};

const errorMiddleware = (err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'An error occurred!';
  res.status(statusCode).json({ message });
};

module.exports = { notFound, errorMiddleware };
