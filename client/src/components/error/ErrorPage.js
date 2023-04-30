import React from "react";
import "./errorPage.css";
import { Link } from "react-router-dom";
function ErrorPage() {
  return (
    <div>
      <div class="error-container">
        <h1>Error 404</h1>
        <p>Sorry, the page you are looking for could not be found.</p>
        <br />
        <Link to="/" class="home-button">
          Go back to homepage
        </Link>
      </div>
    </div>
  );
}

export default ErrorPage;
