// src/components/Login.tsx
import React, { useState } from "react";
import ButtonField from "./toggleBtn";
import Login from "./login";
import SignUp from "./signUp";

const Index: React.FC = () => {
  const [isSignUp, setIsSignUp] = useState(true);
  const handleToggle = () => {
    setIsSignUp(!isSignUp);
    console.log(isSignUp);
  };

  return (
    <div className="login-container">
      <div className="login-form">
        {isSignUp ? <SignUp /> : <Login />}
        <ButtonField onClick={handleToggle} isSignUp={isSignUp} />
      </div>
    </div>
  );
};

export default Index;
