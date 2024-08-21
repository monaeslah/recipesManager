import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addRecipe } from "../features/recipes/recipesSlice";
import TagSelector from "../components/TagSelector";
import IngredientInput from "../components/IngredientInput";
import InstructionsInput from "../components/InstructionsInput";
import { v4 as uuidv4 } from "uuid";
const RecipeForm: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // State management for form inputs
  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [recipeNotes, setRecipeNotes] = useState<string>("");
  const [tags, setTags] = useState<string[]>([]);
  const [videoLink, setVideoLink] = useState<string>("");
  const [source, setSource] = useState<string>("");
  const [nutritionInfo, setNutritionInfo] = useState<string>("");
  const [pairingNotes, setPairingNotes] = useState<string>("");
  const [ingredients, setIngredients] = useState<string[]>([]);
  const [instructions, setInstructions] = useState<string[]>([]);
  const save = () => {
    const newRecipe = {
      id: uuidv4(),
      name,
      description,
      recipeNotes,
      tags,
      videoLink,
      source,
      nutritionInfo,
      pairingNotes,
      ingredients,
      instructions,
    };
    dispatch(addRecipe(newRecipe));
    navigate("/");
  };
  return (
    <div id="recipe-form">
      <div className="recipe-form">
        <div>
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
        <div>
          <IngredientInput />

          <InstructionsInput />
        </div>{" "}
      </div>
      <footer>
        <button className="cancel-btn">Cancel</button>
        <button className="save-btn" onClick={save}>
          Save
        </button>
      </footer>
    </div>
  );
};

export default RecipeForm;
