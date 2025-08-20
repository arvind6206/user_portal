import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../components/Input";
import Button from "../components/Button";

const Signup = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    password: "",
    companyName: "",
    isAgency: "Yes",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("popxUser", JSON.stringify(form));
    alert("Account created successfully!");
    navigate("/login");
  };

  const handleHomeClick = () => {
    navigate("/");
  };

  const handlePrevClick = () => {
    navigate("/login");
  };

  const handleNextClick = () => {
    navigate("/account");
  };

  return (
    <div className="container">
      <div className="page-content">
        <div className="signup-form">
          <h2>Create your PopX account</h2>

          <form onSubmit={handleSubmit}>
            <Input
              label="Full Name"
              name="fullName"
              placeholder="Marry Doe"
              value={form.fullName}
              onChange={handleChange}
              required={true}
            />

            <Input
              label="Phone number"
              name="phoneNumber"
              placeholder="Marry Doe"
              value={form.phoneNumber}
              onChange={handleChange}
              required={true}
            />

            <Input
              label="Email address"
              name="email"
              type="email"
              placeholder="Marry Doe"
              value={form.email}
              onChange={handleChange}
              required={true}
            />

            <Input
              label="Password"
              name="password"
              type="password"
              placeholder="Marry Doe"
              value={form.password}
              onChange={handleChange}
              required={true}
            />

            <Input
              label="Company name"
              name="companyName"
              placeholder="Marry Doe"
              value={form.companyName}
              onChange={handleChange}
            />

            <div className="radio-group">
              <label>Are you an Agency*</label>
              <div className="radio-options">
                <label className="radio-option">
                  <input
                    type="radio"
                    name="isAgency"
                    value="Yes"
                    checked={form.isAgency === "Yes"}
                    onChange={handleChange}
                  />
                  <span>Yes</span>
                </label>
                <label className="radio-option">
                  <input
                    type="radio"
                    name="isAgency"
                    value="No"
                    checked={form.isAgency === "No"}
                    onChange={handleChange}
                  />
                  <span>No</span>
                </label>
              </div>
            </div>

            <Button
              text="Create Account"
              onClick={handleSubmit}
              variant="primary"
            />
          </form>
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
          <span className="nav-text">3 of 4</span>
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

export default Signup;
