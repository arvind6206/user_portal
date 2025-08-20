import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../components/Input";
import Button from "../components/Button";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    const storedUser = JSON.parse(localStorage.getItem("popxUser"));

    if (!storedUser) {
      alert("No user found. Please sign up first.");
      return;
    }

    if (storedUser.email === email && storedUser.password === password) {
      navigate("/account");
    } else {
      alert("Invalid email or password");
    }
  };

  const handleHomeClick = () => {
    navigate("/");
  };

  const handlePrevClick = () => {
    navigate("/");
  };

  const handleNextClick = () => {
    navigate("/signup");
  };

  return (
    <div className="container">
      <div className="page-content">
        <div className="login-form">
          <h2>Signin to your PopX account</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
          <Input
            label="Email Address"
            type="email"
            placeholder="Enter email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            label="Password"
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button text="Login" onClick={handleLogin} variant="secondary" />
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
          <span className="nav-text">2 of 4</span>
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

export default Login;
