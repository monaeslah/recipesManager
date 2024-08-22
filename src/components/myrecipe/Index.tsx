// src/App.tsx
import React, { useState } from "react";

import SearchBar from "./searchBar";
import FilterTags from "./FilterTags";
import RecipeList from "./recipeList";
import recipesData from "../../utils/recipes.json";
const { recipeslist } = recipesData;
const Recipe: React.FC = () => {
  const [recipes, setRecipes] = useState(recipeslist);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const filteredRecipes = recipes.filter(
    (recipe) =>
      recipe.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (selectedTags.length === 0 ||
        recipe.tags.some((tag: string) => selectedTags.includes(tag)))
  );

  const toggleTag = (tag: string) => {
    setSelectedTags((prevTags) =>
      prevTags.includes(tag)
        ? prevTags.filter((t) => t !== tag)
        : [...prevTags, tag]
    );
  };

  return (
    <div className="app-container body-small">
      <header>
        <span className="heading-small">CookNote</span>
      </header>
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <FilterTags selectedTags={selectedTags} toggleTag={toggleTag} />
      <RecipeList recipes={filteredRecipes} />
    </div>
  );
};

export default Recipe;
