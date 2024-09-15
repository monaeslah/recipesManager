import React, { useState } from "react";
import { InputFieldContainer } from "../common/inputField";

const SignUp: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password || !name) {
      setErrorMessage("All fields are required");
      return;
    }
    setErrorMessage("");
  };

  return (
    <form className="signup-form" onSubmit={handleSubmit}>
      <h2 className="signup-title">Sign Up</h2>

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

      <div className="input-group register-input">
        <div className="column">
          <label htmlFor="password">Password:</label>
          <InputFieldContainer className="inputField xsmallInput">
            <input
              type="password"
              id="password"
              value={password}
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </InputFieldContainer>
        </div>
        <div className="column">
          <label htmlFor="password">Password:</label>
          <InputFieldContainer className="inputField xsmallInput">
            <input
              type="password"
              id="password"
              value={password}
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </InputFieldContainer>
        </div>
      </div>

      <button type="submit" className="login-button" onClick={handleSubmit}>
        Submit
      </button>
    </form>
  );
};

export default SignUp;
