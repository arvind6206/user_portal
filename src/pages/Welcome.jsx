import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

const Welcome = () => {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate("/");
  };

  const handlePrevClick = () => {
    // This is the first page, so we could loop to the last page or stay here
    navigate("/account");
  };

  const handleNextClick = () => {
    navigate("/login");
  };

  return (
    <div className="container">
      <div className="welcome-content">
        <h2>Welcome to PopX</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
        <div className="welcome-buttons">
          <Button
            text="Create Account"
            onClick={() => navigate("/signup")}
            variant="primary"
          />
          <Button
            text="Already Registered? Login"
            onClick={() => navigate("/login")}
            variant="secondary"
          />
        </div>
      </div>

      {/* Navigation Bar */}
      <div className="nav-bar">
        <div className="nav-home" onClick={handleHomeClick}>
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
          </svg>
        </div>
        <div className="nav-pagination">
          <div className="nav-arrow" onClick={handlePrevClick}>
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
            </svg>
          </div>
          <span className="nav-text">1 of 4</span>
          <div className="nav-arrow" onClick={handleNextClick}>
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
