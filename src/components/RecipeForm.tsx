import React from "react";
import TagSelector from "./TagSelector";
import IngredientInput from "./IngredientInput";
import InstructionsInput from "./InstructionsInput";

const RecipeForm: React.FC = () => {
  return (
    <div className="recipe-form">
      <header>
        <button className="cancel-btn">Cancel</button>
        <button className="save-btn">Save</button>
      </header>

      <section className="about">
        <h2>About</h2>
        <label>Name</label>
        <input type="text" placeholder="Vegetable Lasagna" />

        <label>Description</label>
        <textarea placeholder="Wholesome hearty winter lasagna recipe"></textarea>

        <label>Recipe Notes</label>
        <textarea placeholder="Best served with crusty garlic bread"></textarea>

        <TagSelector />
      </section>

      <IngredientInput />

      <InstructionsInput />

      <section className="recipe-footer">
        <label>Video link</label>
        <input type="text" placeholder="https://youtube.com/..." />

        <label>Source</label>
        <input type="text" placeholder="Grandma's family cookbook" />

        <label>Nutritional information</label>
        <textarea placeholder="240 Calories per serving"></textarea>

        <label>Pairing notes</label>
        <textarea placeholder="Pinots pure red fruits..."></textarea>

        <button className="link-recipe-btn">Link</button>
        <button className="delete-recipe-btn">Delete</button>
      </section>
    </div>
  );
};

export default RecipeForm;
