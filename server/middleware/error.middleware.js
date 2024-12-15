// Middleware to Handle 404 Not Found Errors
const notFound = (req, res, next) => {
    const error = new Error(`Not Found - ${req.originalUrl}`); // Corrected typo here (req.originalUrl)
    res.status(404); // Set status code for Not Found
    next(error); // Pass the error to the next middleware (error handling middleware)
};

// Middleware to Handle General Errors
const errorMiddleware = (err, req, res, next) => {
    const statusCode = res.statusCode || 500; // Default to 500 if no status code is set
    res.status(statusCode).json({
        message: err.message, // Send error message in response
        stack: process.env.NODE_ENV === 'production' ? null : err.stack // Hide stack trace in production
    });
};

module.exports = { notFound, errorMiddleware };
