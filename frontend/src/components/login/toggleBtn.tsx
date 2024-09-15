import React, { useState } from "react";

interface ButtonFieldProps {
  onClick: () => void;
  isSignUp: boolean;
}

const ButtonField: React.FC<ButtonFieldProps> = ({ onClick, isSignUp }) => {
  return (
    <div
      className={`input-field-container ${isSignUp ? "right-selected" : ""}`}
    >
      <button onClick={onClick} className="input-button left-button">
        {isSignUp ? "Sign Up" : "Login"}
      </button>

      <button onClick={onClick} className="input-button right-button">
        {isSignUp ? "Login" : "Sign Up"}
      </button>
    </div>
  );
};

export default ButtonField;
