import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Account = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const data = location.state || {
    name: "Marry Doe",
    email: "Marry@Gmail.Com",
  };

  const handleHomeClick = () => {
    navigate("/");
  };

  const handlePrevClick = () => {
    navigate("/signup");
  };

  const handleNextClick = () => {
    // This is the last page, so we could loop to the first page
    navigate("/");
  };

  return (
    <div className="container">
      <div className="page-content">
        <div className="account-content">
          <h2>Account Settings</h2>

          <div className="profile-card">
            <div className="profile-picture">
              <img src="https://i.pravatar.cc/150?img=5" alt="Profile" />
              <div className="camera-icon">📷</div>
            </div>
            <div className="profile-info">
              <h3>{data.name}</h3>
              <p>{data.email}</p>
            </div>
          </div>

          <p className="profile-bio">
            Lorem Ipsum Dolor Sit Amet, consetetur sadipscing Elitr, Sed Diam
            Nonumy eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam
            erat, Sed Diam
          </p>

          <hr className="divider" />
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
          <span className="nav-text">4 of 4</span>
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

export default Account;
