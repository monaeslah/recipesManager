import React, { useState } from "react";
import { InputFieldContainer } from "../common/inputField";
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      setErrorMessage("Email and password are required");
      return;
    }
    if (email === "m@g.com" && password === "3333") {
      setErrorMessage("");
      navigate("/"); // Redirect to /dashboard
    } else {
      setErrorMessage("Invalid email or password");
    }
  };

  return (
    <div>
      <h2 className="login-title">Login</h2>
      {errorMessage && <div className="error-message">{errorMessage}</div>}
      <div className="input-group">
        <label htmlFor="email">Email:</label>
        <InputFieldContainer className="inputField smallInput">
          <input
            type="email"
            id="email"
            value={email}
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </InputFieldContainer>
      </div>
      <div className="input-group">
        <label htmlFor="password">Password:</label>
        <InputFieldContainer className="inputField smallInput">
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
          />
        </InputFieldContainer>
      </div>
      <button type="submit" className="login-button" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
};

export default Login;
