import React, { useState } from "react";
import "./Form.css";
 
function Form() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
 
  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password && confirmPassword) {
      if (
        emailError === "" &&
        passwordError === "" &&
        confirmPasswordError === ""
      ) {
        alert("Form submitted successfully");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
        setEmailError("");
        setPasswordError("");
        setConfirmPasswordError("");
      } else {
        alert("Can't submit the form");
      }
    }
  };
 
  const handleEmailChange = (e) => {
    const { value } = e.target;
    setEmail(value);
    if (!/\S+@\S+\.\S+/.test(value)) {
      setEmailError("Please enter a valid email address");
    } else {
      setEmailError("");
    }
  };
 
  const handlePasswordChange = (e) => {
    const { value } = e.target;
    setPassword(value);
    if (value.length < 8) {
      setPasswordError("Password must be at least 8 characters long");
    } else {
      setPasswordError("");
    }
  };
 
  const handleConfirmPasswordChange = (e) => {
    const { value } = e.target;
    setConfirmPassword(value);
    if (value !== password) {
      setConfirmPasswordError("Passwords do not match");
    } else {
      setConfirmPasswordError("");
    }
  };
 
  return (
    
    <form onSubmit={handleSubmit}>
 
      <div className="form-control sze">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={handleEmailChange}
          className={emailError ? "error" : email ? "valid" : ""}
        />
        {emailError && <span className="error-text">{emailError}</span>}
      </div>
      <div className="form-control sze">
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={handlePasswordChange}
          className={passwordError ? "error" : password ? "valid" : ""}
        />
        {passwordError && <span className="error-text">{passwordError}</span>}
      </div>
      <div className="form-control sze">
        <label htmlFor="confirmPassword">Confirm Password:</label>
        <input
          type="password"
          id="confirmPassword"
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
          className={
            confirmPasswordError ? "error" : confirmPassword ? "valid" : ""
          }
        />
        {confirmPasswordError && (
          <span className="error-text">{confirmPasswordError}</span>
        )}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}
 
export default Form;