import React from 'react';
import { Link } from 'react-router-dom';
import "../style.css"

const ErrorPage = ({ errorCode = 404, errorMessage = "Page Not Found" }) => {
  return (
    <div className="error-page">
      <div className="error-container">
        <h1 className="error-code">{errorCode}</h1>
        <h2 className="error-message">{errorMessage}</h2>
        <p className="error-description">
          Oops! The page you're looking for doesn't exist or an error occurred.
        </p>
        <Link to="/" className="error-home-link">
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
