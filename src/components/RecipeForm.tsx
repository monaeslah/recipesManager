import React from "react";
import TagSelector from "./TagSelector";
import IngredientInput from "./IngredientInput";
import InstructionsInput from "./InstructionsInput";

const RecipeForm: React.FC = () => {
  return (
    <div className="recipe-form">
      <label>Name</label>

      <IngredientInput />

      <InstructionsInput />
    </div>
  );
};

export default RecipeForm;
