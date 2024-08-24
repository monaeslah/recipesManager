import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addRecipe } from "../features/recipes/recipesSlice";

import { v4 as uuidv4 } from "uuid";
import tagsMain from "../utils/tags.json";

const { tags } = tagsMain;
const RecipeForm: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [recipeNotes, setRecipeNotes] = useState<string>("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [taglist, setTaglist] = useState(tags);
  const [videoLink, setVideoLink] = useState<string>("");
  const [source, setSource] = useState<string>("");
  const [nutritionInfo, setNutritionInfo] = useState<string>("");
  const [pairingNotes, setPairingNotes] = useState<string>("");
  const [ingredients, setIngredients] = useState<string>();
  // const [ingredients, setIngredients] = useState<string[]>([]);
  const [instructions, setInstructions] = useState<string>();
  const save = () => {
    const newRecipe = {
      id: uuidv4(),
      name,
      description,
      recipeNotes,
      selectedTags,
      videoLink,
      source,
      nutritionInfo,
      pairingNotes,
      ingredients,
      instructions,
    };
    dispatch(addRecipe(newRecipe));
    console.log("newRecipe", newRecipe);
    navigate("/");
  };
  const tagSelected = (id: number, name: string) => {
    console.log("tag selected", id, name);

    setSelectedTags((prevTags) => {
      if (prevTags.includes(name)) {
        return prevTags.filter((t) => t !== name);
      } else {
        return [...prevTags, name];
      }
    });
  };
  return (
    <div id="recipe-form">
      <div className="recipe-form">
        <div>
          <section className="about">
            <h2>About</h2>
            <label>Name</label>
            <input
              type="text"
              placeholder="Vegetable Lasagna"
              onChange={(e) => setName(e.target.value)}
            />

            <label>Description</label>
            <textarea
              placeholder="Wholesome hearty winter lasagna recipe"
              onChange={(e) => setName(e.target.value)}
            ></textarea>

            <label>Recipe Notes</label>
            <textarea
              placeholder="Best served with crusty garlic bread"
              onChange={(e) => setRecipeNotes(e.target.value)}
            ></textarea>

            <div className="tag-list">
              <div className="filter-tags">
                {taglist.map((tag) => (
                  <div
                    key={tag.id}
                    onClick={() => {
                      tagSelected(tag.id, tag.name);
                    }}
                    className={`tag body-small ${
                      selectedTags.includes(tag.name) ? "selected" : ""
                    }`}
                  >
                    {tag.name}
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="recipe-footer">
            <label>Video link</label>
            <input
              type="text"
              placeholder="https://youtube.com/..."
              onChange={(e) => setVideoLink(e.target.value)}
            />

            <label>Source</label>
            <input
              type="text"
              placeholder="Grandma's family cookbook"
              onChange={(e) => setSource(e.target.value)}
            />

            <label>Nutritional information</label>
            <textarea
              placeholder="240 Calories per serving"
              onChange={(e) => setNutritionInfo(e.target.value)}
            ></textarea>

            <label>Pairing notes</label>
            <textarea
              placeholder="Pinots pure red fruits..."
              onChange={(e) => setPairingNotes(e.target.value)}
            ></textarea>

            <button className="link-recipe-btn">Link</button>
            <button className="delete-recipe-btn">Delete</button>
          </section>
        </div>
        <div>
          <section className="ingredients">
            <h2>Ingredients</h2>
            <textarea
              placeholder="1 cup white flour (extra for kneading)"
              onChange={(e) => setIngredients(e.target.value)}
            ></textarea>
          </section>

          <section className="instructions">
            <h2>Instructions</h2>

            <textarea placeholder="Wash and dice the carrots, tomatoes, and mushrooms."></textarea>
          </section>
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
